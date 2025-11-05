"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "PROJECTS", id: "projects" },
    { label: "SKILLS", id: "skills" },
    { label: "CERTIFICATIONS", id: "certifications" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar/100 border-r border-sidebar-border p-8 flex-col justify-between hidden lg:flex z-40">
        <div>
          <h1 className="text-3xl font-bold text-black mb-1">
            Aman
          </h1>
          <p className="text-sm font-medium tracking-wide mb-10 bg-gradient-to-r from-[#00BFFF] via-[#7CFC00] to-[#FF69B4] text-transparent bg-clip-text animate-pulse">
            MCA Student <span className="text-[#FFD700]/70 mx-2">•</span> AI/ML Specialist
          </p>

          {/* Navigation */}
          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`block text-sm font-medium transition-all duration-300 border-l-2 pl-3 ${
                  activeSection === item.id
                    ? "text-primary border-primary translate-x-1"
                    : "text-muted-foreground border-transparent hover:text-primary hover:translate-x-1"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="space-y-6">
          <div className="flex gap-4">
            {[
              { href: "https://github.com/amanthapliyal30", icon: Github },
              { href: "https://www.linkedin.com/in/aman-thapliyal-452a012a5/", icon: Linkedin },
              { href: "mailto:aman30t@gmail.com", icon: Mail },
              { href: "tel:+917668803243", icon: Phone }
            ].map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="p-2 text-muted-foreground hover:text-primary transition-all"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2025 Aman Thapliyal</p>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 lg:hidden z-50 p-2 bg-sidebar/80 backdrop-blur-md rounded-md border border-sidebar-border shadow-md hover:shadow-lg transition-all text-black"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-60 bg-sidebar/100 border-r border-sidebar-border p-8 flex flex-col justify-between lg:hidden z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-black mb-1">
            Aman
          </h1>
          <p className="text-sm text-muted-foreground mb-8">MCA Student • AI/ML Specialist</p>

          <nav className="space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className={`block text-sm font-medium transition-all duration-300 border-l-2 pl-3 ${
                  activeSection === item.id
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6 pb-6">
          <div className="flex gap-4">
            {[
              { href: "https://github.com/amanthapliyal30", icon: Github },
              { href: "https://www.linkedin.com/in/aman-thapliyal-452a012a5/", icon: Linkedin },
              { href: "mailto:aman30t@gmail.com", icon: Mail },
              { href: "tel:+917668803243", icon: Phone }
            ].map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2025 Aman Thapliyal</p>
        </div>
      </aside>
    </>
  )
}
