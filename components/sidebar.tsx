"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isShrunk, setIsShrunk] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "ABOUT", id: "about" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "EDUCATION", id: "education" },
    { label: "PROJECTS", id: "projects" },
    { label: "SKILLS", id: "skills" },
    { label: "CERTIFICATIONS", id: "certificates" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white/90 border-r border-gray-200 px-6 flex-col justify-between hidden lg:flex z-40 transition-all duration-300 backdrop-blur-lg shadow-md
          ${isShrunk ? "w-56 py-6" : "w-64 p-8"}`}
      >
        <div className="transition-all">
          {/* Name */}
          <h1 className={`font-bold text-gray-900 transition-all ${isShrunk ? "text-2xl" : "text-3xl"}`}>
            Aman
          </h1>
          <p
            className={`font-medium tracking-wide mb-10 bg-gradient-to-r from-[#00BFFF] via-[#7CFC00] to-[#FF69B4] text-transparent bg-clip-text animate-pulse transition-all
            ${isShrunk ? "text-xs" : "text-sm"}`}
          >
            MCA Student <span className="mx-1">•</span> AI/ML Specialist
          </p>

          {/* Navigation */}
          <nav className="space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`block text-sm font-medium transition-all border-l-2 pl-3 duration-300
                  ${
                    activeSection === item.id
                      ? "text-blue-600 border-blue-500 translate-x-1"
                      : "text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300 hover:translate-x-1"
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
              { href: "tel:+917668803243", icon: Phone },
            ].map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="p-2 text-gray-500 hover:text-blue-600 transition-all"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500">© 2025 Aman Thapliyal</p>
        </div>
      </aside>

      {/* ✅ Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 lg:hidden z-50 p-2 bg-white/90 backdrop-blur-md rounded-md border border-gray-200 shadow-md hover:shadow-lg transition-all text-gray-800"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ✅ Mobile Drawer Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-60 bg-white/95 border-r border-gray-200 p-8 flex flex-col justify-between lg:hidden z-40 transition-transform duration-300 shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Aman</h1>
          <p className="text-sm text-gray-600 mb-8">MCA Student • AI/ML Specialist</p>

          <nav className="space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className={`block text-sm font-medium transition-all duration-300 border-l-2 pl-3
                  ${
                    activeSection === item.id
                      ? "text-blue-600 border-blue-500"
                      : "text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-300"
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
              { href: "tel:+917668803243", icon: Phone },
            ].map(({ href, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                className="p-2 text-gray-500 hover:text-blue-600 transition-all"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500">© 2025 Aman Thapliyal</p>
        </div>
      </aside>
    </>
  )
}
