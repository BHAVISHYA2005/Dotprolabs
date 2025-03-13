import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ParallaxProviderWrapper } from "@/components/ParallaxProviderWrapper"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "DotPro Labs - Design Develop Deploy",
  description: "DotPro Labs: Expert PROfessional product, Design and Software development. We turn your ideas into polished digital solutions.",
  icons: {
    icon: [
      {
        url: "https://web-assets.same.dev/435437065/249093335.svg+xml",
        href: "https://web-assets.same.dev/435437065/249093335.svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen font-raleway`}>
        <ParallaxProviderWrapper>
          <div className="relative flex flex-col min-h-screen">
            {children}
          </div>
        </ParallaxProviderWrapper>
      </body>
    </html>
  )
}
