"use client"
import React from 'react'
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { GlowButton } from './glow-button'
import { AnimatedGradientText } from './animated-gradient-text'
import { FuturisticBackground } from "./futuristic-background"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration issues with animations
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="py-20 md:py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">The Next-Gen CSS Framework</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Build beautiful user interfaces faster with utility-first approach and powerful components
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton size="lg" asChild>
            <Link href="/docs/installation">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlowButton>
          <GlowButton variant="outline" size="lg" asChild>
            <Link href="/docs">Documentation</Link>
          </GlowButton>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden">
      <FuturisticBackground variant="waves" intensity="medium" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative py-20 md:py-32 text-center z-10"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <AnimatedGradientText delay={0.2}>BismillahCSS</AnimatedGradientText>
          <br />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            The Next-Gen CSS Framework
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Build beautiful user interfaces faster with utility-first approach and powerful components
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <GlowButton size="lg" asChild glowIntensity="strong">
            <Link href="/docs/installation">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </GlowButton>
          <GlowButton variant="outline" size="lg" asChild>
            <Link href="/docs">Documentation</Link>
          </GlowButton>
        </motion.div>
      </motion.div>
    </div>
  )
}

