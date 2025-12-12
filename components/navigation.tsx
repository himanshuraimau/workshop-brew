"use client"

import { Cpu, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavigationMode = "workshop" | "matiks"

interface NavigationProps {
  current: number;
  total: number;
  mode: NavigationMode;
  onModeChange: (mode: NavigationMode) => void;
}

export default function Navigation({ current, total, mode, onModeChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border h-auto min-h-16 pointer-events-none">
      <div className="w-full h-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 flex flex-wrap items-center justify-between gap-2 sm:gap-3 md:gap-0 pointer-events-auto">
        
        {/* Logo / System Name */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary flex items-center justify-center text-primary-foreground">
            <Cpu size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black uppercase tracking-tighter leading-none">
              WORKSHOP<span className="text-primary">_BREW</span>
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-wider sm:tracking-widest hidden sm:block">
              Interactive Learning
            </span>
          </div>
        </div>

        {/* Center: Mode Selector */}
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-background/60 rounded-md sm:rounded-lg border border-border p-0.5 sm:p-1 flex-shrink-0 order-3 sm:order-none">
          <Button
            variant={mode === "workshop" ? "default" : "ghost"}
            size="sm"
            onClick={() => onModeChange("workshop")}
            className="text-[9px] sm:text-[10px] md:text-xs font-mono tracking-wide h-7 sm:h-8 md:h-9 px-2 sm:px-3"
          >
            WORKSHOP
          </Button>
          <Button
            variant={mode === "matiks" ? "default" : "ghost"}
            size="sm"
            onClick={() => onModeChange("matiks")}
            className={`text-[9px] sm:text-[10px] md:text-xs font-mono tracking-wide h-7 sm:h-8 md:h-9 px-2 sm:px-3 ${
              mode === "matiks" ? "bg-[#00ff88] text-black hover:bg-[#00ff88]/90" : ""
            }`}
          >
            MATIKS EVENT
          </Button>
        </div>

        {/* Right Side: Status & Counter */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-shrink-0">
          
          {/* Status Indicator - Now visible on all screens with responsive sizing */}
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-mono text-muted-foreground border-r border-border pr-2 sm:pr-3 md:pr-4 lg:pr-6">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500"></span>
              </span>
              <span className="hidden sm:inline">ONLINE</span>
              <span className="sm:hidden">ON</span>
            </div>
            <span className="mx-0.5 sm:mx-1 md:mx-2 text-border hidden sm:inline">|</span>
            <div className="flex items-center gap-0.5 sm:gap-1 hidden sm:flex">
              <Wifi size={10} className="sm:w-3 sm:h-3 md:w-[12px] md:h-[12px]" />
              <span className="hidden md:inline">CONNECTED</span>
              <span className="md:hidden">CONN</span>
            </div>
          </div>

          {/* Slide Counter - Only show in workshop mode */}
          {mode === "workshop" && (
            <div className="flex items-baseline gap-0.5 sm:gap-1 font-mono">
              <span className="text-base sm:text-lg md:text-xl font-bold text-foreground">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">/</span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {String(total).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}