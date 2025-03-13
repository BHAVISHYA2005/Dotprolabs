"use client"

import { ReactNode } from "react"
import { Parallax } from "react-scroll-parallax"

interface ParallaxBackgroundEffectProps {
  children: ReactNode
  className?: string
  speed?: number
  easing?: "easeIn" | "easeOut" | "easeInOut" | "linear"
  translateY?: [number, number]
  opacity?: [number, number]
  scale?: [number, number]
  rotate?: [number, number]
  startScroll?: number
  endScroll?: number
}

export function ParallaxBackgroundEffect({
  children,
  className,
  speed = -5,
  easing = "easeOut",
  translateY = [0, 0],
  opacity = [1, 1],
  scale = [1, 1],
  rotate = [0, 0],
  startScroll,
  endScroll
}: ParallaxBackgroundEffectProps) {
  return (
    <Parallax
      className={className}
      speed={speed}
      easing={easing}
      translateY={translateY}
      opacity={opacity}
      scale={scale}
      rotate={rotate}
      startScroll={startScroll}
      endScroll={endScroll}
    >
      {children}
    </Parallax>
  )
}
