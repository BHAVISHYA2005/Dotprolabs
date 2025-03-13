"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-dotpro-orange relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-dotpro-headline text-black text-5xl md:text-7xl mb-6">
              CONTACT US
            </h2>

            <Button asChild size="lg" className="bg-black hover:bg-black/90 text-white">
              <Link href="https://cal.com/dotpro-labs/30min" target="_blank">
                book free call
              </Link>
            </Button>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col lg:items-end">
            <div className="max-w-md">
              <div className="flex items-center mb-2">
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
              </div>

              <p className="text-black text-sm italic mb-4">
                " We are not just code ninjas; we are bug whisperers and pixel perfectionists for whatever the quote goes "
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#work" className="text-black hover:underline">
                  Work
                </a>
                <a href="#services" className="text-black hover:underline">
                  Services
                </a>
                <a href="#faq" className="text-black hover:underline">
                  FAQs
                </a>
                <a href="https://cal.com/dotpro-labs/30min" target="_blank" className="text-black hover:underline">
                  Book a Call
                </a>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="mailto:dotprolabs@gmail.com"
                  aria-label="Email"
                  className="bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/dotprolabs"
                  target="_blank"
                  aria-label="Twitter"
                  className="bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/dotpro-labs/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
