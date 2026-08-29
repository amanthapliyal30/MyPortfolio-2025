"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

// Custom Behance icon (not available in lucide-react)
function BehanceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7.42h-6.32V5.5H22v1.92zM7.35 13.1c.6-.29 1-.87 1-1.7 0-1.5-1.14-2.4-2.9-2.4H0v10h5.65c1.9 0 3.15-1 3.15-2.6 0-1.14-.6-1.94-1.45-2.3zM2.2 10.7h2.14c.83 0 1.34.36 1.34 1.05 0 .68-.5 1.05-1.34 1.05H2.2V10.7zm2.4 6.6H2.2v-2.35h2.4c.9 0 1.45.44 1.45 1.17 0 .74-.55 1.18-1.45 1.18zM17.65 8.7c-2.85 0-4.7 1.9-4.7 4.75 0 2.9 1.95 4.65 4.85 4.65 1.9 0 3.4-.8 4.15-2.3l-1.85-.85c-.4.75-1.2 1.2-2.2 1.2-1.35 0-2.25-.75-2.45-2.05h6.65c.05-.3.05-.55.05-.75 0-2.75-1.75-4.65-4.5-4.65zm-2.25 3.7c.2-1.15 1-1.85 2.2-1.85 1.15 0 1.9.7 2.05 1.85h-4.25z" />
    </svg>
  )
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

  const socialLinks = [
    { href: "http://behance.net/shivanidevrani", icon: BehanceIcon },
    { href: "https://www.linkedin.com/in/shivani-devrani-629a66222/", icon: Linkedin },
    { href: "mailto:shivanidevrani5@gmail.com", icon: Mail },
    { href: "tel:+916396258326", icon: Phone },
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
            Shivani
          </h1>
          <p
            className={`font-medium tracking-wide mb-10 bg-gradient-to-r from-[#00BFFF] via-[#7CFC00] to-[#FF69B4] text-transparent bg-clip-text animate-pulse transition-all
            ${isShrunk ? "text-xs" : "text-sm"}`}
          >
            BCA Graduate <span className="mx-1">•</span> UI/UX Designer
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
            {socialLinks.map(({ href, icon: Icon }, i) => (
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
          <p className="text-xs text-gray-500">© 2026 Shivani Devrani</p>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Shivani</h1>
          <p className="text-sm text-gray-600 mb-8">BCA Graduate • UI/UX Designer</p>

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
            {socialLinks.map(({ href, icon: Icon }, i) => (
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
          <p className="text-xs text-gray-500">© 2026 Shivani Devrani</p>
        </div>
      </aside>
    </>
  )
}