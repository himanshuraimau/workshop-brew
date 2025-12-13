"use client"

import { useState, useEffect, useCallback } from "react"
import { 
  ArrowLeft, 
  ArrowRight, 
  Terminal, 
  Copy, 
  Check, 
  Maximize2,
  Cpu
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Slide from "@/components/slide"
import MatiksEvent from "@/components/matiks-event"
import Navigation from "@/components/navigation"
import { slides } from "@/data/slides-index"

type NavigationMode = "workshop" | "matiks"

// Animation Variants for Directional Sliding
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),
}

export default function HomePage() {
  const [[currentSlide, direction], setPage] = useState([0, 0])
  const [copied, setCopied] = useState<number | null>(null)
  const [mode, setMode] = useState<NavigationMode>("matiks")

  // Smart Page Change Handler
  const paginate = useCallback((newDirection: number) => {
    const nextIndex = currentSlide + newDirection
    if (nextIndex >= 0 && nextIndex < slides.length) {
      setPage([nextIndex, newDirection])
    }
  }, [currentSlide])

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1)
      if (e.key === "ArrowLeft") paginate(-1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [paginate])

  // Copy Feedback Logic
  const handleCopy = async (id: number, code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  // Calculate Progress
  const progressPercentage = ((currentSlide + 1) / slides.length) * 100

  return (
    <div className="w-full min-h-screen relative flex flex-col bg-background">
      
      {/* Navigation */}
      <Navigation 
        current={currentSlide} 
        total={slides.length}
        mode={mode}
        onModeChange={setMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative pt-16">
        {mode === "workshop" ? (
          <div className="h-screen flex items-center justify-center p-4 sm:p-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full max-w-5xl h-full flex flex-col justify-center relative z-10"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x; // swipe distance
                  if (swipe < -50) paginate(1)
                  else if (swipe > 50) paginate(-1)
                }}
              >
                {/* The Slide Component is wrapped here */}
                <div className="bg-card/50 backdrop-blur-md border border-border p-6 md:p-10 shadow-2xl relative overflow-y-auto max-h-[calc(100vh-12rem)] group">
                  {/* Decorative Corner Markers */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                  <Slide
                    slide={slides[currentSlide]}
                    onCopyCode={handleCopy}
                    copied={copied}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <MatiksEvent />
        )}
      </main>

      {/* Bottom Control Deck - Only show in workshop mode */}
      {mode === "workshop" && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
          <div className="max-w-2xl mx-auto pointer-events-auto">
            <div className="bg-secondary/90 border border-border backdrop-blur-xl p-1 shadow-2xl flex flex-col gap-1">
              
              {/* Progress Bar (Integrated) */}
              <div className="w-full h-1 bg-muted overflow-hidden">
                <motion.div 
                  className="h-full bg-linear-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                />
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-1">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest">Online</span>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => paginate(-1)}
                    disabled={currentSlide === 0}
                    className="group relative px-4 py-2 bg-background border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:hover:border-border disabled:cursor-not-allowed active:translate-y-0.5"
                  >
                    <ArrowLeft size={20} />
                    <span className="sr-only">Previous</span>
                  </button>

                  <div className="h-full w-px bg-border mx-2" />

                  <button
                    onClick={() => paginate(1)}
                    disabled={currentSlide === slides.length - 1}
                    className="group relative px-4 py-2 bg-background border border-border hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:hover:border-border disabled:cursor-not-allowed active:translate-y-0.5"
                  >
                    <ArrowRight size={20} />
                    <span className="sr-only">Next</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                  <span>NAV:</span>
                  <kbd className="bg-muted px-1 py-0.5 text-foreground">←</kbd>
                  <kbd className="bg-muted px-1 py-0.5 text-foreground">→</kbd>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Visual Enhancement Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  )
}