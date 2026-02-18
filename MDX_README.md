# MDX Project Writeups

This portfolio supports rich MDX content for project writeups, allowing you to create in-depth technical articles with code blocks, styling, and storytelling.

## Overview

The system uses a **fallback-first approach**:
1. If an MDX file exists for a project slug in `content/projects/*.mdx`, it will be rendered
2. Otherwise, the system falls back to structured content from `lib/projects.ts`

## File Structure

```
content/
└── projects/
    ├── nexus-ai-study-assistant.mdx
    ├── deepfake-detection.mdx
    ├── flight-fare-prediction.mdx
    └── infrastructure-analytics-dashboard.mdx

lib/
├── mdx.ts                 # MDX utilities (loading, parsing)
└── projects.ts            # Structured project data (fallback)

components/
└── mdx-content.tsx        # MDX renderer with styled components

app/
└── projects/
    └── [slug]/
        └── page.tsx       # Dynamic project page with MDX support
```

## Creating MDX Project Files

### 1. Frontmatter Schema

Every MDX file must include YAML frontmatter with the following fields:

```mdx
---
title: "Project Title"
summary: "Brief one-line description for cards and SEO"
category: "LLM" | "DL" | "ML" | "BI"
coverImage: "/projects/image.jpg"
githubUrl: "https://github.com/..."
liveUrl: "https://demo.example.com"
featured: true | false
metrics:
  - label: "Metric Name"
    value: "Value"
  - label: "Another Metric"
    value: "95%"
stack:
  - "Technology 1"
  - "Technology 2"
  - "Technology 3"
---
```

### 2. MDX Content Structure

After frontmatter, write your content using Markdown with optional React components:

```mdx
## The Challenge

Describe the problem you solved...

## The Solution

### Technical Architecture

Explain your approach with code examples:

\`\`\`python
def example_function():
    """Code blocks are syntax highlighted"""
    return "Works great!"
\`\`\`

## The Results

- **Measurable outcome 1**: Description
- **Measurable outcome 2**: Description

### Key Achievements

✅ Achievement with checkmark
✅ Another achievement

## Conclusion

Wrap up with learnings and impact.
```

## Supported MDX Features

### Headings

```mdx
## H2 Heading (scroll-mt-24 for anchor navigation)
### H3 Subheading
#### H4 Smaller heading
```

### Code Blocks

Syntax highlighting with `rehype-pretty-code`:

```mdx
\`\`\`python
# Python code
def hello_world():
    print("Hello, MDX!")
\`\`\`

\`\`\`javascript
// JavaScript code
const greeting = "Hello, MDX!";
console.log(greeting);
\`\`\`

\`\`\`bash
# Shell commands
npm install package-name
\`\`\`
```

### Inline Code

Use backticks for inline code: \`variable_name\`

### Lists

**Unordered:**
```mdx
- Item 1
- Item 2
  - Nested item
