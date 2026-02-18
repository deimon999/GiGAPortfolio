"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { profileData } from "@/lib/profile"

const socialLinks = [
  {
    name: "GitHub",
    href: profileData.social.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: profileData.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "Email",
    href: `mailto:${profileData.email}`,
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row">
            <p>
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
            <span className="hidden md:inline">•</span>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link
            href="#home"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
