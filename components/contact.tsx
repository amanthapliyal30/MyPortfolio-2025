"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Linkedin, Mail, Phone, ExternalLink, Send, User, MessageSquare } from "lucide-react"

interface ContactProps {
  setActiveSection: (section: string) => void
}

// Custom Behance icon (not available in lucide-react)
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 7.42h-6.32V5.5H22v1.92zM7.35 13.1c.6-.29 1-.87 1-1.7 0-1.5-1.14-2.4-2.9-2.4H0v10h5.65c1.9 0 3.15-1 3.15-2.6 0-1.14-.6-1.94-1.45-2.3zM2.2 10.7h2.14c.83 0 1.34.36 1.34 1.05 0 .68-.5 1.05-1.34 1.05H2.2V10.7zm2.4 6.6H2.2v-2.35h2.4c.9 0 1.45.44 1.45 1.17 0 .74-.55 1.18-1.45 1.18zM17.65 8.7c-2.85 0-4.7 1.9-4.7 4.75 0 2.9 1.95 4.65 4.85 4.65 1.9 0 3.4-.8 4.15-2.3l-1.85-.85c-.4.75-1.2 1.2-2.2 1.2-1.35 0-2.25-.75-2.45-2.05h6.65c.05-.3.05-.55.05-.75 0-2.75-1.75-4.65-4.5-4.65zm-2.25 3.7c.2-1.15 1-1.85 2.2-1.85 1.15 0 1.9.7 2.05 1.85h-4.25z" />
    </svg>
  )
}

export default function Contact({ setActiveSection }: ContactProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveSection("contact"),
      { threshold: 0.5 }
    )
    const el = document.getElementById("contact")
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [setActiveSection])

  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const mailTo = `mailto:shivanidevrani5@gmail.com?subject=Contact from Portfolio&body=Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`
    window.location.href = mailTo
  }

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "shivanidevrani5@gmail.com",
      href: "mailto:shivanidevrani5@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6396258326",
      href: "tel:+916396258326",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shivani-devrani",
      href: "https://www.linkedin.com/in/shivani-devrani-629a66222/",
    },
    {
      icon: BehanceIcon,
      label: "Behance",
      value: "behance.net/shivanidevrani",
      href: "http://behance.net/shivanidevrani",
    },
  ]

  return (
    <section id="contact" className="space-y-12 pb-20">
      <div className="flex items-center gap-4">
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        <h2 className="text-4xl sm:text-5xl font-black gradient-text">CONTACT</h2>
        <Send className="w-6 h-6 text-accent animate-bounce" />
      </div>

      <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
        Let's create something amazing together! Fill out the form or connect with me directly through the links below 👇
      </p>

      {/* 🔥 Contact Form */}
      <div className="p-8 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-md hover:shadow-2xl hover:shadow-primary/10 transition-all">
        <div className="grid gap-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-primary/60" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-10 py-3 rounded-lg bg-transparent border border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary/60 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-primary/60" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-10 py-3 rounded-lg bg-transparent border border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary/60 outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-primary/60" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-10 py-3 rounded-lg bg-transparent border border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary/60 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-all w-fit flex items-center gap-2 group"
          >
            Send Message
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* ✅ Contact Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {contacts.map((contact, idx) => {
          const Icon = contact.icon
          return (
            <Link
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-primary/30 bg-card/40 p-6 hover:border-primary/60 transition-all duration-300 backdrop-blur-md hover:bg-card/60 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          )
        })}
      </div>

      <p className="text-center text-muted-foreground text-sm pt-12">
        © 2025 Shivani Devrani — Made with ❤️ using Next.js, React & Tailwind CSS
      </p>
    </section>
  )
}