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
      { threshold: 0.25 } // ✅ Mobile-friendly detection
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
      // location: "Kotdwara, India",
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
    <section id="projects" className="space-y-12 px-4 sm:px-6 lg:px-0"> {/* ✅ Mobile padding */}
      <div className="flex items-center gap-3 flex-wrap"> {/* ✅ Wrap on smaller screens */}
        <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-3xl sm:text-5xl font-black gradient-text">PROJECTS</h2> {/* ✅ Smaller on mobile */}
        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent animate-bounce" />
      </div>

      <div className="grid gap-10 sm:gap-12"> {/* ✅ More breathing space on mobile */}
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-card/60 to-card/20 hover:bg-card/40 p-5 sm:p-8 transition-all duration-300 backdrop-blur-md block"
          >
            {/* Image Thumbnail */}
            <div className="relative mb-6 rounded-lg overflow-hidden shadow-lg aspect-[16/9] sm:h-[35rem]"> {/* ✅ Maintains ratio on mobile */}
              <Image
                src={project.image}
                alt={project.title}
                width={1600}
                height={560}
                className="rounded-lg object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative space-y-6">
              <div className="flex justify-between items-start gap-3">
                <div className="w-full">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-bold text-foreground"> {/* ✅ Font scaled */}
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

                <ArrowRight className="hidden sm:block w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" /> {/* ✅ Hide on mobile */}
              </div>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed"> {/* ✅ Font scaled */}
                {project.description}
              </p>

              <ul className="space-y-3 pt-4 border-t border-primary/20">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-xs sm:text-sm flex gap-2 sm:gap-3 text-foreground/70">
                    <span className="text-accent/60">✨</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[10px] sm:text-xs text-muted-foreground pt-2"> {project.location} </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}