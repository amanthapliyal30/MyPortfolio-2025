"use client"

import { useEffect } from "react"
import { GraduationCap, ArrowRight } from "lucide-react"

interface EducationProps {
  setActiveSection: (section: string) => void
}

export default function Education({ setActiveSection }: EducationProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("education")
        }
      },
      { threshold: 0.5 },
    )
    const element = document.getElementById("education")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [setActiveSection])

  const educationData = [
    {
      degree: "Master of Computer Applications (AI & ML)",
      institute: "Lovely Professional University (LPU)",
      period: "2025 - 2027",
      grade: "Ongoing",
      location: "Punjab, India",
    },
    {
      degree: "Bachelor’s in Computer Applications (BCA)",
      institute: "Institute of Hospitality Management and Sciences",
      period: "2022 - 2025",
      grade: "7.0 CGPA",
      location: "Uttarakhand, India",
    },
  ]

  return (
    <section id="education" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-4xl sm:text-5xl font-black gradient-text">EDUCATION</h2>
      </div>

      <div className="space-y-12">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="group relative block"
          >
            <div className="relative pl-10 pb-8 border-l-2 border-gradient-to-b from-primary to-accent">
              <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-3.5 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-primary/50 animate-pulse" />

              <div className="space-y-6 p-6 rounded-lg backdrop-blur-md border border-white/10 bg-card/30 hover:bg-card/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-semibold text-lg">{edu.institute}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                </div>

                <p className="text-sm text-muted-foreground">
                  {edu.period} • {edu.location}
                </p>

                <p className="text-foreground/80">
                  🎯 <span className="font-semibold">Grade:</span> {edu.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
