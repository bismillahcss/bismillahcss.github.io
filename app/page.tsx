import React from 'react'
import Link from "next/link"
import { ArrowRight, Github, Star } from "lucide-react"
import { GlowButton } from "@/components/glow-button"
import { CodePlayground } from "@/components/code-playground"
import { Features } from "@/components/features"
import { HeroSection } from "@/components/hero-section"
import { PageTransition } from "@/components/page-transition"
import { FuturisticBackground } from "@/components/futuristic-background"
import { AnimatedGradientText } from "@/components/animated-gradient-text"

export default function Home() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <HeroSection />

        <div className="relative mt-16 mb-16 text-center">
          <FuturisticBackground variant="dots" intensity="light" />
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-primary">Fast, Lightweight, Utility-First</span>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              The modern CSS framework
              <br />
              for rapid UI development
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              BismillahCSS provides a utility-first approach with pre-built components and a powerful customization
              system to help you build beautiful interfaces faster.
            </p>
          </div>
        </div>

        <Features />

        <div className="my-20">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">
            <AnimatedGradientText>Try it yourself</AnimatedGradientText>
          </h2>
          <CodePlayground />
        </div>

        <div className="relative my-20 text-center">
          <FuturisticBackground variant="dots" intensity="light" />
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Open Source & Community Driven</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              BismillahCSS is open source and powered by the community. Join us and contribute to making it even better.
            </p>
            <div className="flex gap-4 justify-center">
              <GlowButton asChild>
                <Link href="https://github.com/bismillahcss/bismillahcss" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </GlowButton>
              <GlowButton variant="outline">
                <Star className="mr-2 h-4 w-4" />
                Star
              </GlowButton>
            </div>
          </div>
        </div>

        <div className="my-20 rounded-lg border bg-card p-8 shadow-sm relative overflow-hidden">
          <FuturisticBackground variant="grid" intensity="light" />
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to get started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Follow our simple installation guide and start building modern interfaces in minutes.
            </p>
            <GlowButton asChild size="lg" glowIntensity="strong">
              <Link href="/docs/installation">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlowButton>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

