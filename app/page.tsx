"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Certifications from "@/components/certification"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 lg:ml-64">
        <Hero />
        <div className="space-y-20 px-6 py-20 sm:px-8 md:px-12 lg:px-16">
          <div id="about" className="scroll-mt-20">
            <About setActiveSection={setActiveSection} />
          </div>
          <div id="experience" className="scroll-mt-20">
            <Experience setActiveSection={setActiveSection} />
          </div>
          <div id="projects" className="scroll-mt-20">
            <Projects setActiveSection={setActiveSection} />
          </div>
          <div id="skills" className="scroll-mt-20">
            <Skills setActiveSection={setActiveSection} />
          </div>
          <div id="certificates" className="scroll-mt-20">
            <Certifications setActiveSection={setActiveSection}/>
          </div>
          <div id="contact" className="scroll-mt-20">
            <Contact setActiveSection={setActiveSection} />
          </div>
        </div>
      </main>
    </div>
  )
}
