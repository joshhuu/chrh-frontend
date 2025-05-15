"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  // This is a placeholder component - in a real implementation,
  // you would integrate with YouTube, Vimeo, or another video provider

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
      {!isPlaying ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsPlaying(true)}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-6 w-6" />
          </button>
          <p className="mt-4 text-lg font-medium">Latest Message: "Finding Purpose in Uncertain Times"</p>
        </div>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Weekly Message"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {!isPlaying && (
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: `url('/placeholder.svg?height=720&width=1280')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        ></div>
      )}
    </div>
  )
}
