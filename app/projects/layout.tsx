import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deimonmi-portfolio.vercel.app'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of data science, machine learning, and AI projects including RAG systems, deep learning models, and business intelligence dashboards.',
  keywords: [
    'Projects',
    'Portfolio',
    'Data Science Projects',
    'Machine Learning',
    'Deep Learning',
    'LLM',
    'RAG',
    'AI Projects',
    'Business Intelligence',
  ],
  openGraph: {
    title: 'Projects | Deimonmi Kyndiah',
    description: 'Explore my portfolio of data science, machine learning, and AI projects including RAG systems, deep learning models, and business intelligence dashboards.',
    url: `${siteUrl}/projects`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/api/og?title=Projects%20Portfolio&category=ML&tags=Data%20Science,Machine%20Learning,AI`,
        width: 1200,
        height: 630,
        alt: 'Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Deimonmi Kyndiah',
    description: 'Explore my portfolio of data science, machine learning, and AI projects including RAG systems, deep learning models, and business intelligence dashboards.',
    images: [`${siteUrl}/api/og?title=Projects%20Portfolio&category=ML&tags=Data%20Science,Machine%20Learning,AI`],
  },
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
