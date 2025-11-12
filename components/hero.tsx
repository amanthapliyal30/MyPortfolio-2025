"use client"

import Image from "next/image"
import Link from "next/link"
import { Sparkles, Download, Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [dark, setDark] = useState(false)

  // Add/remove .dark class on <html> tag
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [dark])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* ✅ Top-Right Buttons */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Download CV */}
        <Link
          href="/Aman_Resume.pdf"
          download
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:bg-accent transition-all duration-300"
        >
          <Download size={18} />
          Download CV
        </Link>

        {/* 🌗 Theme Toggle Button */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg border border-border bg-card text-foreground hover:bg-accent hover:text-white transition-all duration-300 shadow-md"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/30 rounded-full blur-[90px] opacity-20 animate-float" />
        <div
          className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent/30 rounded-full blur-[90px] opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-8">

          {/* ✅ Bigger Profile Image */}
          <div className="relative mb-4">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/60 shadow-2xl hover:scale-110 transition-all duration-300 backdrop-blur-md">
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

            <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
              MCA Student • AI/ML Specialist • Full-Stack Developer
            </p>

            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent solutions at the intersection of machine learning and web development.
              Passionate about building scalable applications.
            </p>
          </div>

          {/* Decoration */}
          <div className="flex items-center gap-4 pt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
            <Sparkles className="w-5 h-5 text-primary animate-spin-slow" />
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full" />
          </div>

        </div>
      </div>
    </section>
  )
}
