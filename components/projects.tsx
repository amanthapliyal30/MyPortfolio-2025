"use client"

import { useEffect } from "react"
import { Code2, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveSection("projects"),
      { threshold: 0.5 }
    )

    const el = document.getElementById("projects")
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [setActiveSection])

  const projects = [
    {
      title: "SMS Spam Tracker",
      tags: ["Python", "Machine Learning", "Data Science"],
      description:
        "A machine learning model that classifies SMS messages as spam or legitimate using logistic regression.",
      highlights: [
        "Dataset cleaning & processing",
        "Feature engineering",
        "High model accuracy",
      ],
      location: "Kotdwara, India",
      image: "/images/projects/spam-tracker.png",
      link: "https://github.com/aman30t/sms-spam-classifier",
    },
    {
      title: "E-Commerce Website",
      tags: ["Next.js", "Express.js", "TypeScript"],
      description:
        "A responsive e-commerce platform featuring user authentication and cart functionality.",
      highlights: [
        "Next.js UI + Auth",
        "Product & cart management",
        "Seamless responsive UX",
      ],
      location: "Noida, India",
      image: "/images/projects/ecommerce.png",
      link: "https://trulyroselle.netlify.app/",
    },
  ]

  return (
    <section id="projects" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-4xl sm:text-5xl font-black gradient-text">PROJECTS</h2>
        <Zap className="w-6 h-6 text-accent animate-bounce" />
      </div>

      <div className="grid gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-card/60 to-card/20 hover:bg-card/40 p-8 transition-all duration-300 backdrop-blur-md block"
          >
            {/* Image Thumbnail */}
            <div className="relative mb-6 rounded-lg overflow-hidden shadow-lg">
     <Image
  src={project.image}
  alt={project.title}
  width={1600}
  height={560} // ✅ Bigger showcase look
  className="rounded-lg object-cover w-full h-[35rem] group-hover:scale-105 transition-transform duration-500"
/>



              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="relative space-y-6">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 group-hover:border-primary/60 transition-all font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowRight className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
              </div>

              <p className="text-foreground/80 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-primary/20">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm flex gap-3 text-foreground/70 group/item">
                    <span className="text-accent/60">✨</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground pt-2">{project.location}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
