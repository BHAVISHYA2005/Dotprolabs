import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { OurWork } from "@/components/OurWork"
import { Services } from "@/components/Services"
import { Pricing } from "@/components/Pricing"
import { Faq } from "@/components/Faq"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <OurWork />
      <Services />
      <Pricing />
      <Faq />
      <Contact />
    </main>
  )
}
