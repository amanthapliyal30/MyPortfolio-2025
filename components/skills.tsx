"use client"

import { useEffect } from "react"
import { Zap } from "lucide-react"

interface SkillsProps {
  setActiveSection: (section: string) => void
}

export default function Skills({ setActiveSection }: SkillsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("skills")
        }
      },
      { threshold: 0.5 },
    )
    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [setActiveSection])

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
      icon: "🔤",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React", "Express.js", "Spring Boot", "Numpy", "Pandas", "Matplotlib"],
      icon: "🏗️",
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "Feature Scaling",
        "Feature Selection",
        "Linear Regression",
        "Logistic Regression",
        "Polynomial Regression",
        "NLP",
        "Text Preprocessing",
      ],
      icon: "🤖",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      icon: "🗄️",
    },
    {
      title: "Tools & Other",
      skills: ["Data Structures & Algorithms", "Problem Solving", "Git", "RESTful APIs"],
      icon: "🛠️",
    },
  ]

  return (
    <section className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-4xl sm:text-5xl font-black gradient-text">SKILLS</h2>
        <Zap className="w-6 h-6 text-primary animate-bounce" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="group space-y-5">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/60 transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-br from-card/80 to-card/40 border border-primary/30 rounded-lg text-foreground/90 text-sm font-medium hover:border-primary/60 hover:bg-card/80 hover:text-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
