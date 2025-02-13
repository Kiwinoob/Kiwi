"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 xl:px-32 2xl:px-64 bg-gradient-to-b from-cyber-dark to-[#141414]">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <Button onClick={() => reset()} variant="outline" className="text-cyber-light border-cyber-light">
          Try again
        </Button>
      </div>
    </div>
  )
}

