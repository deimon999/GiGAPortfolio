"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { profileData } from "@/lib/profile"
import { SlideUp, StaggerContainer, StaggerItem } from "./motion"

export function Publications() {
  return (
    <section id="publications" className="px-4 py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <SlideUp className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Publications & Research
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic contributions and research presentations
          </p>
        </SlideUp>

        {/* Publications List */}
        <StaggerContainer className="space-y-6">
          {profileData.publications.map((pub, index) => (
            <StaggerItem key={index}>
              <Card className="border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="font-semibold text-primary">{pub.venue}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{pub.year}</span>
                </div>
                {pub.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.description}
                  </p>
                )}
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
