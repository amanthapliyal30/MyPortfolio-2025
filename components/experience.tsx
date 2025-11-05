"use client"

import { useEffect } from "react"
import { Briefcase, ArrowRight } from "lucide-react"

interface ExperienceProps {
  setActiveSection: (section: string) => void
}

export default function Experience({ setActiveSection }: ExperienceProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("experience")
        }
      },
      { threshold: 0.5 },
    )
    const element = document.getElementById("experience")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [setActiveSection])

  const experiences = [
  {
    title: "Web Developer",
    company: "Flytant Private Ltd",
    period: "Sep 2024 - Nov 2024",
    location: "Noida, India",
    certificate: "https://drive.google.com/file/d/11aNTheneEkldYaPEnaEs_5v1xKl4N-zs/view",
    description: [
      "Acquired practical skills in Next.js, TypeScript, and JavaScript through comprehensive training",
      "Built a responsive e-commerce platform using Next.js and Express.js with authentication & cart features",
    ],
  },
]


  return (
    <section id="experience" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-4xl sm:text-5xl font-black gradient-text">EXPERIENCE</h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <a
            key={idx}
            href={exp.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="relative pl-10 pb-8 border-l-2 border-gradient-to-b from-primary to-accent">
              <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-3.5 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-primary/50 animate-pulse" />

              <div className="space-y-6 p-6 rounded-lg backdrop-blur-md border border-white/10 bg-card/30 hover:bg-card/40 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                </div>

                <p className="text-sm text-muted-foreground">
                  {exp.period} • {exp.location}
                </p>

                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-foreground/80 flex gap-3 group/item">
                      <span className="text-primary/60 group-hover/item:text-primary transition-colors flex-shrink-0 font-bold">
                        ▹
                      </span>
                      <span className="group-hover/item:text-foreground/90 transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-primary font-medium underline opacity-70 group-hover:opacity-100 transition-opacity">
                  📄 View Certificate
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
