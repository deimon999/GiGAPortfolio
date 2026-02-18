export default function ProjectLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Button Skeleton */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-9 bg-muted rounded-md w-32 animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          {/* Main Content Skeleton */}
          <div className="space-y-12 animate-pulse">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-20"></div>
              </div>
              <div className="h-12 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded"></div>
              <div className="h-6 bg-muted rounded w-5/6"></div>
              <div className="flex gap-3">
                <div className="h-10 bg-muted rounded w-32"></div>
                <div className="h-10 bg-muted rounded w-32"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-card border rounded-lg p-4">
                    <div className="h-8 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-20"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t"></div>

            {/* Content Sections */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-muted rounded w-48"></div>
                <div className="h-24 bg-muted rounded"></div>
              </div>
            ))}
          </div>

          {/* TOC Skeleton */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4 animate-pulse">
              <div className="h-6 bg-muted rounded w-32"></div>
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
