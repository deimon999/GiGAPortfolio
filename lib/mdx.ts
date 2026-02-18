import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from './projects'

const contentDirectory = path.join(process.cwd(), 'content', 'projects')

export interface MDXProject {
  slug: string
  frontmatter: {
    title: string
    summary: string
    category: 'LLM' | 'DL' | 'ML' | 'BI'
    coverImage: string
    githubUrl: string
    liveUrl: string
    featured: boolean
    metrics: Array<{ label: string; value: string }>
    stack: string[]
  }
  content: string
}

/**
 * Check if an MDX file exists for a given project slug
 */
export function hasMDXContent(slug: string): boolean {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    return fs.existsSync(filePath)
  } catch {
    return false
  }
}

/**
 * Load MDX content for a project by slug
 */
export async function getMDXProject(slug: string): Promise<MDXProject | null> {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as MDXProject['frontmatter'],
      content,
    }
  } catch (error) {
    console.error(`Error loading MDX for ${slug}:`, error)
    return null
  }
}

/**
 * Get all MDX project slugs
 */
export function getAllMDXSlugs(): string[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const files = fs.readdirSync(contentDirectory)
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

/**
 * Convert MDX frontmatter to Project type for compatibility
 */
export function mdxToProject(mdx: MDXProject): Project {
  return {
    slug: mdx.slug,
    title: mdx.frontmatter.title,
    summary: mdx.frontmatter.summary,
    category: mdx.frontmatter.category,
    coverImage: mdx.frontmatter.coverImage,
    githubUrl: mdx.frontmatter.githubUrl,
    liveUrl: mdx.frontmatter.liveUrl,
    featured: mdx.frontmatter.featured,
    metrics: mdx.frontmatter.metrics,
    stack: mdx.frontmatter.stack,
    // These fields are typically in MDX content, not frontmatter
    problem: '',
    approach: [],
    results: [],
  }
}
