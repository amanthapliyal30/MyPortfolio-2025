"use client"

import { useEffect } from "react"
import { Award, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CertificationsProps {
  setActiveSection: (section: string) => void
}

export default function Certifications({ setActiveSection }: CertificationsProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveSection("certifications"),
      { threshold: 0.5 }
    )

    const el = document.getElementById("certifications")
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [setActiveSection])

  const certifications = [
    {
      title: "JS Intermediate Certificate",
      issuer: "HackerRank",
      date: "2024",
      link: "https://www.hackerrank.com/certificate/js-intermediate",
      image: "/js.png",
    },
    {
      title: "Tech Blitz Hackathon",
      issuer: "Coding Ninjas",
      date: "2024",
      link: "https://drive.google.com/file/d/11aNTheneEkldYaPEnaEs_5v1xKl4N-zs/view",
      image: "/hackathon.png",
    },
  ]

  return (
    <section id="certifications" className="min-h-screen space-y-16 pb-24 pt-24">
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-4xl sm:text-5xl font-black gradient-text">CERTIFICATIONS</h2>
        <Award className="w-7 h-7 text-accent animate-bounce" />
      </div>

      <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
        These certifications highlight my continuous learning journey and commitment to mastering cutting-edge skills.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <Link
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card/40 p-6 hover:border-primary/60 transition-all duration-300 backdrop-blur-md hover:backdrop-blur-lg hover:bg-card/60 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
          >
            {/* Certification Image */}
            <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>

            <div className="relative space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 text-accent transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle className="w-4 h-4 text-primary" />
                <p>{cert.issuer}</p>
              </div>

              <p className="text-xs text-muted-foreground">{cert.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
