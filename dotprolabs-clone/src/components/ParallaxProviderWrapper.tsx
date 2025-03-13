"use client"

import { ReactNode } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

interface ParallaxProviderWrapperProps {
  children: ReactNode
}

export function ParallaxProviderWrapper({ children }: ParallaxProviderWrapperProps) {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
