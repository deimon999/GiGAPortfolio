"use client"

import { GraduationCap, Award, BookOpen } from "lucide-react"
import { profileData } from "@/lib/profile"

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging data to solve real-world problems
            </p>
          </div>

          {/* Profile Summary */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 md:p-12 space-y-6">
              <p className="text-lg leading-relaxed">
                {profileData.summary}
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in transforming complex data into actionable insights using modern 
                tools and frameworks. Whether it's creating interactive Power BI dashboards or 
                deploying machine learning models, I'm driven by the challenge of making data 
                accessible and meaningful.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {profileData.education.map((edu, index) => (
              <div key={index} className="glass rounded-xl p-6 space-y-4 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.field}</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="glass rounded-lg p-4 border-l-4 border-primary">
                <p className="font-semibold">Microsoft Azure Fundamentals</p>
                <p className="text-sm text-muted-foreground">2024</p>
              </div>
              <div className="glass rounded-lg p-4 border-l-4 border-primary">
                <p className="font-semibold">MongoDB Java Path Developer</p>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <div className="glass rounded-lg p-4 border-l-4 border-primary">
                <p className="font-semibold">Programming using Java</p>
                <p className="text-sm text-muted-foreground">Infosys Springboard, 2024</p>
              </div>
            </div>
          </div>

          {/* Publication */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Publication & Research</h3>
            </div>
            {profileData.publications.map((pub, index) => (
              <div key={index} className="glass rounded-lg p-6 border-l-4 border-primary">
                <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                <p className="text-muted-foreground mb-3">
                  {pub.venue} ({pub.year})
                </p>
                {pub.description && (
                  <p className="text-sm">{pub.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}