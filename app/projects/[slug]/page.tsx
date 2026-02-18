import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react"
import { projects, getProjectBySlug } from "@/lib/projects"
import { getMDXProject, getAllMDXSlugs } from "@/lib/mdx"
import { serializeMDX } from "@/components/mdx-content"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TableOfContents } from "@/components/table-of-contents"
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/motion"
import { MDXContent } from "@/components/mdx-content"
import { ProjectStructuredData } from "@/components/structured-data"

// Generate static params for all projects (MDX + fallback)
export async function generateStaticParams() {
  const mdxSlugs = getAllMDXSlugs()
  const allSlugs = new Set([...mdxSlugs, ...projects.map((p) => p.slug)])
  
  return Array.from(allSlugs).map((slug) => ({
    slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Try MDX first, fallback to lib/projects.ts
  const mdxProject = await getMDXProject(slug)
  const project = mdxProject 
    ? { ...getProjectBySlug(slug)!, ...mdxProject.frontmatter, slug: mdxProject.slug }
    : getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deimonmi-portfolio.vercel.app'
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(project.title)}&category=${project.category}&tags=${encodeURIComponent(project.stack.slice(0, 3).join(','))}`

  return {
    title: project.title,
    description: project.summary,
    keywords: [
      ...project.stack,
      project.category,
      'Data Science',
      'Machine Learning',
      'Portfolio',
      'Project',
    ],
    authors: [{ name: 'Deimonmi Kyndiah' }],
    openGraph: {
      type: 'article',
      url: `${siteUrl}/projects/${slug}`,
      title: project.title,
      description: project.summary,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      publishedTime: new Date().toISOString(),
      tags: project.stack,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [ogImageUrl],
      creator: '@deimonmi',
    },
    alternates: {
      canonical: `${siteUrl}/projects/${slug}`,
    },
  }
}

const categoryColors: Record<string, string> = {
  LLM: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  DL: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  ML: "bg-green-500/10 text-green-600 border-green-500/20",
  BI: "bg-orange-500/10 text-orange-600 border-orange-500/20",
}

const tocItems = [
  { id: "overview", title: "Overview" },
  { id: "problem", title: "Problem" },
  { id: "approach", title: "Approach" },
  { id: "results", title: "Results" },
  { id: "stack", title: "Tech Stack" },
  { id: "learnings", title: "What I Learned" },
]

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Try to load MDX content first
  const mdxProject = await getMDXProject(slug)
  const hasMDX = mdxProject !== null
  
  // Fallback to lib/projects.ts
  const project = mdxProject 
    ? { ...getProjectBySlug(slug)!, ...mdxProject.frontmatter, slug: mdxProject.slug }
    : getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Serialize MDX content if available
  const mdxSource = hasMDX && mdxProject ? await serializeMDX(mdxProject.content) : null

  // Get next project (circular navigation)
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="min-h-screen bg-background">
      <ProjectStructuredData
        title={project.title}
        description={project.summary}
        category={project.category}
        stack={project.stack}
        githubUrl={project.githubUrl}
        slug={slug}
      />
      
      {/* Back Button */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Hero Section */}
            <SlideUp>
              <div className="space-y-6">
                {/* Category & Featured Badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge 
                    variant="outline" 
                    className={categoryColors[project.category]}
                  >
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="default" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {project.title}
                </h1>

                {/* Summary */}
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button asChild className="gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View Source
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      className="gap-2 opacity-50 cursor-not-allowed" 
                      disabled
                      title="Source code not available"
                    >
                      <Github className="h-4 w-4" />
                      View Source
                    </Button>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button asChild variant="outline" className="gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="gap-2 opacity-50 cursor-not-allowed" 
                      disabled
                      title="Live demo not available"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>

                {/* Metrics Grid */}
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                    {project.metrics.map((metric, i) => (
                      <Card key={i}>
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {metric.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </SlideUp>

            {/* Divider */}
            <div className="border-t" />

            {/* MDX Content (if available) or Fallback Sections */}
            {hasMDX && mdxSource ? (
              <SlideUp>
                <MDXContent source={mdxSource} />
              </SlideUp>
            ) : (
              <>
                {/* Overview Section */}
                <section id="overview" className="scroll-mt-24">
                  <SlideUp>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </SlideUp>
                </section>

                {/* Problem Section */}
                <section id="problem" className="scroll-mt-24">
                  <SlideUp>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight">The Problem</h2>
                      <Card className="border-l-4 border-l-primary">
                        <CardContent className="p-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.problem}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </SlideUp>
                </section>

                {/* Approach Section */}
                <section id="approach" className="scroll-mt-24">
                  <SlideUp>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight">Approach</h2>
                      <StaggerContainer className="space-y-4">
                        {project.approach.map((step, i) => (
                          <StaggerItem key={i}>
                            <Card>
                              <CardContent className="p-6">
                                <div className="flex gap-4">
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {i + 1}
                                  </div>
                                  <p className="text-muted-foreground leading-relaxed flex-1">
                                    {step}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </SlideUp>
                </section>

                {/* Results Section */}
                <section id="results" className="scroll-mt-24">
                  <SlideUp>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight">Results & Impact</h2>
                      <StaggerContainer className="space-y-3">
                        {project.results.map((result, i) => (
                          <StaggerItem key={i}>
                            <div className="flex gap-3 items-start">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                                <svg
                                  className="w-4 h-4 text-green-600"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <p className="text-muted-foreground leading-relaxed flex-1">
                                {result}
                              </p>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </SlideUp>
                </section>

                {/* Tech Stack Section */}
                <section id="stack" className="scroll-mt-24">
                  <SlideUp>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex flex-wrap gap-3">
                            {project.stack.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="px-4 py-2 text-sm"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </SlideUp>
                </section>

                {/* What I Learned Section */}
                <section id="learnings" className="scroll-mt-24">
                  <SlideUp>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold tracking-tight">What I Learned</h2>
                      <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6 space-y-4">
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">
                                Technical Skills
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                Gained hands-on experience with {project.stack.slice(0, 3).join(", ")}
                                {project.stack.length > 3 && `, and ${project.stack.length - 3} more technologies`}.
                                Developed proficiency in implementing real-world solutions in the {project.category} domain.
                              </p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-foreground mb-2">
                                Problem-Solving
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                Learned to break down complex problems into manageable steps and implement
                                systematic approaches to achieve measurable results.
                              </p>
                            </div>

                            <div>
                              <h3 className="font-semibold text-foreground mb-2">
                                Best Practices
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                Understood the importance of clean code, proper documentation, and
                                following industry standards for production-ready applications.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </SlideUp>
                </section>
              </>
            )}

            {/* Next Project Navigation */}
            <div className="border-t pt-12">
              <SlideUp>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Next Project</p>
                    <h3 className="text-xl font-bold">{nextProject.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {nextProject.summary}
                    </p>
                  </div>
                  <Button asChild size="lg" className="gap-2 shrink-0">
                    <Link href={`/projects/${nextProject.slug}`}>
                      View Project
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SlideUp>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  )
}
