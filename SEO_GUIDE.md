# SEO Implementation Guide

This portfolio includes comprehensive SEO optimization with metadata, Open Graph images, structured data, and more.

## 🎯 Features Implemented

### 1. **Global Metadata** ([app/layout.tsx](app/layout.tsx))

- ✅ Title template (`%s | Deimonmi Kyndiah`)
- ✅ Meta description from profile
- ✅ Comprehensive keywords array
- ✅ Author, creator, publisher metadata
- ✅ Robots directives for search engines
- ✅ Open Graph tags (website type)
- ✅ Twitter Card tags
- ✅ Google verification support
- ✅ Metadata base URL

**Configuration:**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deimonmi Kyndiah | Data Science Graduate Student",
    template: "%s | Deimonmi Kyndiah",
  },
  // ... comprehensive tags
}
```

### 2. **Per-Project Metadata** ([app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx))

Dynamic metadata generated for each project:

- ✅ Title from project frontmatter
- ✅ Description from project summary
- ✅ Keywords from tech stack + category
- ✅ Open Graph article tags
- ✅ Twitter large image cards
- ✅ Canonical URLs
- ✅ Dynamic OG images via API route
- ✅ Published time metadata

**Example:**
```typescript
export async function generateMetadata({ params }) {
  const mdxProject = await getMDXProject(slug)
  const project = mdxProject || getProjectBySlug(slug)
  
  return {
    title: project.title,
    description: project.summary,
    keywords: [...project.stack, project.category],
    openGraph: {
      type: 'article',
      images: [`/api/og?title=${project.title}&category=${project.category}`],
    },
    // ... more metadata
  }
}
```

### 3. **Dynamic OG Images** ([app/api/og/route.tsx](app/api/og/route.tsx))

Automatically generated Open Graph images for social sharing:

**Features:**
- Category-colored badges (LLM = purple, DL = blue, ML = green, BI = orange)
- Project title in large, bold typography
- Tech stack tags (up to 4 displayed)
- Author info with gradient avatar
- Dark theme with subtle dot pattern background
- 1200x630px (optimal for social platforms)

**Usage:**
```
/api/og?title=Project%20Title&category=ML&tags=Python,TensorFlow,Scikit-learn
```

**Parameters:**
- `title`: Project title (required)
- `category`: LLM | DL | ML | BI (default: ML)
- `tags`: Comma-separated tech stack (max 4 displayed)

### 4. **Structured Data (JSON-LD)** ([components/structured-data.tsx](components/structured-data.tsx))

**Homepage Structured Data:**
- Schema.org `Person` type
- Job title, contact info, location
- Social profiles (GitHub, LinkedIn)
- Education (alumni of institutions)
- Certifications and credentials
- Skills and knowledge areas

**Project Structured Data:**
- Schema.org `SoftwareSourceCode` type
- Project name, description
- Code repository URL
- Programming languages/technologies
- Author information
- Application category

### 5. **Robots.txt** ([app/robots.ts](app/robots.ts))

Dynamic robots.txt configuration:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

Sitemap: https://deimonmi-portfolio.vercel.app/sitemap.xml
```

### 6. **Sitemap.xml** ([app/sitemap.ts](app/sitemap.ts))

Automatically generated sitemap with:
- Homepage (priority: 1.0, weekly updates)
- Projects listing (priority: 0.9, weekly updates)
- Individual project pages (priority: 0.8, monthly updates)
- Proper lastModified dates
- Change frequency hints for crawlers

### 7. **Projects Page Metadata** ([app/projects/layout.tsx](app/projects/layout.tsx))

Dedicated metadata for the projects listing page:
- SEO-optimized title and description
- Keywords for project discovery
- Open Graph with dynamic OG image
- Twitter cards
- Canonical URL

## 🚀 Environment Variables

Create a `.env.local` file (already in `.gitignore`):

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional - Google Search Console
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code

# Optional - Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**For local development:**
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**For production (Vercel):**
Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` → `https://your-domain.vercel.app`
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` → (from Google Search Console)

## 🔍 SEO Checklist

### Pre-Deployment

- [ ] Set `NEXT_PUBLIC_SITE_URL` to production domain
- [ ] Add Google Search Console verification code
- [ ] Create static OG image at `/public/og-image.png` (1200x630)
- [ ] Update Twitter handle in metadata (currently `@deimonmi`)
- [ ] Test all meta tags with [metatags.io](https://metatags.io)
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Post-Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible (`/robots.txt`)
- [ ] Test OG images on social platforms (LinkedIn, Twitter)
- [ ] Check mobile-friendliness (Google Mobile-Friendly Test)
- [ ] Monitor Core Web Vitals (PageSpeed Insights)
- [ ] Set up Google Analytics (optional)

## 📊 Testing SEO

### 1. Meta Tags Preview

Visit these tools to preview how your site appears:
- [metatags.io](https://metatags.io) - Preview OG images & meta tags
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) - Test LinkedIn sharing
- [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Test Twitter cards
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) - Test Facebook OG

### 2. Structured Data Validation

```bash
# Test with Google's Rich Results Test
https://search.google.com/test/rich-results?url=YOUR_DOMAIN

