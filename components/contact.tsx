"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, ExternalLink, Send, User, MessageSquare } from "lucide-react"

interface ContactProps {
  setActiveSection: (section: string) => void
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
    const mailTo = `mailto:aman30t@gmail.com?subject=Contact from Portfolio&body=Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`
    window.location.href = mailTo
  }

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "aman30t@gmail.com",
      href: "mailto:aman30t@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7668803243",
      href: "tel:+917668803243",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aman",
      href: "https://www.linkedin.com/in/aman-thapliyal-452a012a5/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aman30t",
      href: "https://github.com/amanthapliyal30",
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
        © 2025 Aman Thapliyal — Made with ❤️ using Next.js, React & Tailwind CSS
      </p>
    </section>
  )
}
