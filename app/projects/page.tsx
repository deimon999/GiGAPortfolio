"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"
import { projects, ProjectCategory } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { SlideUp, StaggerContainer } from "@/components/motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SortOption = "featured" | "latest" | "alphabetical"

const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "LLM", label: "LLM" },
  { value: "DL", label: "Deep Learning" },
  { value: "ML", label: "Machine Learning" },
  { value: "BI", label: "Business Intelligence" },
]

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all")
  const [sortBy, setSortBy] = useState<SortOption>("featured")

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects]

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(project => project.category === selectedCategory)
    }

    // Filter by search query (title + tags/stack)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.stack.some(tech => tech.toLowerCase().includes(query))
      )
    }

    // Sort
    switch (sortBy) {
      case "featured":
        result.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        })
        break
      case "latest":
        // Since we don't have dates, keep original order (assuming latest is first)
        break
      case "alphabetical":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return result
  }, [searchQuery, selectedCategory, sortBy])

  const projectCount = filteredAndSortedProjects.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <SlideUp className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              All Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my portfolio of AI, Machine Learning, and Data Science projects
            </p>
          </SlideUp>

          {/* Filters Section */}
          <div className="space-y-6 mb-12">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search projects by title or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Category Filters and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Category Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground hidden sm:block" />
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="rounded-full"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Sort by:
                </span>
                <Select value={sortBy} onValueChange={(value: string) => setSortBy(value as SortOption)}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {projectCount} {projectCount === 1 ? "project" : "projects"} found
                {selectedCategory !== "all" && (
                  <span> in <strong>{categories.find(c => c.value === selectedCategory)?.label}</strong></span>
                )}
                {searchQuery && (
                  <span> matching <strong>"{searchQuery}"</strong></span>
                )}
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          {projectCount > 0 ? (
            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSortedProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </StaggerContainer>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-6xl">🔍</div>
                <h3 className="text-xl font-semibold">No Projects Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
