"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection, StaggeredAnimation } from "@/components/ui/animated-section"
import { Parallax } from "react-scroll-parallax"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-20 bg-background">
      {/* Scrolling text at top */}
      <div className="relative overflow-hidden py-2 bg-dotpro-red text-white text-sm font-medium">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">PRODUCT</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PROGRAMMING</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PROFESSIONAL</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PRODUCT</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PROGRAMMING</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PROFESSIONAL</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PRODUCT</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PROGRAMMING</span>
          <span className="mx-4">•</span>
          <span className="mx-4">PROFESSIONAL</span>
          <span className="mx-4">•</span>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between pt-24 pb-16">
        <Parallax translateY={[0, -20]} opacity={[1, 0.8]}>
          <AnimatedSection animation="slideInLeft" className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-dotpro-headline text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-white">DESIGN</span>
              <span className="block text-white">DEVELOP</span>
              <span className="block text-dotpro-orange bg-dotpro-red px-3 py-1 inline-block transform -rotate-3">DEPLOY</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              No fluff, no jargon, just clean, elegant code and designs that pop. Get your own custom digital solution right now!
            </p>

            <Button asChild size="lg" className="mt-4 bg-dotpro-orange hover:bg-dotpro-orange/90 text-black font-bold">
              <Link href="https://cal.com/dotpro-labs/30min">
                Book a Call
              </Link>
            </Button>
          </AnimatedSection>
        </Parallax>

        <Parallax translateY={[0, -30]} scale={[1, 1.1]} opacity={[1, 0.9]}>
          <AnimatedSection animation="zoom" delay={0.3} className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end relative">
            {/* Blob image */}
            <div className="relative w-full h-[400px]">
              <Image
                src="https://web-assets.same.dev/378916829/849522504.png"
                alt="Code illustration"
                fill
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </Parallax>
      </div>

      <div className="w-full py-8 bg-black/30">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fadeIn" delay={0.5} className="text-center mb-6">
            <p className="text-sm text-muted-foreground">Trusted by Top teams & Orgs in the world</p>
          </AnimatedSection>

          <StaggeredAnimation
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            staggerAmount={0.1}
            delay={0.7}
          >
            <Image src="https://web-assets.same.dev/2092419600/849522504.png" alt="Maulana Azad Medical College" width={64} height={32} />
            <Image src="https://web-assets.same.dev/3361131737/849522504.png" alt="Okto" width={64} height={32} />
            <Image src="https://web-assets.same.dev/2688616977/849522504.png" alt="CoinDCX" width={96} height={32} />
            <Image src="https://web-assets.same.dev/3392134900/849522504.png" alt="BetAI" width={64} height={32} />
            <Image src="https://web-assets.same.dev/1223101310/849522504.png" alt="GiftAI" width={64} height={32} />
          </StaggeredAnimation>
        </div>
      </div>

      <Parallax translateY={[0, -15]}>
        <AnimatedSection animation="slideUp" delay={0.9} className="container max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-semibold">
                <span className="text-dotpro-orange">22+</span>
                <span className="text-xs block text-gray-400">Ideas shipped</span>
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold">
                <span className="text-dotpro-orange">48+</span>
                <span className="text-xs block text-gray-400">Designs shipped</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Parallax>
    </section>
  )
}
