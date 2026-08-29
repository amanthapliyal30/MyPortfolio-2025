"use client"

import { useEffect } from "react"
import { Code2, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

interface Project {
  title: string
  tags: string[]
  description: string
  highlights: string[]
  image: string
  link: string
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveSection("projects"),
      { threshold: 0.25 }
    )

    const el = document.getElementById("projects")
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [setActiveSection])

  const projects: Project[] = [
    {
      title: "Women Safety App – UI/UX Case Study",
      tags: ["Figma", "UI/UX", "Mobile App Design"],
      description:
        "Designed a women safety mobile application focused on quick emergency assistance, SOS alerts, live location sharing, emergency contacts, and nearby safe places.",
      highlights: [
        "🚨 One-tap SOS Alert",
        "📍 Real-time Location Sharing",
        "📞 Emergency Contacts",
        "🛡️ Nearby Safe Places",
        "⚡ Minimal interaction steps",
      ],
      image: "/images/projects/women-safety.jpeg",
      link: "https://www.behance.net/gallery/248510211/Women-Safety-App",
    },

    {
      title: "AI Resume Builder – UI/UX Case Study",
      tags: ["Figma", "UI/UX", "AI Product Design"],
      description:
        "Designed an interactive AI-powered resume builder with smooth animations, clean UI, structured resume flows, reusable components, and smart interactions.",
      highlights: [
        "🤖 AI-powered resume suggestions",
        "📄 Professional resume templates",
        "✏️ Easy resume editing flow",
        "📥 Preview & download screens",
        "📱 Responsive design system",
      ],
      image: "/images/projects/ai-resume-builder.jpeg",
      link: "https://www.behance.net/gallery/252371433/AI-Resume-Builder",
    },

    {
      title: "Life Reset App – UI/UX Case Study",
      tags: ["Figma", "UI/UX", "Productivity App"],
      description:
        "Designed a productivity app to help users stay consistent with goals through goal tracking, reminders, progress monitoring, and motivating UI.",
      highlights: [
        "📊 Smart Goal Tracking",
        "🔔 Reminder & Notification System",
        "📈 Progress Visualization",
        "🎯 Habit & Task Management",
        "✨ Motivational & Minimal UI",
      ],
      image: "/images/projects/life-reset.jpeg",
      link: "https://www.behance.net/gallery/233780097/Life-Reset-App",
    },
  ]

  return (
    <section id="projects" className="space-y-12 px-4 sm:px-6 lg:px-0">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-3xl sm:text-5xl font-black gradient-text">
          PROJECTS
        </h2>
        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent animate-bounce" />
      </div>

      <div className="grid gap-10 sm:gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card/60 to-card/20 hover:bg-card/40 p-5 sm:p-8 transition-all duration-300 backdrop-blur-md"
          >
            <div className="relative mb-6 rounded-xl overflow-hidden shadow-2xl aspect-[16/9] sm:h-[35rem]">
              <Image
                src={project.image}
                alt={project.title}
                width={1600}
                height={560}
                className="rounded-xl object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative space-y-6">
              <div className="flex justify-between items-start gap-3">
                <div className="w-full">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>

                    <h3 className="text-xl sm:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 group-hover:border-primary/60 transition-all font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowRight className="hidden sm:block w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </div>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-primary/20">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs sm:text-sm flex gap-2 sm:gap-3 text-foreground/70"
                  >
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-all shadow-lg"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
