"use client"

import { motion } from "framer-motion"

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100

  return (
    <div className="fixed top-16 left-0 right-0 h-[2px] bg-secondary z-50 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "circOut" }}
        className="h-full bg-primary relative"
      >
        {/* Glowing Head of the progress bar */}
        <div className="absolute top-0 right-0 h-full w-[100px] bg-gradient-to-l from-primary-foreground to-transparent opacity-50" />
        <div className="absolute top-0 right-0 h-full w-[4px] bg-white shadow-[0_0_10px_#fff]" />
      </motion.div>
    </div>
  )
}