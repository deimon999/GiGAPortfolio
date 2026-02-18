'use client'

import { profileData } from '@/lib/profile'

export function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deimonmi-portfolio.vercel.app'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    jobTitle: profileData.title,
    email: profileData.email,
    telephone: profileData.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    url: siteUrl,
    sameAs: [
      profileData.social.github,
      profileData.social.linkedin,
    ],
    description: profileData.summary,
    alumniOf: profileData.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.institution,
      address: {
        '@type': 'PostalAddress',
        addressLocality: edu.location,
      },
    })),
    hasCredential: profileData.certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.title,
      credentialCategory: 'certificate',
      educationalLevel: 'Professional',
      recognizedBy: {
        '@type': 'Organization',
        name: cert.issuer,
      },
    })),
    knowsAbout: [
      'Data Science',
      'Machine Learning',
      'Deep Learning',
      'Python',
      'Power BI',
      'Artificial Intelligence',
      'RAG',
      'LLM',
      'Neural Networks',
      'Business Intelligence',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

interface ProjectStructuredDataProps {
  title: string
  description: string
  category: string
  stack: string[]
  githubUrl: string
  slug: string
}

export function ProjectStructuredData({
  title,
  description,
  category,
  stack,
  githubUrl,
  slug,
}: ProjectStructuredDataProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deimonmi-portfolio.vercel.app'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: title,
    description: description,
    codeRepository: githubUrl !== '#' ? githubUrl : undefined,
    programmingLanguage: stack,
    author: {
      '@type': 'Person',
      name: profileData.name,
      jobTitle: profileData.title,
      url: siteUrl,
    },
    applicationCategory: category,
    url: `${siteUrl}/projects/${slug}`,
    datePublished: new Date().toISOString(),
    keywords: stack.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
