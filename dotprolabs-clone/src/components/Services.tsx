"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection, StaggeredAnimation } from "@/components/ui/animated-section"

export function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Scrolling bottom marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-3 bg-dotpro-orange">
        <div className="animate-marquee whitespace-nowrap text-xl font-anton">
          <span className="mx-4">DREAM</span>
          <span className="mx-4">•</span>
          <span className="mx-4">BUILD</span>
          <span className="mx-4">•</span>
          <span className="mx-4">LAUNCH</span>
          <span className="mx-4">•</span>
          <span className="mx-4">THINK</span>
          <span className="mx-4">•</span>
          <span className="mx-4">DESIGN</span>
          <span className="mx-4">•</span>
          <span className="mx-4">CODE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">SHIP</span>
          <span className="mx-4">•</span>
          <span className="mx-4">HUSTLE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">MVP</span>
          <span className="mx-4">•</span>
          <span className="mx-4">VISION</span>
          <span className="mx-4">•</span>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 mb-14">
        <AnimatedSection animation="fadeIn" className="text-center mb-12">
          <h2 className="font-anton text-4xl md:text-5xl mb-4 inline-block relative">
            <span className="relative z-10 text-white">&#123;OUR SERVICES&#125;</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3}>
          <Tabs defaultValue="fullstack" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-5 h-auto bg-transparent">
              <TabsTrigger
                value="fullstack"
                className="font-anton text-xl md:text-3xl py-4 md:py-6 h-auto data-[state=active]:text-dotpro-orange data-[state=active]:bg-black/30 focus:text-dotpro-orange"
              >
                <span className="mr-2">1.</span>
                Fullstack Dev
              </TabsTrigger>
              <TabsTrigger
                value="uiux"
                className="font-anton text-xl md:text-3xl py-4 md:py-6 h-auto data-[state=active]:text-dotpro-orange data-[state=active]:bg-black/30 focus:text-dotpro-orange"
              >
                <span className="mr-2">2.</span>
                UI/UX
              </TabsTrigger>
              <TabsTrigger
                value="web3"
                className="font-anton text-xl md:text-3xl py-4 md:py-6 h-auto data-[state=active]:text-dotpro-orange data-[state=active]:bg-black/30 focus:text-dotpro-orange"
              >
                <span className="mr-2">3.</span>
                Web3
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="font-anton text-xl md:text-3xl py-4 md:py-6 h-auto data-[state=active]:text-dotpro-orange data-[state=active]:bg-black/30 focus:text-dotpro-orange"
              >
                <span className="mr-2">4.</span>
                AI & Automation
              </TabsTrigger>
              <TabsTrigger
                value="brand"
                className="font-anton text-xl md:text-3xl py-4 md:py-6 h-auto data-[state=active]:text-dotpro-orange data-[state=active]:bg-black/30 focus:text-dotpro-orange"
              >
                <span className="mr-2">5.</span>
                Brand Building
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 bg-black/20 p-6 rounded-xl">
              <TabsContent value="fullstack" className="mt-0">
                <AnimatedSection animation="fadeIn">
                  <div className="space-y-4">
                    <h3 className="font-anton text-2xl text-dotpro-orange">Fullstack Development</h3>
                    <p className="text-gray-300">
                      We build complete, end-to-end web and mobile applications with modern tech stacks.
                      From frontend interfaces to backend systems, we handle every layer of your application
                      to ensure a seamless, high-performing product.
                    </p>
                    <StaggeredAnimation staggerAmount={0.05}>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Modern web apps with React, Next.js, Vue.js</li>
                        <li>Mobile applications with React Native and Flutter</li>
                        <li>Backend systems with Node.js, Python, Go, and more</li>
                        <li>Database design and development</li>
                        <li>API development and integration</li>
                        <li>DevOps and deployment pipelines</li>
                      </ul>
                    </StaggeredAnimation>
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="uiux" className="mt-0">
                <AnimatedSection animation="fadeIn">
                  <div className="space-y-4">
                    <h3 className="font-anton text-2xl text-dotpro-orange">UI/UX Design</h3>
                    <p className="text-gray-300">
                      We create beautiful, intuitive interfaces that users love. Our design process
                      is focused on creating experiences that are both visually stunning and highly
                      functional, ensuring your product stands out in the market.
                    </p>
                    <StaggeredAnimation staggerAmount={0.05}>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>User research and persona development</li>
                        <li>Wireframing and prototyping</li>
                        <li>Visual design and branding</li>
                        <li>Interaction design</li>
                        <li>Usability testing</li>
                        <li>Design systems and component libraries</li>
                      </ul>
                    </StaggeredAnimation>
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="web3" className="mt-0">
                <AnimatedSection animation="fadeIn">
                  <div className="space-y-4">
                    <h3 className="font-anton text-2xl text-dotpro-orange">Web3 Development</h3>
                    <p className="text-gray-300">
                      We build decentralized applications and blockchain solutions that leverage
                      the power of Web3 technologies. From smart contracts to NFT marketplaces,
                      we help you navigate the complex world of blockchain development.
                    </p>
                    <StaggeredAnimation staggerAmount={0.05}>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Smart contract development</li>
                        <li>dApp (Decentralized Application) development</li>
                        <li>NFT marketplaces and platforms</li>
                        <li>Token development and integration</li>
                        <li>Web3 wallet integrations</li>
                        <li>DeFi (Decentralized Finance) applications</li>
                      </ul>
                    </StaggeredAnimation>
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="ai" className="mt-0">
                <AnimatedSection animation="fadeIn">
                  <div className="space-y-4">
                    <h3 className="font-anton text-2xl text-dotpro-orange">AI & Automation</h3>
                    <p className="text-gray-300">
                      We leverage artificial intelligence and automation to create intelligent
                      solutions that solve complex problems and streamline operations. Our AI
                      systems are designed to be powerful yet accessible.
                    </p>
                    <StaggeredAnimation staggerAmount={0.05}>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Machine learning model development</li>
                        <li>Natural language processing applications</li>
                        <li>Computer vision systems</li>
                        <li>AI-powered chatbots and virtual assistants</li>
                        <li>Automated workflow systems</li>
                        <li>Data analysis and visualization</li>
                      </ul>
                    </StaggeredAnimation>
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="brand" className="mt-0">
                <AnimatedSection animation="fadeIn">
                  <div className="space-y-4">
                    <h3 className="font-anton text-2xl text-dotpro-orange">Brand Building</h3>
                    <p className="text-gray-300">
                      We help build and strengthen your brand identity through strategic design
                      and messaging. Our branding work ensures your product or company has a
                      distinctive voice and visual presence in the market.
                    </p>
                    <StaggeredAnimation staggerAmount={0.05}>
                      <ul className="list-disc pl-5 text-gray-300 space-y-2">
                        <li>Brand strategy and positioning</li>
                        <li>Logo and visual identity design</li>
                        <li>Brand voice and messaging development</li>
                        <li>Marketing website design and development</li>
                        <li>Content strategy and creation</li>
                        <li>Marketing collateral design</li>
                      </ul>
                    </StaggeredAnimation>
                  </div>
                </AnimatedSection>
              </TabsContent>
            </div>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  )
}
