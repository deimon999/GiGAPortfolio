import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Publications } from "@/components/publications"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Publications />
      <Certifications />
      <Contact />
    </div>
  )
}
