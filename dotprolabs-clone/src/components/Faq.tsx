"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Faq() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <h2 className="text-dotpro-headline text-4xl md:text-5xl">FAQS</h2>
          <p className="text-gray-400 mt-2 md:mt-0 italic">
            FAQ Attack! The Answers You've Been Secretly Wondering About!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Why Us */}
          <FaqCard
            title="WHY US"
            content="Our work speaks for itself. We're a team of product builders and design fanatics who bring your digital dreams to life—minus the coding nightmares. We analyze, research, and select the best tech and design for your product, refining it through every iteration."
            bg="https://web-assets.same.dev/2463609822/849522504.png"
          />

          {/* Who is the team */}
          <FaqCard
            title="WHO IS THE TEAM"
            content="Top Talent with 5+ years of experience in building products"
            decoration="https://web-assets.same.dev/2340659335/849522504.png"
            bg="https://web-assets.same.dev/1070660707/849522504.png"
          />

          {/* Will you ghost us */}
          <FaqCard
            title="WILL YOU GHOST US?"
            content="Ask our 20+ previous clients and you will know ;) Hint: We believe in client relations"
            bg="https://web-assets.same.dev/1866987668/849522504.png"
          />

          {/* Pricing */}
          <FaqCard
            title="PRICING"
            content="First, we dive into your project to map out your needs and the unique requirements. From there, we offer two flexible payment options: 1. Project-based payment: Pay 50% upfront and 50% on completion. 2. Monthly payments: A steady, ongoing payment plan until your project is complete. Book a call or mail us to discuss more"
            bg="https://web-assets.same.dev/539207397/849522504.png"
          />

          {/* We are hiring */}
          <FaqCard
            title="WE ARE HIRING!"
            content="Are you a talented freelancer with expertise in any of the Services mentioned above? We have a constant influx of small gigs and tasks which could need your help. Email us your resume and we will add you into our network. Cheers!!"
            bg="https://web-assets.same.dev/1110384672/849522504.png"
          />

          {/* Tech used */}
          <FaqCard
            title="TECH USED"
            content="We are extremely flexible with any software technology. Fullstack, DevOps, Scaling - we excel at everything Ask our 20+ previous clients and you will know ;) Prev Used Tech: React, SpringBoot, Django, Golang, Rust, Solidity, Tailwind, Next, Vue, Wordpress, Shopify, Flutter"
            bg="https://web-assets.same.dev/776499768/849522504.png"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Still have more questions? Contact us Below
          </p>
        </div>
      </div>
    </section>
  )
}

interface FaqCardProps {
  title: string
  content: string
  decoration?: string
  bg?: string
}

function FaqCard({ title, content, decoration, bg }: FaqCardProps) {
  return (
    <Card className="rounded-lg overflow-hidden bg-black border-0 h-64 relative group">
      <CardContent className="p-0 h-full">
        {bg && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={bg}
              alt="Background"
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-anton text-xl md:text-2xl text-dotpro-orange">
              {title}
            </h3>
            {decoration && (
              <Image
                src={decoration}
                alt="Decoration"
                width={20}
                height={20}
                className="object-contain"
              />
            )}
          </div>
          <div className="border-t border-dotpro-orange/30 pt-4">
            <p className="text-sm text-gray-300">
              {content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
