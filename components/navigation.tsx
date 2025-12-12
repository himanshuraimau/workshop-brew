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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border h-16 pointer-events-none">
      <div className="w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
        
        {/* Logo / System Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">
            <Cpu size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black uppercase tracking-tighter leading-none">
              WORKSHOP<span className="text-primary">_BREW</span>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Interactive Learning Environment
            </span>
          </div>
        </div>

        {/* Center: Mode Selector */}
        <div className="flex items-center gap-2 bg-background/60 rounded-lg border border-border p-1">
          <Button
            variant={mode === "workshop" ? "default" : "ghost"}
            size="sm"
            onClick={() => onModeChange("workshop")}
            className="text-xs font-mono tracking-wide"
          >
            WORKSHOP
          </Button>
          <Button
            variant={mode === "matiks" ? "default" : "ghost"}
            size="sm"
            onClick={() => onModeChange("matiks")}
            className={`text-xs font-mono tracking-wide ${
              mode === "matiks" ? "bg-[#00ff88] text-black hover:bg-[#00ff88]/90" : ""
            }`}
          >
            MATIKS EVENT
          </Button>
        </div>

        {/* Right Side: Status & Counter */}
        <div className="flex items-center gap-6">
          
          {/* Status Indicator (Hidden on small screens) */}
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-muted-foreground border-r border-border pr-6">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              SYSTEM_ONLINE
            </div>
            <span className="mx-2 text-border">|</span>
            <div className="flex items-center gap-1">
              <Wifi size={12} />
              <span>CONNECTED</span>
            </div>
          </div>

          {/* Slide Counter - Only show in workshop mode */}
          {mode === "workshop" && (
            <div className="flex items-baseline gap-1 font-mono">
              <span className="text-xl font-bold text-foreground">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">
                {String(total).padStart(2, '0')}
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}