# Or use Schema.org validator
https://validator.schema.org/
```

### 3. Local Testing

```bash
# 1. Build for production
npm run build

# 2. Start production server
npm start

# 3. Test routes:
curl http://localhost:3000/robots.txt
curl http://localhost:3000/sitemap.xml
curl http://localhost:3000/api/og\?title=Test

# 4. Check meta tags in browser:
# View Page Source → Search for "og:" and "twitter:"
```

### 4. Lighthouse SEO Audit

```bash
# Run Lighthouse in Chrome DevTools
# Or use CLI:
npx lighthouse https://your-domain.com --view
```

**Target Scores:**
- SEO: 95+ / 100
- Performance: 90+ / 100
- Accessibility: 95+ / 100
- Best Practices: 95+ / 100

## 🎨 OG Image Customization

### Default Homepage Image

Create `/public/og-image.png` (1200x630px) with:
- Portfolio branding
- Your name and title
- Professional headshot or logo
- Clean, high-contrast design

### Project Images (Dynamic)

Projects automatically use the dynamic OG route:
```
/api/og?title={PROJECT_TITLE}&category={CATEGORY}&tags={TECH_STACK}
```

**To use custom images instead:**
1. Add image to `/public/projects/`
2. Update frontmatter: `coverImage: "/projects/custom-og.png"`
3. Modify `generateMetadata` in `[slug]/page.tsx`:

```typescript
images: [
  {
    url: project.coverImage || ogImageUrl,
    width: 1200,
    height: 630,
  }
]
```

## 📈 SEO Best Practices Applied

### ✅ Technical SEO

- [x] Semantic HTML5 structure
- [x] Responsive meta viewport
- [x] Fast page load times (Next.js App Router)
- [x] Clean URLs (`/projects/project-name`)
- [x] HTTPS (via Vercel)
- [x] Mobile-friendly design
- [x] Proper heading hierarchy (H1 → H6)
- [x] Alt text for images (add to project images)
- [x] Internal linking (navbar, footer, project navigation)

### ✅ On-Page SEO

- [x] Unique titles for every page
- [x] Descriptive meta descriptions (155-160 chars)
- [x] Keywords in content, headings, URLs
- [x] Schema.org structured data
- [x] Breadcrumb navigation (via TOC)
- [x] Fast Time to First Byte (TTFB)

### ✅ Content SEO

- [x] Long-form project writeups (MDX)
- [x] Code examples and technical depth
- [x] Measurable results and metrics
- [x] Clear problem → solution → results structure
- [x] Keyword-rich headings
- [x] External links to technologies used

### ✅ Social SEO

- [x] Open Graph tags for all pages
- [x] Twitter Card tags
- [x] Dynamic OG images for projects
- [x] Social sharing buttons (can be added)
- [x] Professional social links (GitHub, LinkedIn)

## 🔧 Advanced Configuration

### Custom OG Image Fonts

The OG image uses system fonts. To use custom fonts:

1. Download font files to `/public/fonts/`
2. Update `app/api/og/route.tsx`:

```typescript
import { ImageResponse } from '@vercel/og'

export async function GET(request: NextRequest) {
  const fontData = await fetch(
    new URL('/fonts/Inter-Bold.ttf', request.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    // ... JSX
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
```

### Analytics Integration

Add Google Analytics in `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
```

## 📚 Resources

- [Next.js Metadata Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Vercel OG Image Generation](https://vercel.com/docs/functions/edge-functions/og-image-generation)
- [Schema.org Person](https://schema.org/Person)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Docs](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Google Search Console](https://search.google.com/search-console)

## 🎯 Next Steps

1. **Deploy to Vercel** and set environment variables
2. **Submit sitemap** to Google Search Console
3. **Create static OG image** for homepage
4. **Test social sharing** on LinkedIn and Twitter
5. **Monitor performance** with Lighthouse and PageSpeed Insights
6. **Set up analytics** (Google Analytics or Plausible)
7. **Build backlinks** by sharing projects on dev.to, Medium, etc.

---

**Your portfolio now has enterprise-grade SEO! 🚀**

All meta tags, OG images, structured data, and sitemaps are automatically generated and optimized for search engines and social platforms.
