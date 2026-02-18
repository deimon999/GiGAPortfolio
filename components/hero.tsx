"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { profileData } from "@/lib/profile"
import { projects } from "@/lib/projects"
import { motion, useReducedMotion } from "framer-motion"
import { fadeInVariants, slideUpVariants, staggerContainerVariants, staggerItemVariants } from "./motion"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  
  const handleScroll = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Publications", value: profileData.publications.length },
    { label: "Certifications", value: profileData.certifications.length },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "700ms" }} />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20">
              <span className="flex items-center gap-2">
                Available for opportunities
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </span>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={slideUpVariants}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
              {profileData.title}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={slideUpVariants}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {profileData.summary}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainerVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="px-6 py-3 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={slideUpVariants}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4"
          >
            <Button size="lg" className="gap-2 h-12 px-8" asChild>
              <a href="#contact">
                Get In Touch
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-12 px-8" asChild>
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={staggerContainerVariants}
            transition={{ delayChildren: 1.0, staggerChildren: 0.1 }}
            className="flex items-center gap-4 pt-6"
          >
            <motion.a
              variants={staggerItemVariants}
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              variants={staggerItemVariants}
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              variants={staggerItemVariants}
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            onClick={handleScroll}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce p-2 rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
