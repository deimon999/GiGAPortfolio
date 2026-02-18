"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { profileData } from "@/lib/profile"
import { SlideUp, StaggerContainer, StaggerItem } from "./motion"

export function Experience() {
  return (
    <section id="experience" className="px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <SlideUp className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional journey and contributions to real-world projects
          </p>
        </SlideUp>

        {/* Timeline */}
        <StaggerContainer className="space-y-8">
          {profileData.experience.map((exp, index) => (
            <StaggerItem
              key={index}
              className="relative pl-8 md:pl-12 border-l-2 border-primary/30 pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg" />

              <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 md:p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-bold">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {exp.location} ({exp.type})
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements with Impact Metrics */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border/50"
                      >
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <p className="flex-1 text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
