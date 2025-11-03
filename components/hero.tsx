"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20 animate-float" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-15 animate-spin-slow" />
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
              <Image 
                src="/aman.jpeg" 
                alt="Aman Thapliyal" 
                fill 
                className="object-cover" 
                priority 
              />
            </div>
          </div>

          {/* Name + Title */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="gradient-text animate-gradient-shift block">
                Aman Thapliyal
              </span>
            </h1>

            <div className="space-y-3">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                MCA Student • AI/ML Specialist • Full-Stack Developer
              </p>

              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Crafting intelligent solutions at the intersection of machine learning and web development. Passionate
                about transforming ideas into impactful, scalable applications.
              </p>
            </div>
          </div>

          {/* Decoration */}
          <div className="flex items-center gap-4 pt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
            <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
            <div
              className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Scroll Mouse Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
