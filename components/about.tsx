"use client"

import { useEffect } from "react"
import { Sparkles, Code2, Brain, Target } from "lucide-react"

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("about")
        }
      },
      { threshold: 0.4 },
    )
    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [setActiveSection])

  const stats = [
    { icon: Brain, label: "MCA Student", value: "1st Year", color: "from-primary/20" },
    { icon: Code2, label: "BCA CGPA", value: "7.0", color: "from-accent/20" },
    { icon: Target, label: "Projects", value: "5+", color: "from-primary/20" },
  ]

  return (
    <section id="about" className="space-y-10 px-4 sm:px-6 md:px-12">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text">ABOUT</h2>
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary animate-bounce" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-card/60 to-card/20 p-5 hover:border-primary/60 transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg hover:bg-card/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-1 sm:space-y-3">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-foreground/70">{stat.label}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="space-y-4 sm:space-y-6">
        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          I'm a first-year MCA student at Lovely Professional University specializing in Artificial Intelligence and
          Machine Learning. With a strong foundation in Java, Python, and Data Structures & Algorithms, I'm passionate
          about problem-solving and building innovative solutions.
        </p>
        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          My journey spans practical experience in machine learning and AI, including data preprocessing, feature
          engineering, model training, and evaluation. I've built predictive models and applied advanced techniques to
          extract meaningful insights from complex datasets.
        </p>
        <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
          Passionate about the intersection of AI and real-world problem solving, I continuously explore innovative
          approaches to develop scalable, intelligent solutions that make an impact across domains.
        </p>
      </div>
    </section>
  )
}