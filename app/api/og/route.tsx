import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const categoryColors: Record<string, { bg: string; text: string }> = {
  LLM: { bg: '#9333ea', text: '#f3e8ff' },
  DL: { bg: '#3b82f6', text: '#dbeafe' },
  ML: { bg: '#10b981', text: '#d1fae5' },
  BI: { bg: '#f97316', text: '#ffedd5' },
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Project'
    const category = (searchParams.get('category') || 'ML') as keyof typeof categoryColors
    const tags = searchParams.get('tags')?.split(',') || []

    const colors = categoryColors[category] || categoryColors.ML

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #1a1a1a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1a1a1a 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            padding: '80px',
          }}
        >
          {/* Background Gradient Circle */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${colors.bg}20 0%, transparent 70%)`,
              top: '-100px',
              right: '-100px',
            }}
          />

          {/* Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              gap: '24px',
              zIndex: 1,
            }}
          >
            {/* Category Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: colors.bg,
                color: colors.text,
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
              }}
            >
              {category}
            </div>

            {/* Title */}
            <div
              style={{
                display: 'flex',
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                lineHeight: '1.1',
                maxWidth: '900px',
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginTop: '12px',
                }}
              >
                {tags.slice(0, 4).map((tag, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      backgroundColor: '#1a1a1a',
                      color: '#a1a1aa',
                      padding: '8px 20px',
                      borderRadius: '6px',
                      fontSize: '22px',
                      border: '1px solid #27272a',
                    }}
                  >
                    {tag.trim()}
                  </div>
                ))}
              </div>
            )}

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: 'auto',
                paddingTop: '40px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.bg} 0%, ${colors.bg}80 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: colors.text,
                }}
              >
                DK
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#ffffff',
                  }}
                >
                  Deimonmi Kyndiah
                </div>
                <div
                  style={{
                    fontSize: '18px',
                    color: '#71717a',
                  }}
                >
                  Data Science Graduate Student
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
