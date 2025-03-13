"use client"

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

interface ParallaxDecorProps {
  src: string
  alt?: string
  width?: number
  height?: number
  x?: string | number
  y?: string | number
  rotate?: number
  scale?: number
  opacity?: number
  className?: string
  speed?: number
}

export function ParallaxDecor({
  src,
  alt = "Decorative element",
  width = 100,
  height = 100,
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  opacity = 0.8,
  className = "",
  speed = 10
}: ParallaxDecorProps) {
  return (
    <Parallax
      translateX={[`${typeof x === 'number' ? `${x}px` : x}`, `${typeof x === 'number' ? `${x * -1}px` : '-' + x}`]}
      translateY={[`${typeof y === 'number' ? `${y}px` : y}`, `${typeof y === 'number' ? `${y * -1}px` : '-' + y}`]}
      rotate={[0, rotate]}
      scale={[scale, scale * 1.1]}
      opacity={[opacity * 0.7, opacity]}
      speed={speed}
      className={`absolute pointer-events-none z-10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </Parallax>
  )
}

interface ParallaxBgProps {
  src: string
  alt?: string
  opacity?: number
  className?: string
  speed?: number
}

export function ParallaxBg({
  src,
  alt = "Background element",
  opacity = 0.3,
  className = "",
  speed = 20
}: ParallaxBgProps) {
  return (
    <Parallax
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      speed={speed}
      opacity={[opacity * 0.5, opacity]}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </Parallax>
  )
}

export function FloatingParticles({ count = 15, className = "" }) {
  const particleColors = [
    "bg-dotpro-orange/20",
    "bg-dotpro-red/20",
    "bg-dotpro-purple/10",
    "bg-white/5",
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.floor(Math.random() * 100) + 20
        const color = particleColors[Math.floor(Math.random() * particleColors.length)]
        const left = `${Math.random() * 100}%`
        const top = `${Math.random() * 100}%`
        const delay = Math.random() * 5
        const duration = Math.random() * 10 + 15

        return (
          <Parallax
            key={i}
            translateY={[`${Math.random() * 100}px`, `-${Math.random() * 100}px`]}
            scale={[0.8, 1.2]}
            rotate={[0, 360]}
            opacity={[0.2, 0.6]}
            speed={Math.random() * 10 + 5}
            className="absolute rounded-full blur-xl"
            style={{
              left,
              top,
              width: size,
              height: size,
              backgroundColor: color.includes('bg-') ? undefined : color,
              animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
              zIndex: 0,
            }}
          >
            <div className={`w-full h-full rounded-full ${color}`} />
          </Parallax>
        )
      })}
    </div>
  )
}
