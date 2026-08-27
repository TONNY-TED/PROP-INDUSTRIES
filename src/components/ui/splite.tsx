'use client'

import React, { useState, useEffect, useRef, Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Only load heavy Spline library & 3D assets when user scrolls near the component
  useEffect(() => {
    if (!containerRef.current) return

    // IntersectionObserver with 250px rootMargin for smooth prefetching without initial page penalty
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '250px', threshold: 0.01 }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full h-full flex items-center justify-center ${className || ''}`}>
      {!shouldLoad ? (
        // Instant Zero-Cost Visual Placeholder (0 KB WebGL overhead, 60fps CSS)
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 text-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A71920]/40 to-[#4A0A10]/20 blur-xl animate-pulse" />
            <div className="w-24 h-24 rounded-full border border-[#A71920]/50 flex items-center justify-center shadow-lg shadow-[#A71920]/30 animate-[spin_10s_linear_infinite]">
              <div className="w-16 h-16 rounded-full border border-dashed border-[#ff8088]/60 animate-[spin_6s_linear_infinite_reverse]" />
            </div>
          </div>
          <span className="mt-4 text-xs font-mono tracking-widest text-[#ff8088]/70 uppercase">
            3D Canvas Ready
          </span>
        </div>
      ) : hasError ? (
        // Elegant Fallback in case WebGL or connection is restricted
        <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#A71920]/20 border border-[#A71920]/40 flex items-center justify-center mb-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#ff8088] border-t-transparent animate-spin" />
          </div>
          <p className="text-sm font-semibold text-white">Spatial Telemetry Active</p>
          <span className="text-xs text-red-200/60 mt-1">Prop Industries Real-time Architecture</span>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-3">
              <div className="w-9 h-9 border-2 border-[#A71920]/30 border-t-[#ff8088] rounded-full animate-spin"></div>
              <span className="text-xs tracking-wider uppercase text-red-200/70 font-mono">Loading 3D Engine...</span>
            </div>
          }
        >
          <div className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Spline
              scene={scene}
              className="w-full h-full"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          </div>
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
              <div className="w-9 h-9 border-2 border-[#A71920]/30 border-t-[#ff8088] rounded-full animate-spin"></div>
              <span className="text-xs tracking-wider uppercase text-red-200/70 font-mono">Initializing Scene...</span>
            </div>
          )}
        </Suspense>
      )}
    </div>
  )
}

export default SplineScene;
