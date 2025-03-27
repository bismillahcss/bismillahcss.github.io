"use client"
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { FuturisticBackground } from "@/components/futuristic-background"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function ComponentsShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("buttons")

  const categories = [
    { id: "buttons", name: "Buttons" },
    { id: "cards", name: "Cards" },
    { id: "alerts", name: "Alerts" },
    { id: "progress", name: "Progress Bars" },
    { id: "effects", name: "Effects" },
    { id: "typography", name: "Typography" },
    { id: "utilities", name: "Utilities" },
  ]

  return (
    <PageTransition>
      <div className="container py-10 relative">
        <FuturisticBackground variant="grid" intensity="light" />
        <div className="relative z-10">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              <AnimatedGradientText>BismillahCSS Components</AnimatedGradientText>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the rich collection of components and utilities available in the BismillahCSS framework
            </p>
          </div>

          <Tabs defaultValue="buttons" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-2">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="buttons" className="space-y-8">
              <ComponentShowcase
                title="Standard Buttons"
                description="Basic button styles with various colors and states"
                code={`<button class="bismillah-btn bismillah-btn-primary">Primary Button</button>
<button class="bismillah-btn bismillah-btn-secondary">Secondary Button</button>
<button class="bismillah-btn bismillah-btn-outline">Outline Button</button>
<button class="bismillah-btn bismillah-btn-disabled">Disabled Button</button>`}
              >
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-primary text-white font-medium rounded-md">Primary Button</button>
                  <button className="px-4 py-2 bg-secondary text-white font-medium rounded-md">Secondary Button</button>
                  <button className="px-4 py-2 border-2 border-primary text-primary font-medium rounded-md">
                    Outline Button
                  </button>
                  <button className="px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-md opacity-70 cursor-not-allowed">
                    Disabled Button
                  </button>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Button Sizes"
                description="Buttons in different sizes for various contexts"
                code={`<button class="bismillah-btn bismillah-btn-primary bismillah-btn-sm">Small Button</button>
<button class="bismillah-btn bismillah-btn-primary">Default Button</button>
<button class="bismillah-btn bismillah-btn-primary bismillah-btn-lg">Large Button</button>
<button class="bismillah-btn bismillah-btn-primary bismillah-btn-xl">Extra Large Button</button>`}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-2 py-1 text-sm bg-primary text-white font-medium rounded-md">
                    Small Button
                  </button>
                  <button className="px-4 py-2 bg-primary text-white font-medium rounded-md">Default Button</button>
                  <button className="px-6 py-3 bg-primary text-white font-medium rounded-md">Large Button</button>
                  <button className="px-8 py-4 text-lg bg-primary text-white font-medium rounded-md">
                    Extra Large Button
                  </button>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Special Effect Buttons"
                description="Buttons with advanced hover and animation effects"
                code={`<button class="bismillah-btn-gradient">Gradient Button</button>
<button class="bismillah-btn-glass">Glass Button</button>
<button class="bismillah-btn-neon">Neon Button</button>
<button class="bismillah-btn-3d-push">3D Push Button</button>`}
              >
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Gradient Button
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Glass Button
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-black text-[#00ffff] font-medium rounded-md shadow-[0_0_10px_#00ffff]"
                    whileHover={{ boxShadow: "0 0 20px #00ffff, 0 0 30px #00ffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Neon Button
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 bg-purple-600 text-white font-medium rounded-md shadow-[0_6px_0_#4c1d95]"
                    whileHover={{ y: -2, boxShadow: "0 8px 0 #4c1d95" }}
                    whileTap={{ y: 6, boxShadow: "0 0 0 #4c1d95" }}
                  >
                    3D Push Button
                  </motion.button>
                </div>
              </ComponentShowcase>
            </TabsContent>

            <TabsContent value="cards" className="space-y-8">
              <ComponentShowcase
                title="Basic Cards"
                description="Simple card layouts for content organization"
                code={`<div class="bismillah-card">
  <div class="bismillah-card-header">Card Title</div>
  <div class="bismillah-card-body">This is a basic card with some content.</div>
  <div class="bismillah-card-footer">
    <button class="bismillah-btn bismillah-btn-primary">Action</button>
  </div>
</div>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                    <p className="text-muted-foreground mb-4">
                      This is a basic card with some content. Cards are useful for organizing information.
                    </p>
                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-primary text-white font-medium rounded-md">Action</button>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-2">Card with Image</h3>
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Placeholder"
                      className="w-full h-32 object-cover rounded-md mb-4"
                    />
                    <p className="text-muted-foreground mb-4">Cards can include images, text, and actions.</p>
                    <div className="flex justify-end gap-2">
                      <button className="px-4 py-2 border border-primary text-primary font-medium rounded-md">
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-primary text-white font-medium rounded-md">Submit</button>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Special Effect Cards"
                description="Cards with advanced visual effects and animations"
                code={`<div class="bismillah-card-glass">Glass Card</div>
<div class="bismillah-flip-card">Flip Card</div>
<div class="bismillah-hover-card">Hover Card</div>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">Glass Card</h3>
                    <p>This card has a glassmorphism effect with backdrop blur.</p>
                  </motion.div>

                  <div className="relative h-[200px] perspective-[1000px] group">
                    <div className="absolute inset-0 transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white backface-hidden">
                        <h3 className="text-lg font-semibold mb-2">Flip Card Front</h3>
                        <p>Hover to see the back side</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white backface-hidden rotate-y-180">
                        <h3 className="text-lg font-semibold mb-2">Flip Card Back</h3>
                        <p>This is the back side of the card</p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-2">Hover Card</h3>
                    <p>This card transforms on hover with multiple effects.</p>
                  </motion.div>
                </div>
              </ComponentShowcase>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-8">
              <ComponentShowcase
                title="Alert Messages"
                description="Notification alerts for different types of messages"
                code={`<div class="bismillah-alert bismillah-alert-success">Success message</div>
<div class="bismillah-alert bismillah-alert-warning">Warning message</div>
<div class="bismillah-alert bismillah-alert-danger">Error message</div>`}
              >
                <div className="flex flex-col gap-4">
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Success message: Your changes have been saved successfully.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Warning message: Your account subscription will expire in 3 days.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">
                          Error message: There was a problem processing your request. Please try again.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>
            </TabsContent>

            <TabsContent value="progress" className="space-y-8">
              <ComponentShowcase
                title="Progress Bars"
                description="Visual indicators for progress and loading states"
                code={`<div class="bismillah-progress-container">
  <div class="bismillah-progress-bar" style="width: 75%;">
    <span class="bismillah-progress-text">75%</span>
  </div>
</div>

<div class="bismillah-progress-container bismillah-progress-striped">
  <div class="bismillah-progress-bar" style="width: 50%;">
    <span class="bismillah-progress-text">50%</span>
  </div>
</div>

<div class="bismillah-progress-container bismillah-progress-thin">
  <div class="bismillah-progress-bar" style="width: 25%;">
    <span class="bismillah-progress-text">25%</span>
  </div>
</div>`}
              >
                <div className="flex flex-col gap-6 w-full">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Standard Progress (75%)</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                      <div className="bg-primary h-5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Striped Progress (50%)</span>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
                      <div
                        className="bg-primary h-5 rounded-full bg-stripes"
                        style={{
                          width: "50%",
                          backgroundImage:
                            "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
                          backgroundSize: "1rem 1rem",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Thin Progress (25%)</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Advanced Progress Indicators"
                description="Specialized progress indicators for different contexts"
                code={`<div class="bismillah-progress-steps">
  <div class="bismillah-progress-step active">1</div>
  <div class="bismillah-progress-step-connector active"></div>
  <div class="bismillah-progress-step active">2</div>
  <div class="bismillah-progress-step-connector"></div>
  <div class="bismillah-progress-step">3</div>
</div>

<div class="bismillah-progress-circular">
  <svg viewBox="0 0 36 36">
    <circle class="bismillah-progress-circular-bg" cx="18" cy="18" r="16" />
    <circle class="bismillah-progress-circular-fill" cx="18" cy="18" r="16" strokeDasharray="100" strokeDashoffset="25" />
  </svg>
  <div class="bismillah-progress-circular-text">75%</div>
</div>`}
              >
                <div className="flex flex-col gap-10 w-full">
                  <div className="relative flex items-center justify-between w-full">
                    <div className="absolute h-0.5 bg-gray-200 w-full"></div>
                    <div className="absolute h-0.5 bg-primary w-1/2"></div>

                    <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
                      1
                    </div>

                    <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full">
                      2
                    </div>

                    <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full">
                      3
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-200 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <circle
                          className="text-primary stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          strokeDasharray="251.2"
                          strokeDashoffset="62.8"
                          transform="rotate(-90 50 50)"
                        ></circle>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-semibold">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>
            </TabsContent>

            <TabsContent value="effects" className="space-y-8">
              <ComponentShowcase
                title="Hover Effects"
                description="Interactive effects triggered on hover"
                code={`<div class="bismillah-hover-scale">Scale on hover</div>
<div class="bismillah-hover-glow">Glow on hover</div>
<div class="bismillah-hover-rotate">Rotate on hover</div>
<div class="bismillah-hover-shadow">Shadow on hover</div>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <h3 className="text-lg font-semibold">Scale on hover</h3>
                    <p className="text-muted-foreground">This element scales up when hovered</p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    whileHover={{ boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)" }}
                  >
                    <h3 className="text-lg font-semibold">Glow on hover</h3>
                    <p className="text-muted-foreground">This element glows when hovered</p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <h3 className="text-lg font-semibold">Rotate on hover</h3>
                    <p className="text-muted-foreground">This element rotates when hovered</p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                  >
                    <h3 className="text-lg font-semibold">Shadow on hover</h3>
                    <p className="text-muted-foreground">This element shows a deeper shadow when hovered</p>
                  </motion.div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Animation Effects"
                description="Dynamic animations for enhanced user experience"
                code={`<div class="bismillah-fade-in">Fade in animation</div>
<div class="bismillah-slide-up">Slide up animation</div>
<div class="bismillah-bounce">Bounce animation</div>
<div class="bismillah-pulse">Pulse animation</div>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    }}
                  >
                    <h3 className="text-lg font-semibold">Fade in animation</h3>
                    <p className="text-muted-foreground">This element fades in and out</p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    }}
                  >
                    <h3 className="text-lg font-semibold">Slide up animation</h3>
                    <p className="text-muted-foreground">This element slides up and down</p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
                  >
                    <h3 className="text-lg font-semibold">Bounce animation</h3>
                    <p className="text-muted-foreground">This element bounces up and down</p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg border shadow-sm p-6 text-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <h3 className="text-lg font-semibold">Pulse animation</h3>
                    <p className="text-muted-foreground">This element pulses in and out</p>
                  </motion.div>
                </div>
              </ComponentShowcase>
            </TabsContent>

            <TabsContent value="typography" className="space-y-8">
              <ComponentShowcase
                title="Text Styles"
                description="Various text formatting and styling options"
                code={`<h1 class="bismillah-text-4xl bismillah-font-bold">Heading 1</h1>
<h2 class="bismillah-text-3xl bismillah-font-semibold">Heading 2</h2>
<h3 class="bismillah-text-2xl bismillah-font-medium">Heading 3</h3>
<p class="bismillah-text-base">Regular paragraph text</p>
<p class="bismillah-text-sm bismillah-text-muted">Small muted text</p>`}
              >
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold">Heading 1</h1>
                  <h2 className="text-3xl font-semibold">Heading 2</h2>
                  <h3 className="text-2xl font-medium">Heading 3</h3>
                  <p className="text-base">
                    Regular paragraph text. This is a standard paragraph with normal text styling.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Small muted text. This text is smaller and has reduced contrast for secondary information.
                  </p>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Special Text Effects"
                description="Advanced text styling with special effects"
                code={`<span class="bismillah-text-gradient">Gradient Text</span>
<span class="bismillah-text-neon">Neon Text</span>
<span class="bismillah-text-3d">3D Text</span>
<span class="bismillah-text-shadow">Shadow Text</span>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 flex justify-center items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Gradient Text
                    </span>
                  </div>

                  <div className="p-6 flex justify-center items-center bg-gray-900">
                    <span className="text-2xl font-bold text-[#00ffff] shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff]">
                      Neon Text
                    </span>
                  </div>

                  <div className="p-6 flex justify-center items-center">
                    <span className="text-2xl font-bold text-white transform perspective-[500px] rotate-x-[20deg] shadow-[3px_3px_0_#ff0000,6px_6px_0_#0000ff]">
                      3D Text
                    </span>
                  </div>

                  <div className="p-6 flex justify-center items-center">
                    <span className="text-2xl font-bold shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">Shadow Text</span>
                  </div>
                </div>
              </ComponentShowcase>
            </TabsContent>

            <TabsContent value="utilities" className="space-y-8">
              <ComponentShowcase
                title="Spacing Utilities"
                description="Margin and padding utilities for layout control"
                code={`<div class="bismillah-p-4">Padding 4</div>
<div class="bismillah-m-4">Margin 4</div>
<div class="bismillah-px-4 bismillah-py-2">Padding X and Y</div>
<div class="bismillah-mx-auto bismillah-my-4">Margin Auto X and Y</div>`}
              >
                <div className="flex flex-col gap-6">
                  <div className="bg-blue-100 border border-blue-300 border-dashed">
                    <div className="p-4 bg-blue-200 border border-blue-500">Padding 4 (1rem) on all sides</div>
                  </div>

                  <div className="bg-green-100 border border-green-300 border-dashed p-6">
                    <div className="m-4 bg-green-200 border border-green-500 inline-block">
                      Margin 4 (1rem) on all sides
                    </div>
                  </div>

                  <div className="bg-purple-100 border border-purple-300 border-dashed">
                    <div className="px-4 py-2 bg-purple-200 border border-purple-500">
                      Padding X: 4 (1rem), Padding Y: 2 (0.5rem)
                    </div>
                  </div>

                  <div className="bg-amber-100 border border-amber-300 border-dashed p-6">
                    <div className="mx-auto my-4 bg-amber-200 border border-amber-500 w-1/2 text-center">
                      Margin X: auto (centered), Margin Y: 4 (1rem)
                    </div>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase
                title="Flexbox & Grid Utilities"
                description="Layout utilities for building responsive designs"
                code={`<div class="bismillah-flex bismillah-justify-between bismillah-items-center">
  <div>Flex Item 1</div>
  <div>Flex Item 2</div>
  <div>Flex Item 3</div>
</div>

<div class="bismillah-grid bismillah-grid-cols-3 bismillah-gap-4">
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
</div>`}
              >
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Flexbox: justify-between, items-center</p>
                    <div className="flex justify-between items-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <div className="p-4 bg-blue-200 dark:bg-blue-800 rounded">Flex Item 1</div>
                      <div className="p-4 bg-blue-300 dark:bg-blue-700 rounded">Flex Item 2</div>
                      <div className="p-4 bg-blue-400 dark:bg-blue-600 rounded">Flex Item 3</div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Grid: grid-cols-3, gap-4</p>
                    <div className="grid grid-cols-3 gap-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <div className="p-4 bg-green-200 dark:bg-green-800 rounded">Grid Item 1</div>
                      <div className="p-4 bg-green-300 dark:bg-green-700 rounded">Grid Item 2</div>
                      <div className="p-4 bg-green-400 dark:bg-green-600 rounded">Grid Item 3</div>
                      <div className="p-4 bg-green-200 dark:bg-green-800 rounded">Grid Item 4</div>
                      <div className="p-4 bg-green-300 dark:bg-green-700 rounded">Grid Item 5</div>
                      <div className="p-4 bg-green-400 dark:bg-green-600 rounded">Grid Item 6</div>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              View Full Documentation
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

