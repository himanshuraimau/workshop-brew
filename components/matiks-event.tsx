"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Users, Trophy, Zap, Code, ArrowRight, Copy, Check, Smartphone, Monitor, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MatiksEvent() {
  const [copiedPasscode, setCopiedPasscode] = useState(false)

  const copyPasscode = async () => {
    await navigator.clipboard.writeText("082828")
    setCopiedPasscode(true)
    setTimeout(() => setCopiedPasscode(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            {/* Event Logos */}
            <div className="flex items-center justify-center gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image 
                  src="/matiks.png" 
                  alt="Matiks Logo" 
                  width={120} 
                  height={120}
                  className="brightness-110"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-[#00ff88]"
              >
                ×
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Image 
                  src="/aib.png" 
                  alt="AI Brewery Logo" 
                  width={120} 
                  height={120}
                  className="brightness-110"
                />
              </motion.div>
            </div>

            {/* Event Title */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-6xl font-black uppercase tracking-tighter">
                COLLEGE <span className="text-[#00ff88]">LEAGUE</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A 7-day competitive mental fitness challenge • December 12-19, 2025
              </p>
            </motion.div>

            {/* Event Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Badge variant="outline" className="border-[#00ff88] text-[#00ff88] bg-[#00ff88]/10 px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                7 Days
              </Badge>
              <Badge variant="outline" className="border-[#00ff88] text-[#00ff88] bg-[#00ff88]/10 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                College Students
              </Badge>
              <Badge variant="outline" className="border-[#00ff88] text-[#00ff88] bg-[#00ff88]/10 px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                Competitive
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is This Event */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-[#00ff88]">WHAT IS THIS EVENT?</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Think of your brain as a muscle that needs training. Matiks × AI Brewery brings you a 
                <span className="text-[#00ff88] font-semibold"> competitive mental gym</span> - a 7-day league where college students 
                compete in fast-paced cognitive challenges, building mathematical thinking and problem-solving skills.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-700 hover:border-[#00ff88] transition-colors">
                <CardHeader>
                  <Zap className="w-8 h-8 text-[#00ff88] mb-2" />
                  <CardTitle className="text-white">Cognitive Arena</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Real-time math duels and daily challenges designed to sharpen your mental agility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700 hover:border-[#00ff88] transition-colors">
                <CardHeader>
                  <Trophy className="w-8 h-8 text-[#00ff88] mb-2" />
                  <CardTitle className="text-white">Competitive League</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    7 days of structured competition with leaderboards, rankings, and rewards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700 hover:border-[#00ff88] transition-colors">
                <CardHeader>
                  <Users className="w-8 h-8 text-[#00ff88] mb-2" />
                  <CardTitle className="text-white">Social Proof</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Join thousands of students from IITs and top colleges in this mental fitness journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gray-900 border border-[#00ff88] rounded-2xl p-8 space-y-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00ff88] to-green-400 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-black">M</span>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-xs font-bold text-white">!</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Matiks</h3>
              <p className="text-gray-400 mb-2">Mental Fitness for Everyone</p>
              <p className="text-sm text-gray-500">
                Choose your platform and start your journey
              </p>
            </div>
            
            {/* Platform Buttons */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Play Store */}
              <Button 
                asChild
                className="bg-gray-800 hover:bg-[#00ff88] hover:text-black text-white font-bold px-6 py-6 rounded-xl border border-gray-700 hover:border-[#00ff88] transition-all flex flex-col items-center gap-2 h-auto"
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.matiks.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Smartphone className="w-8 h-8" />
                  <span className="text-base">Play Store</span>
                  <span className="text-xs opacity-70">Android App</span>
                </a>
              </Button>

              {/* Web App */}
              <Button 
                asChild
                className="bg-gray-800 hover:bg-[#00ff88] hover:text-black text-white font-bold px-6 py-6 rounded-xl border border-gray-700 hover:border-[#00ff88] transition-all flex flex-col items-center gap-2 h-auto"
              >
                <a 
                  href="https://www.matiks.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Globe className="w-8 h-8" />
                  <span className="text-base">Web App</span>
                  <span className="text-xs opacity-70">Browser Access</span>
                </a>
              </Button>

              {/* Desktop */}
              <Button 
                asChild
                className="bg-gray-800 hover:bg-[#00ff88] hover:text-black text-white font-bold px-6 py-6 rounded-xl border border-gray-700 hover:border-[#00ff88] transition-all flex flex-col items-center gap-2 h-auto"
              >
                <a 
                  href="https://www.matiks.in/desktop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Monitor className="w-8 h-8" />
                  <span className="text-base">Desktop</span>
                  <span className="text-xs opacity-70">Windows/Mac</span>
                </a>
              </Button>
            </div>
            
            <p className="text-xs text-gray-500">
              All platforms sync seamlessly • One account, everywhere
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-[#00ff88]">HOW TO REGISTER</h2>
              <p className="text-lg text-gray-300">
                Follow these simple steps to join the competition
              </p>
            </div>

            <div className="text-center">
              <Image 
                src="/steps.png" 
                alt="Registration Steps" 
                width={800} 
                height={600}
                className="rounded-lg border border-gray-700 mx-auto"
              />
            </div>

            {/* Passcode Section */}
            <div className="bg-gray-900 p-8 rounded-lg border border-[#00ff88] text-center">
              <h3 className="text-2xl font-bold text-[#00ff88] mb-4">ACCESS PASSCODE</h3>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-black px-6 py-3 rounded-lg border border-gray-600 font-mono text-2xl tracking-widest">
                  082828
                </div>
                <Button 
                  onClick={copyPasscode}
                  variant="outline"
                  size="sm"
                  className="border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black"
                >
                  {copiedPasscode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Use this passcode during registration
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-bold px-8 py-4 text-lg"
              >
                JOIN THE LEAGUE <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-gray-400 mt-4">
                Competition starts December 12, 2025 • Don't miss out!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}