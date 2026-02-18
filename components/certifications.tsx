"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { profileData } from "@/lib/profile"
import { SlideUp, StaggerContainer, StaggerItem } from "./motion"

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <SlideUp className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </SlideUp>

        {/* Certifications Grid */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profileData.certifications.map((cert, index) => (
            <StaggerItem key={index}>
              <Card className="border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <Badge variant="outline" className="text-primary border-primary/50">
                  {cert.year}
                </Badge>
              </CardContent>
            </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
