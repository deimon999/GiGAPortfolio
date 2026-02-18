"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Brain, Wrench } from "lucide-react"
import { profileData } from "@/lib/profile"
import { SlideUp, StaggerContainer, StaggerItem } from "./motion"

const iconMap: Record<string, any> = {
  "Languages & Data Analysis": Code2,
  "Machine Learning": Brain,
  "AI & NLP": Brain,
  "Web & Databases": Database,
  "Tools & Technologies": Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SlideUp className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build data-driven solutions
          </p>
        </SlideUp>

        {/* Skills Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profileData.skills.map((skillCategory, index) => {
            const Icon = iconMap[skillCategory.category] || Code2
            return (
              <StaggerItem key={index}>
                <Card className="hover:shadow-md hover:border-primary/50 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
