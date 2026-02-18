"use client"

import { Code2, Database, Brain, Wrench } from "lucide-react"
import { profileData } from "@/lib/profile"

const iconMap: Record<string, any> = {
  "Languages & Data Analysis": Code2,
  "Machine Learning": Brain,
  "AI & NLP": Brain,
  "Web & Databases": Database,
  "Tools & Technologies": Wrench,
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build data-driven solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {profileData.skills.map((skillCategory, index) => {
              const Icon = iconMap[skillCategory.category] || Code2
              return (
                <div
                  key={index}
                  className="glass rounded-xl p-6 space-y-4 hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-lg">{skillCategory.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">Research Publication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
