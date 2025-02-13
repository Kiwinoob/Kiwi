export default function Loading() {
  return (
    <div className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 xl:px-32 2xl:px-64 bg-gradient-to-b from-cyber-dark to-[#141414]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-16 h-1 bg-cyber-light mx-auto mb-6"></div>
          <div className="h-12 w-48 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-64 bg-white/10 rounded-lg mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5">
              <div className="aspect-video bg-white/10 animate-pulse"></div>
              <div className="p-4 sm:p-6">
                <div className="h-6 w-3/4 bg-white/10 rounded mb-4 animate-pulse"></div>
                <div className="h-20 bg-white/10 rounded mb-4 animate-pulse"></div>
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-white/10 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

