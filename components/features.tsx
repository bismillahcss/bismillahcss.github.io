"use client"
import React from 'react'
import { Box, Code, Layout, Palette, Repeat, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/animated-card"

const features = [
  {
    icon: Zap,
    title: "Lightweight & Fast",
    description: "Only 10kb (gzipped) with no dependencies. Optimized for performance.",
  },
  {
    icon: Box,
    title: "Utility-First",
    description: "Build custom designs without leaving your HTML using utility classes.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Fully responsive components and utilities for any screen size.",
  },
  {
    icon: Code,
    title: "Developer Experience",
    description: "Intuitive API with excellent documentation and IDE support.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Extend and customize with your own design system and themes.",
  },
  {
    icon: Repeat,
    title: "Reusable Components",
    description: "Pre-built UI components that follow best design practices.",
  },
]

export function Features() {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <AnimatedCard key={feature.title} index={index}>
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <feature.icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>

          {/* Add subtle animated underline on hover */}
          <motion.div
            className="h-0.5 w-0 bg-gradient-to-r from-primary to-blue-500 mt-2"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedCard>
      ))}
    </div>
  )
}

