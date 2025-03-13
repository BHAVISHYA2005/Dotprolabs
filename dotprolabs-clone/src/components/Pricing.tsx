"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-background relative">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-anton">
            <span className="text-white">The right Plans for your</span>
            <Image
              src="https://web-assets.same.dev/1649657242/849522504.png"
              alt="Decorative element"
              width={30}
              height={30}
              className="inline mx-1"
            />
            <span className="text-dotpro-orange">Ideas</span>
            <Image
              src="https://web-assets.same.dev/1649657242/849522504.png"
              alt="Decorative element"
              width={30}
              height={30}
              className="inline mx-1"
            />
          </h2>
          <p className="text-gray-400 mt-4 italic">
            "Get The Quality and Speed of Big Agencies at Best Prices"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Launchpad Plan */}
          <Card className="bg-black border border-white/10 overflow-hidden relative">
            <div className="absolute top-4 left-0 bg-dotpro-orange px-4 py-1 font-bold text-sm text-black">
              20% OFF
            </div>
            <CardHeader className="pb-0">
              <CardTitle className="text-4xl font-anton text-white">Launchpad Plan</CardTitle>
              <div className="mt-4 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-3xl line-through text-gray-500">$2499</p>
                  <p className="text-4xl font-bold text-dotpro-orange">$1999</p>
                </div>
                <CardDescription className="text-gray-400">
                  To Deliver a fast, functional, and impactful MVP to kickstart your product journey.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase font-semibold text-dotpro-orange mb-2">DELIVERABLES INCLUDE :</h4>
                  <ul className="space-y-2">
                    {[
                      "Project ready within in 3-4 weeks.",
                      "Responsive design.",
                      "Pleasant Visual design matching your brand.",
                      "Essential Features Only",
                      "Basic SEO optimization.",
                      "30 days of support."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-dotpro-orange">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-dotpro-orange hover:bg-dotpro-orange/90 text-black font-bold">
                <Link href="https://cal.com/dotpro-labs/30min">
                  Launch Your Site NOW!
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Full Process Monthly Plan */}
          <Card className="bg-black border border-dotpro-orange/50 overflow-hidden relative">
            <div className="absolute top-4 left-0 bg-dotpro-orange px-4 py-1 font-bold text-sm text-black">
              33% OFF
            </div>
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-dotpro-red px-4 py-1 font-bold text-white text-xs">
              MOST POPULAR
            </div>
            <CardHeader className="pb-0">
              <CardTitle className="text-4xl font-anton text-white">Full Process Monthly Plan</CardTitle>
              <div className="mt-4 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-3xl line-through text-gray-500">$4499</p>
                  <p className="text-4xl font-bold text-dotpro-orange">$2999</p>
                </div>
                <CardDescription className="text-gray-400">
                  End-to-end product development with an iterative approach to create a polished, feature-rich product.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase font-semibold text-dotpro-orange mb-2">DELIVERABLES INCLUDE :</h4>
                  <ul className="space-y-2">
                    {[
                      "1 Developer dedicated to your project.",
                      "One-of-a-kind crazy Lander design tailored to your brand.",
                      "High-quality, modern visuals.",
                      "Continuous Iterations",
                      "Attention to detail in every section.",
                      "Advanced SEO optimization.",
                      "Priority maintenance and updates.",
                      "Content management system."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-dotpro-orange">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-dotpro-orange hover:bg-dotpro-orange/90 text-black font-bold">
                <Link href="https://cal.com/dotpro-labs/30min">
                  Book a call NOW!
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
