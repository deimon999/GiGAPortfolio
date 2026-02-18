"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { profileData } from "@/lib/profile"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional journey and contributions to real-world projects
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {profileData.experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-12 border-l-2 border-primary pb-8 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                
                <div className="glass rounded-xl p-6 md:p-8 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/10 text-green-500">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Briefcase className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location} ({exp.type})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.startDate} – {exp.endDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
