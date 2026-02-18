"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Project } from "@/lib/projects"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  const hoverVariants = {
    rest: { 
      y: 0, 
      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" 
    },
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1), 0 0 30px -5px rgb(var(--primary) / 0.4)",
    },
  }

  const categoryColors: Record<string, string> = {
    LLM: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    DL: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    ML: "bg-green-500/10 text-green-600 border-green-500/20",
    BI: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={shouldReduceMotion ? undefined : "hover"}
    >
      <motion.div
        variants={hoverVariants}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="group border-border transition-colors duration-300 hover:border-primary/50 h-full flex flex-col">
          <CardHeader className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              {project.featured && (
                <Badge variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                  Featured
                </Badge>
              )}
              <Badge 
                variant="outline" 
                className={categoryColors[project.category]}
              >
                {project.category}
              </Badge>
            </div>
            
            <Link href={`/projects/${project.slug}`}>
              <CardTitle className="group-hover:text-primary transition-colors cursor-pointer">
                {project.title}
              </CardTitle>
            </Link>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col space-y-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.summary}
            </p>

            {/* Problem Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">
                Problem
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {project.problem}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.slice(0, 2).map((metric, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <div className="font-bold text-primary text-sm">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((tech, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 5 && (
                <Badge variant="outline" className="text-xs">
                  +{project.stack.length - 5} more
                </Badge>
              )}
            </div>

            {/* Links */}
            <div className="space-y-3 pt-4 mt-auto">
              <Button size="sm" className="w-full gap-2" asChild>
                <Link href={`/projects/${project.slug}`}>
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex gap-3">
                {project.githubUrl && project.githubUrl !== "#" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 opacity-50 cursor-not-allowed"
                    disabled
                    title="Source code not available"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                )}
                {project.liveUrl && project.liveUrl !== "#" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-2 opacity-50 cursor-not-allowed"
                    disabled
                    title="Live demo not available"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