```

**Ordered:**
```mdx
1. First step
2. Second step
3. Third step
```

### Tables

```mdx
| Metric | Value |
|--------|-------|
| Accuracy | 94% |
| Precision | 92% |
| Recall | 96% |
```

### Blockquotes

```mdx
> Important callout or quote
```

Blockquotes are rendered in cards with left border accent.

### Links

```mdx
[Link text](https://example.com)
```

Links automatically open in new tabs with `noopener noreferrer`.

### Emphasis

```mdx
**Bold text for emphasis**
*Italic text*
```

## Styling System

### Typography Plugin

The MDX content uses `@tailwindcss/typography` for beautiful prose styling:

```tsx
<div className="prose prose-neutral dark:prose-invert max-w-none">
  {/* MDX content */}
</div>
```

### Custom Component Styling

All MDX components are styled to match the portfolio theme:

- **Headings**: Bold, tracked, with proper spacing and scroll margin
- **Paragraphs**: `text-muted-foreground` with relaxed leading
- **Code**: Muted background, rounded, monospace font
- **Tables**: Bordered, muted header, responsive
- **Links**: Primary color with hover underline

### Dark Mode Support

All MDX components respect the theme system and work beautifully in dark mode.

## Best Practices

### 1. Strong Storytelling

Structure your MDX like a technical article:
- **Challenge/Problem**: Set the context
- **Solution**: Explain your approach with code
- **Results**: Show measurable outcomes
- **Learnings**: Share what you gained

### 2. Code Examples

Include real code snippets to demonstrate technical depth:
```mdx
\`\`\`python
# Show actual implementation, not pseudo-code
from langchain import RAG

def build_rag_pipeline():
    # Real, working code
    pass
\`\`\`
```

### 3. Measurable Outcomes

Use specific metrics:
- ❌ "Improved performance"
- ✅ "Reduced latency from 6 hours to 10 minutes (97% improvement)"

### 4. Visual Hierarchy

Use headings strategically:
- `## H2` for major sections
- `### H3` for subsections
- `#### H4` for minor points

### 5. Break Up Text

- Use lists for multiple points
- Include tables for data comparisons
- Add blockquotes for emphasis
- Insert code blocks to demonstrate technical solutions

## Example: Converting lib/projects.ts to MDX

**Before (lib/projects.ts):**
```typescript
{
  slug: "my-project",
  title: "My Project",
  problem: "Users struggled with X",
  approach: ["Did A", "Did B", "Did C"],
  results: ["Result 1", "Result 2"],
}
```

**After (content/projects/my-project.mdx):**
```mdx
---
title: "My Project"
summary: "Brief description"
category: "ML"
# ... other frontmatter
---

## The Problem

Users struggled with X because of Y and Z. This cost companies $1M annually.

## The Solution

I built a system that does A, B, and C.

### Implementation

\`\`\`python
def solve_problem():
    # Actual code
    pass
\`\`\`

## The Results

- **97% reduction** in processing time
- **$500K saved** annually
- **10,000+ users** onboarded

This project taught me that...
```

## API Reference

### `lib/mdx.ts`

**`getMDXProject(slug: string): Promise<MDXProject | null>`**
- Loads MDX file by slug
- Returns parsed frontmatter + content
- Returns `null` if file doesn't exist

**`hasMDXContent(slug: string): boolean`**
- Quick check if MDX file exists
- Does not parse content

**`getAllMDXSlugs(): string[]`**
- Returns array of all MDX file slugs
- Used for static generation

**`mdxToProject(mdx: MDXProject): Project`**
- Converts MDX frontmatter to Project type
- For compatibility with existing components

### `components/mdx-content.tsx`

**`<MDXContent source={mdxSource} />`**
- Renders serialized MDX with styled components
- Automatically applies typography classes

**`serializeMDX(content: string): Promise<MDXRemoteSerializeResult>`**
- Serializes MDX content with remark/rehype plugins
- Includes GitHub-dark syntax theme
- Supports GFM (GitHub Flavored Markdown)

## Testing

1. Create/edit an MDX file in `content/projects/`
2. Visit `http://localhost:3000/projects/[slug]`
3. Verify:
   - Frontmatter renders in hero section
   - MDX content displays with proper styling
   - Code blocks have syntax highlighting
   - Links open in new tabs
   - Dark mode works correctly

## Fallback Behavior

If you delete an MDX file but the project still exists in `lib/projects.ts`, the system will:
1. Render hero section from `lib/projects.ts`
2. Display structured sections (Problem, Approach, Results, etc.)
3. No errors or broken pages

This allows gradual migration from structured data to MDX.

## Performance

- MDX is **serialized at build time** (SSG)
- No client-side rendering overhead
- Syntax highlighting happens during build
- Optimized for production deployment

## Deployment

1. Ensure all MDX files are in `content/projects/*.mdx`
2. Run `npm run build` to generate static pages
3. MDX content is pre-rendered and optimized
4. Deploy to Vercel, Netlify, or any static host

---

**Ready to write compelling technical narratives!** 🚀
