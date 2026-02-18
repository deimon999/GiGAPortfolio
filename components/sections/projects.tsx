"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects"
import { profileData } from "@/lib/profile"

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcase of my recent work in AI, Machine Learning, and Data Science
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="glass rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                        Featured
                      </span>
                    )}
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.summary}
                  </p>
                  
                  {/* Metrics */}
                  {project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="text-center p-2 rounded bg-muted/50">
                          <div className="font-semibold text-primary">{metric.value}</div>
                          <div className="text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" variant="outline" className="gap-2" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {new Set(projects.map(p => p.category)).size}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {new Set(projects.flatMap(p => p.stack)).size}+
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>

          {/* View More */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg" asChild>
              <a href={profileData.social.github} target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
