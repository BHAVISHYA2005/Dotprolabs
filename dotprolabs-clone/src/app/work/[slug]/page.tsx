import Link from "next/link"
import { Navbar } from "@/components/Navbar"

interface WorkDetailPageProps {
  params: {
    slug: string
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = params

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="w-screen max-w-[1920px] min-h-screen flex justify-center flex-col font-raleway items-center text-center text-4xl lg:text-6xl">
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
        <span className="text-lg lg:text-2xl mt-2 text-muted-foreground">Case Study coming soon</span>
        <div className="mt-8">
          <Link href="/" className="text-base bg-dotpro-orange hover:bg-dotpro-orange/90 text-black px-4 py-2 rounded">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
