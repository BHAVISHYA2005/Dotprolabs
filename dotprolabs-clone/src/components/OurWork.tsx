"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggeredAnimation } from "@/components/ui/animated-section"

type ProjectProps = {
  title: string
  image: string
  slug: string
  technologies: string[]
  description: string
}

const Project = ({ title, image, slug, technologies, description }: ProjectProps) => {
  return (
    <Card className="rounded-xl overflow-hidden bg-card border-0 group relative">
      <CardContent className="p-0 overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.map((tech, index) => (
                <span key={index} className="text-xs font-medium bg-dotpro-orange/90 text-black px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="font-anton text-2xl text-white mb-1">{title}</h3>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
            <Button asChild size="sm" variant="outline" className="w-fit border-white/20 text-white hover:bg-white/10 hover:text-white">
              <Link href={`/work/${slug}`}>
                {title}
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function OurWork() {
  const projects = [
    {
      title: "SkillSetMaster Course",
      image: "https://web-assets.same.dev/1890396638/849522504.png",
      slug: "skillsetmaster",
      technologies: ["Vite", "React", "Figma", "Modern"],
      description: "Modern Landing Pages for Famous Influencer Aryan Singh Course website"
    },
    {
      title: "Refer It",
      image: "https://web-assets.same.dev/2073184337/849522504.png",
      slug: "referit",
      technologies: ["Next.JS", "Supabase", "Stripe"],
      description: "A fully comprehensive application that helps to get the best deals and offers on the gaming community"
    },
    {
      title: "Oktogram",
      image: "https://web-assets.same.dev/289001200/849522504.png",
      slug: "oktogram",
      technologies: ["Next.js", "Smart Contracts", "Polygon"],
      description: "A decentralised social media and giveaway platform build for solana and polygon with tokenized awards system and like based automated giveaways"
    },
    {
      title: "MAMC Attendance Portal",
      image: "https://web-assets.same.dev/4173648422/849522504.png",
      slug: "mamc",
      technologies: ["Vite React", "Trpc", "PWA"],
      description: "A web attendance portal ported into a PWA for multi-purpose use by the students of Indian Medical College MAMC"
    },
    {
      title: "Telegram Bots",
      image: "https://web-assets.same.dev/3955908980/849522504.png",
      slug: "tg-bots",
      technologies: ["Python", "Telegram API", "Docker"],
      description: "Collection of automated Telegram bots for various utilities and tasks including AI automataion, crypto trading, and more"
    },
    {
      title: "Crokto",
      image: "https://web-assets.same.dev/1829878922/849522504.png",
      slug: "crokto",
      technologies: ["Vue.js", "IPFS", "Okto Auth"],
      description: "Crokto is a decentralized Web3 platform revolutionizing online learning. Built on Next.js and Polygon, Crokto allows educators to create, sell, and manage courses on a secure, blockchain-powered marketplace"
    },
  ]

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-background to-black">
      <div className="container max-w-7xl mx-auto px-4">
        <AnimatedSection animation="slideUp" className="flex items-center justify-between mb-12">
          <h2 className="text-dotpro-headline text-4xl md:text-5xl">OUR WORK</h2>
          <p className="text-sm text-gray-400 italic max-w-xs text-right hidden md:block">
            "Our projects aren't just cool, they are freezing-cold"
          </p>
        </AnimatedSection>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerAmount={0.15}
          delay={0.3}
        >
          {projects.map((project) => (
            <Project
              key={project.slug}
              title={project.title}
              image={project.image}
              slug={project.slug}
              technologies={project.technologies}
              description={project.description}
            />
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
