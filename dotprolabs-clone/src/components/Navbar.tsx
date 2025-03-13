"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-transparent py-4"
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="https://web-assets.same.dev/435437065/249093335.svg+xml"
            alt="DotPro Labs Icon"
            width={36}
            height={36}
          />
          <Image
            src="https://web-assets.same.dev/1273516608/1981925621.svg+xml"
            alt="DotPro Labs Text"
            width={120}
            height={24}
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#work" className="text-white/80 hover:text-white transition-colors">
            Our Work
          </Link>
          <Link href="#services" className="text-white/80 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#faq" className="text-white/80 hover:text-white transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <Button asChild variant="secondary" className="hidden md:flex bg-dotpro-red hover:bg-dotpro-red/90 text-white">
          <Link href="https://cal.com/dotpro-labs/30min" target="_blank">
            Contact Us
          </Link>
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}
