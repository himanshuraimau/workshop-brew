"use client"

import { useState } from "react"
import { 
  ChevronDown, 
  ChevronRight, 
  Copy, 
  Check, 
  Terminal, 
  Code2, 
  Hash,
  AlertCircle
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// --- Types ---
interface SectionContent {
  title: string
  code: string
  language?: string
}

interface SlideProps {
  slide: any
  onCopyCode: (id: number, code: string) => void
  copied: number | null
}

// --- Main Component ---
export default function Slide({ slide, onCopyCode, copied }: SlideProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedSections((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  // Hero Slide Variant
  if (slide.type === "hero") {
    return (
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-background to-background" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6 max-w-5xl px-6"
        >
          <div className="inline-block px-3 py-1 border border-primary/50 bg-primary/10 text-primary text-xs font-mono mb-4 tracking-[0.2em]">
            SESSION_INITIATED
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-foreground">
            {slide.title}
            <span className="text-primary">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light border-l-2 border-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            {slide.subtitle}
          </p>
        </motion.div>
      </div>
    )
  }

  // Custom Component Variant
  if (slide.component) {
    const CustomComponent = slide.component
    return (
      <div className="w-full min-h-screen pt-28 pb-32">
        <CustomComponent />
      </div>
    )
  }

  // Standard Content Slide
  return (
    <div className="w-full min-h-screen pt-28 pb-40">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Slide Header */}
        <header className="mb-16 border-b border-border pb-6">
          <div className="flex items-center gap-3 text-accent font-mono text-sm font-bold tracking-widest mb-2">
            <Hash size={14} />
            MODULE_{slide.id || "0X"}
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
            {slide.title}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground font-mono">
             // {slide.subtitle}
          </p>
        </header>

        <div className="space-y-16">
          {/* SECTION 1: INTRO */}
          <Section
            title="01 // CONCEPTS"
            content={slide.intro}
            language={slide.language}
            sectionId={0}
            onCopyCode={(code) => onCopyCode(0, code)}
            copied={copied === 0}
            defaultOpen={true}
          />

          {/* SECTION 2: CORE LOGIC */}
          <Section
            title="02 // IMPLEMENTATION"
            content={slide.chatbot}
            language={slide.language}
            sectionId={1}
            onCopyCode={(code) => onCopyCode(1, code)}
            copied={copied === 1}
            highlight={true}
          />

          {/* SECTION 3: ADVANCED */}
          {slide.advanced && slide.advanced.length > 0 && (
            <div className="pt-8 border-t border-dashed border-border">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-6 flex items-center gap-2">
                <AlertCircle className="text-accent" size={20} />
                Advanced Directives
              </h3>
              
              <div className="grid gap-4">
                {slide.advanced.map((item: any, idx: number) => (
                  <AdvancedCard
                    key={idx}
                    item={item}
                    idx={idx}
                    isExpanded={expandedSections.includes(idx)}
                    onToggle={() => toggleExpanded(idx)}
                    onCopy={() => onCopyCode(100 + idx, item.code)}
                    isCopied={copied === 100 + idx}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// --- Sub-Components ---

function Section({
  title,
  content,
  language,
  sectionId,
  onCopyCode,
  copied,
  defaultOpen = false,
  highlight = false
}: {
  title: string
  content: { description: string; code: string }
  language: string
  sectionId: number
  onCopyCode: (code: string) => void
  copied: boolean
  defaultOpen?: boolean
  highlight?: boolean
}) {
  if (!content) return null;

  return (
    <div className={`group relative ${highlight ? "bg-secondary/20 -mx-4 p-4 md:-mx-6 md:p-6 border border-border/50" : ""}`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* Description Side */}
        <div className="md:w-1/3 space-y-4">
          <h3 className={`text-lg font-bold uppercase tracking-wide ${highlight ? "text-primary" : "text-foreground"}`}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {content.description}
          </p>
        </div>

        {/* Code Side (Terminal) */}
        <div className="md:w-2/3">
          <TerminalWindow 
            code={content.code} 
            language={language} 
            onCopy={() => onCopyCode(content.code)} 
            copied={copied} 
          />
        </div>
      </div>
    </div>
  )
}

function TerminalWindow({ 
  code, 
  language, 
  onCopy, 
  copied 
}: { 
  code: string, 
  language: string, 
  onCopy: (code: string) => void, 
  copied: boolean 
}) {
  return (
    <div className="relative rounded-none border border-border bg-[#0a0a0a] shadow-2xl overflow-hidden group/terminal">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#1a1a1a] border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-500/80" />
            <div className="w-2.5 h-2.5 bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 bg-green-500/80" />
          </div>
          <span className="ml-3 text-[10px] font-mono text-muted-foreground uppercase flex items-center gap-1">
            <Terminal size={10} />
            {language}
          </span>
        </div>
        
        <button
          onClick={() => onCopy(code)}
          className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-muted-foreground hover:text-foreground hover:bg-border/50 transition-colors"
        >
          {copied ? (
            <>
              <Check size={10} className="text-green-500" /> COPIED
            </>
          ) : (
            <>
              <Copy size={10} /> COPY
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative p-4 overflow-x-auto">
        {/* Line Numbers Decoration */}
        <div className="absolute left-0 top-4 bottom-4 w-8 border-r border-border/30 flex flex-col items-center gap-[2px] text-[10px] text-muted-foreground/30 font-mono select-none pt-1">
          <div>1</div><div>2</div><div>3</div><div>4</div>
        </div>
        
        <pre className="pl-8 font-mono text-xs md:text-sm leading-relaxed text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

function AdvancedCard({ item, idx, isExpanded, onToggle, onCopy, isCopied }: any) {
  return (
    <div className="border border-border bg-card transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors group"
      >
        <span className="font-mono text-xs text-accent uppercase tracking-widest">
          ADV_0{idx + 1}
        </span>
        <span className="font-bold uppercase text-sm tracking-wide group-hover:text-primary transition-colors flex-1 ml-4">
          {item.title}
        </span>
        <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
          <ChevronRight size={16} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-border/50 bg-secondary/10">
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                {item.description}
              </p>
              <TerminalWindow 
                code={item.code} 
                language="typescript" 
                onCopy={onCopy} 
                copied={isCopied} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}