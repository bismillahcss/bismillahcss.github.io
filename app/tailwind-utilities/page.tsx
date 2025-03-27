"use client"
import React from 'react'
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { FuturisticBackground } from "@/components/futuristic-background"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { UtilitySection } from "@/components/utility-section"
import { CodeBlock } from "@/components/code-block"
import { GlowButton } from "@/components/glow-button"
import Link from "next/link"

export default function TailwindUtilitiesPage() {
  const [activeCategory, setActiveCategory] = useState("layout")

  const categories = [
    { id: "layout", name: "Layout" },
    { id: "flexbox", name: "Flexbox & Grid" },
    { id: "spacing", name: "Spacing" },
    { id: "sizing", name: "Sizing" },
    { id: "typography", name: "Typography" },
    { id: "backgrounds", name: "Backgrounds" },
    { id: "borders", name: "Borders" },
    { id: "effects", name: "Effects" },
    { id: "filters", name: "Filters" },
    { id: "transitions", name: "Transitions" },
    { id: "transforms", name: "Transforms" },
    { id: "interactivity", name: "Interactivity" },
  ]

  return (
    <PageTransition>
      <div className="container py-10 relative">
        <FuturisticBackground variant="grid" intensity="light" />
        <div className="relative z-10">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              <AnimatedGradientText>BismillahCSS Utility Classes</AnimatedGradientText>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be
              composed to build any design, directly in your markup.
            </p>
          </div>

          <div className="mb-10 p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg">
            <CodeBlock
              code={`<div class="bismillah-flex bismillah-flex-col bismillah-items-center bismillah-rounded-2xl">
  <div>
    <img class="bismillah-size-48 bismillah-shadow-xl" alt="" src="/img/cover.png" />
  </div>
  <div class="bismillah-flex">
    <span>Class Warfare</span>
    <span>The Anti-Patterns</span>
    <span class="bismillah-flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>`}
              language="html"
            />
          </div>

          <Tabs defaultValue="layout" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex w-max p-1">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="layout" className="space-y-8">
              <UtilitySection
                title="Container"
                description="A component for fixing an element's width to the current breakpoint."
                code={`<div class="bismillah-container">
  <!-- Content goes here -->
</div>`}
              >
                <div className="p-4 border border-dashed border-primary/50 rounded-lg">
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    Container (width adapts to screen size)
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Display"
                description="Utilities for controlling the display box type of an element."
                code={`<div class="bismillah-block">Block</div>
<div class="bismillah-inline-block">Inline Block</div>
<div class="bismillah-inline">Inline</div>
<div class="bismillah-flex">Flex</div>
<div class="bismillah-inline-flex">Inline Flex</div>
<div class="bismillah-grid">Grid</div>
<div class="bismillah-hidden">Hidden</div>`}
              >
                <div className="space-y-4">
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="p-2 bg-primary/20 rounded">Block</div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="inline-block p-2 bg-primary/20 rounded mr-2">Inline Block</div>
                    <div className="inline-block p-2 bg-primary/20 rounded">Inline Block</div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="inline p-2 bg-primary/20 rounded mr-2">Inline</div>
                    <div className="inline p-2 bg-primary/20 rounded">Inline</div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex space-x-2">
                      <div className="p-2 bg-primary/20 rounded">Flex</div>
                      <div className="p-2 bg-primary/20 rounded">Flex</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="inline-flex space-x-2">
                      <div className="p-2 bg-primary/20 rounded">Inline Flex</div>
                      <div className="p-2 bg-primary/20 rounded">Inline Flex</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-primary/20 rounded">Grid</div>
                      <div className="p-2 bg-primary/20 rounded">Grid</div>
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Position"
                description="Utilities for controlling how an element is positioned in the DOM."
                code={`<div class="bismillah-static">Static</div>
<div class="bismillah-relative">Relative</div>
<div class="bismillah-absolute">Absolute</div>
<div class="bismillah-fixed">Fixed</div>
<div class="bismillah-sticky">Sticky</div>`}
              >
                <div className="space-y-4">
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="p-2 bg-primary/20 rounded">Static (default)</div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded relative h-20">
                    <div className="p-2 bg-primary/20 rounded absolute top-2 right-2">Absolute (top-right)</div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded h-16">
                    <div className="p-2 bg-primary/20 rounded sticky top-0">Sticky (sticks to top when scrolling)</div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Z-Index"
                description="Utilities for controlling the stack order of an element."
                code={`<div class="bismillah-z-0">z-0</div>
<div class="bismillah-z-10">z-10</div>
<div class="bismillah-z-20">z-20</div>
<div class="bismillah-z-30">z-30</div>
<div class="bismillah-z-40">z-40</div>
<div class="bismillah-z-50">z-50</div>
<div class="bismillah-z-auto">z-auto</div>`}
              >
                <div className="relative h-32 w-full">
                  <div className="absolute left-0 top-0 h-16 w-16 bg-blue-500/50 flex items-center justify-center text-white rounded z-10">
                    z-10
                  </div>
                  <div className="absolute left-8 top-8 h-16 w-16 bg-green-500/50 flex items-center justify-center text-white rounded z-20">
                    z-20
                  </div>
                  <div className="absolute left-16 top-16 h-16 w-16 bg-red-500/50 flex items-center justify-center text-white rounded z-30">
                    z-30
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="flexbox" className="space-y-8">
              <UtilitySection
                title="Flex Direction"
                description="Utilities for controlling the direction of flex items."
                code={`<div class="bismillah-flex bismillah-flex-row">Row</div>
<div class="bismillah-flex bismillah-flex-row-reverse">Row Reverse</div>
<div class="bismillah-flex bismillah-flex-col">Column</div>
<div class="bismillah-flex bismillah-flex-col-reverse">Column Reverse</div>`}
              >
                <div className="space-y-4">
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex flex-row space-x-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex flex-row-reverse space-x-reverse space-x-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex flex-col space-y-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex flex-col-reverse space-y-reverse space-y-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Flex Wrap"
                description="Utilities for controlling how flex items wrap."
                code={`<div class="bismillah-flex bismillah-flex-wrap">Wrap</div>
<div class="bismillah-flex bismillah-flex-wrap-reverse">Wrap Reverse</div>
<div class="bismillah-flex bismillah-flex-nowrap">No Wrap</div>`}
              >
                <div className="space-y-4">
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex flex-wrap">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="p-2 m-1 bg-primary/20 rounded">
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex flex-wrap-reverse">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="p-2 m-1 bg-primary/20 rounded">
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Justify Content"
                description="Utilities for controlling how flex and grid items are positioned along a container's main axis."
                code={`<div class="bismillah-flex bismillah-justify-start">Justify Start</div>
<div class="bismillah-flex bismillah-justify-center">Justify Center</div>
<div class="bismillah-flex bismillah-justify-end">Justify End</div>
<div class="bismillah-flex bismillah-justify-between">Justify Between</div>
<div class="bismillah-flex bismillah-justify-around">Justify Around</div>
<div class="bismillah-flex bismillah-justify-evenly">Justify Evenly</div>`}
              >
                <div className="space-y-4">
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex justify-start">
                      <div className="p-2 m-1 bg-primary/20 rounded">1</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">2</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex justify-center">
                      <div className="p-2 m-1 bg-primary/20 rounded">1</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">2</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex justify-end">
                      <div className="p-2 m-1 bg-primary/20 rounded">1</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">2</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex justify-between">
                      <div className="p-2 m-1 bg-primary/20 rounded">1</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">2</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex justify-around">
                      <div className="p-2 m-1 bg-primary/20 rounded">1</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">2</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="flex justify-evenly">
                      <div className="p-2 m-1 bg-primary/20 rounded">1</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">2</div>
                      <div className="p-2 m-1 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Grid Template Columns"
                description="Utilities for specifying the columns in a grid layout."
                code={`<div class="bismillah-grid bismillah-grid-cols-1">1 Column</div>
<div class="bismillah-grid bismillah-grid-cols-2">2 Columns</div>
<div class="bismillah-grid bismillah-grid-cols-3">3 Columns</div>
<div class="bismillah-grid bismillah-grid-cols-4">4 Columns</div>
<div class="bismillah-grid bismillah-grid-cols-none">None</div>`}
              >
                <div className="space-y-4">
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="grid grid-cols-1 gap-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                      <div className="p-2 bg-primary/20 rounded">4</div>
                    </div>
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-primary/20 rounded">1</div>
                      <div className="p-2 bg-primary/20 rounded">2</div>
                      <div className="p-2 bg-primary/20 rounded">3</div>
                      <div className="p-2 bg-primary/20 rounded">4</div>
                      <div className="p-2 bg-primary/20 rounded">5</div>
                      <div className="p-2 bg-primary/20 rounded">6</div>
                    </div>
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="spacing" className="space-y-8">
              <UtilitySection
                title="Padding"
                description="Utilities for controlling an element's padding."
                code={`<div class="bismillah-p-0">p-0</div>
<div class="bismillah-p-1">p-1</div>
<div class="bismillah-p-2">p-2</div>
<div class="bismillah-p-4">p-4</div>
<div class="bismillah-p-8">p-8</div>
<div class="bismillah-px-4">px-4</div>
<div class="bismillah-py-4">py-4</div>
<div class="bismillah-pt-4">pt-4</div>
<div class="bismillah-pr-4">pr-4</div>
<div class="bismillah-pb-4">pb-4</div>
<div class="bismillah-pl-4">pl-4</div>`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-primary/10 rounded">
                      <div className="p-0 bg-primary/20 rounded">p-0</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="p-1 bg-primary/20 rounded">p-1</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="p-2 bg-primary/20 rounded">p-2</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="p-4 bg-primary/20 rounded">p-4</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="p-8 bg-primary/20 rounded">p-8</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-primary/10 rounded">
                      <div className="px-4 bg-primary/20 rounded">px-4</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="py-4 bg-primary/20 rounded">py-4</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="pt-4 bg-primary/20 rounded">pt-4</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="pr-4 bg-primary/20 rounded">pr-4</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="pb-4 bg-primary/20 rounded">pb-4</div>
                    </div>
                    <div className="bg-primary/10 rounded">
                      <div className="pl-4 bg-primary/20 rounded">pl-4</div>
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Margin"
                description="Utilities for controlling an element's margin."
                code={`<div class="bismillah-m-0">m-0</div>
<div class="bismillah-m-1">m-1</div>
<div class="bismillah-m-2">m-2</div>
<div class="bismillah-m-4">m-4</div>
<div class="bismillah-m-8">m-8</div>
<div class="bismillah-mx-auto">mx-auto</div>
<div class="bismillah-mx-4">mx-4</div>
<div class="bismillah-my-4">my-4</div>
<div class="bismillah-mt-4">mt-4</div>
<div class="bismillah-mr-4">mr-4</div>
<div class="bismillah-mb-4">mb-4</div>
<div class="bismillah-ml-4">ml-4</div>`}
              >
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <div className="m-0 bg-primary/20 rounded">m-0</div>
                    <div className="m-1 bg-primary/20 rounded">m-1</div>
                    <div className="m-2 bg-primary/20 rounded">m-2</div>
                    <div className="m-4 bg-primary/20 rounded">m-4</div>
                    <div className="m-8 bg-primary/20 rounded">m-8</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <div className="mx-auto w-1/2 bg-primary/20 rounded p-2 text-center">mx-auto (centered)</div>
                  </div>
                  <div className="flex flex-wrap gap-8 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <div className="mx-4 bg-primary/20 rounded p-2">mx-4</div>
                    <div className="my-4 bg-primary/20 rounded p-2">my-4</div>
                    <div className="mt-4 bg-primary/20 rounded p-2">mt-4</div>
                    <div className="mr-4 bg-primary/20 rounded p-2">mr-4</div>
                    <div className="mb-4 bg-primary/20 rounded p-2">mb-4</div>
                    <div className="ml-4 bg-primary/20 rounded p-2">ml-4</div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Space Between"
                description="Utilities for controlling the space between child elements."
                code={`<div class="bismillah-space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
<div class="bismillah-space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
              >
                <div className="space-y-8">
                  <div className="p-4 bg-primary/10 rounded">
                    <div className="flex space-x-4">
                      <div className="p-2 bg-primary/20 rounded">Item 1</div>
                      <div className="p-2 bg-primary/20 rounded">Item 2</div>
                      <div className="p-2 bg-primary/20 rounded">Item 3</div>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/10 rounded">
                    <div className="flex flex-col space-y-4">
                      <div className="p-2 bg-primary/20 rounded">Item 1</div>
                      <div className="p-2 bg-primary/20 rounded">Item 2</div>
                      <div className="p-2 bg-primary/20 rounded">Item 3</div>
                    </div>
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="sizing" className="space-y-8">
              <UtilitySection
                title="Width"
                description="Utilities for setting the width of an element."
                code={`<div class="bismillah-w-0">w-0</div>
<div class="bismillah-w-1">w-1</div>
<div class="bismillah-w-1/2">w-1/2</div>
<div class="bismillah-w-full">w-full</div>
<div class="bismillah-w-auto">w-auto</div>
<div class="bismillah-w-screen">w-screen</div>`}
              >
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-0 h-4 bg-primary/20 rounded">w-0</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-1 h-4 bg-primary/20 rounded">w-1</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-1/4 h-4 bg-primary/20 rounded">w-1/4</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-1/2 h-4 bg-primary/20 rounded">w-1/2</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-3/4 h-4 bg-primary/20 rounded">w-3/4</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-full h-4 bg-primary/20 rounded">w-full</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="w-auto inline-block h-4 bg-primary/20 rounded px-4">w-auto</div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Height"
                description="Utilities for setting the height of an element."
                code={`<div class="bismillah-h-0">h-0</div>
<div class="bismillah-h-1">h-1</div>
<div class="bismillah-h-full">h-full</div>
<div class="bismillah-h-screen">h-screen</div>
<div class="bismillah-h-auto">h-auto</div>`}
              >
                <div className="flex items-end space-x-4 h-32 bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <div className="h-0 w-8 bg-primary/20 rounded">h-0</div>
                  <div className="h-8 w-8 bg-primary/20 rounded">h-8</div>
                  <div className="h-16 w-8 bg-primary/20 rounded">h-16</div>
                  <div className="h-24 w-8 bg-primary/20 rounded">h-24</div>
                  <div className="h-full w-8 bg-primary/20 rounded">h-full</div>
                  <div className="h-auto w-8 bg-primary/20 rounded py-2">h-auto</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Min/Max Width & Height"
                description="Utilities for setting the minimum and maximum width and height of an element."
                code={`<div class="bismillah-min-w-0">min-w-0</div>
<div class="bismillah-min-w-full">min-w-full</div>
<div class="bismillah-max-w-xs">max-w-xs</div>
<div class="bismillah-max-w-sm">max-w-sm</div>
<div class="bismillah-max-w-md">max-w-md</div>
<div class="bismillah-max-w-lg">max-w-lg</div>
<div class="bismillah-max-w-xl">max-w-xl</div>
<div class="bismillah-max-w-full">max-w-full</div>
<div class="bismillah-min-h-0">min-h-0</div>
<div class="bismillah-min-h-full">min-h-full</div>
<div class="bismillah-max-h-full">max-h-full</div>
<div class="bismillah-max-h-screen">max-h-screen</div>`}
              >
                <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="max-w-xs mx-auto p-2 bg-primary/20 rounded text-center">max-w-xs</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="max-w-sm mx-auto p-2 bg-primary/20 rounded text-center">max-w-sm</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="max-w-md mx-auto p-2 bg-primary/20 rounded text-center">max-w-md</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="max-w-lg mx-auto p-2 bg-primary/20 rounded text-center">max-w-lg</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                    <div className="max-w-xl mx-auto p-2 bg-primary/20 rounded text-center">max-w-xl</div>
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="typography" className="space-y-8">
              <UtilitySection
                title="Font Size"
                description="Utilities for controlling the font size of an element."
                code={`<div class="bismillah-text-xs">text-xs</div>
<div class="bismillah-text-sm">text-sm</div>
<div class="bismillah-text-base">text-base</div>
<div class="bismillah-text-lg">text-lg</div>
<div class="bismillah-text-xl">text-xl</div>
<div class="bismillah-text-2xl">text-2xl</div>
<div class="bismillah-text-3xl">text-3xl</div>
<div class="bismillah-text-4xl">text-4xl</div>
<div class="bismillah-text-5xl">text-5xl</div>
<div class="bismillah-text-6xl">text-6xl</div>`}
              >
                <div className="space-y-4">
                  <div className="text-xs">text-xs</div>
                  <div className="text-sm">text-sm</div>
                  <div className="text-base">text-base</div>
                  <div className="text-lg">text-lg</div>
                  <div className="text-xl">text-xl</div>
                  <div className="text-2xl">text-2xl</div>
                  <div className="text-3xl">text-3xl</div>
                  <div className="text-4xl">text-4xl</div>
                  <div className="text-5xl">text-5xl</div>
                  <div className="text-6xl">text-6xl</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Font Weight"
                description="Utilities for controlling the font weight of an element."
                code={`<div class="bismillah-font-thin">font-thin</div>
<div class="bismillah-font-extralight">font-extralight</div>
<div class="bismillah-font-light">font-light</div>
<div class="bismillah-font-normal">font-normal</div>
<div class="bismillah-font-medium">font-medium</div>
<div class="bismillah-font-semibold">font-semibold</div>
<div class="bismillah-font-bold">font-bold</div>
<div class="bismillah-font-extrabold">font-extrabold</div>
<div class="bismillah-font-black">font-black</div>`}
              >
                <div className="space-y-4">
                  <div className="font-thin text-xl">font-thin</div>
                  <div className="font-extralight text-xl">font-extralight</div>
                  <div className="font-light text-xl">font-light</div>
                  <div className="font-normal text-xl">font-normal</div>
                  <div className="font-medium text-xl">font-medium</div>
                  <div className="font-semibold text-xl">font-semibold</div>
                  <div className="font-bold text-xl">font-bold</div>
                  <div className="font-extrabold text-xl">font-extrabold</div>
                  <div className="font-black text-xl">font-black</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Text Alignment"
                description="Utilities for controlling the alignment of text."
                code={`<div class="bismillah-text-left">text-left</div>
<div class="bismillah-text-center">text-center</div>
<div class="bismillah-text-right">text-right</div>
<div class="bismillah-text-justify">text-justify</div>`}
              >
                <div className="space-y-4">
                  <div className="text-left bg-primary/10 p-2 rounded">
                    This text is left aligned. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="text-center bg-primary/10 p-2 rounded">
                    This text is centered. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="text-right bg-primary/10 p-2 rounded">
                    This text is right aligned. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div className="text-justify bg-primary/10 p-2 rounded">
                    This text is justified. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Text Color"
                description="Utilities for controlling the text color of an element."
                code={`<div class="bismillah-text-primary">text-primary</div>
<div class="bismillah-text-secondary">text-secondary</div>
<div class="bismillah-text-success">text-success</div>
<div class="bismillah-text-danger">text-danger</div>
<div class="bismillah-text-warning">text-warning</div>
<div class="bismillah-text-info">text-info</div>
<div class="bismillah-text-light">text-light</div>
<div class="bismillah-text-dark">text-dark</div>
<div class="bismillah-text-muted">text-muted</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-primary">text-primary</div>
                  <div className="text-blue-500">text-blue-500</div>
                  <div className="text-green-500">text-green-500</div>
                  <div className="text-red-500">text-red-500</div>
                  <div className="text-yellow-500">text-yellow-500</div>
                  <div className="text-purple-500">text-purple-500</div>
                  <div className="text-pink-500">text-pink-500</div>
                  <div className="text-gray-500">text-gray-500</div>
                  <div className="text-muted-foreground">text-muted-foreground</div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="backgrounds" className="space-y-8">
              <UtilitySection
                title="Background Color"
                description="Utilities for controlling an element's background color."
                code={`<div class="bismillah-bg-primary">bg-primary</div>
<div class="bismillah-bg-secondary">bg-secondary</div>
<div class="bismillah-bg-success">bg-success</div>
<div class="bismillah-bg-danger">bg-danger</div>
<div class="bismillah-bg-warning">bg-warning</div>
<div class="bismillah-bg-info">bg-info</div>
<div class="bismillah-bg-light">bg-light</div>
<div class="bismillah-bg-dark">bg-dark</div>
<div class="bismillah-bg-white">bg-white</div>
<div class="bismillah-bg-transparent">bg-transparent</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-primary text-white p-4 rounded">bg-primary</div>
                  <div className="bg-blue-500 text-white p-4 rounded">bg-blue-500</div>
                  <div className="bg-green-500 text-white p-4 rounded">bg-green-500</div>
                  <div className="bg-red-500 text-white p-4 rounded">bg-red-500</div>
                  <div className="bg-yellow-500 text-white p-4 rounded">bg-yellow-500</div>
                  <div className="bg-purple-500 text-white p-4 rounded">bg-purple-500</div>
                  <div className="bg-pink-500 text-white p-4 rounded">bg-pink-500</div>
                  <div className="bg-gray-500 text-white p-4 rounded">bg-gray-500</div>
                  <div className="bg-white text-black p-4 rounded">bg-white</div>
                  <div className="bg-transparent text-black p-4 rounded border">bg-transparent</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Background Opacity"
                description="Utilities for controlling the opacity of an element's background color."
                code={`<div class="bismillah-bg-primary bismillah-bg-opacity-100">bg-opacity-100</div>
<div class="bismillah-bg-primary bismillah-bg-opacity-75">bg-opacity-75</div>
<div class="bismillah-bg-primary bismillah-bg-opacity-50">bg-opacity-50</div>
<div class="bismillah-bg-primary bismillah-bg-opacity-25">bg-opacity-25</div>
<div class="bismillah-bg-primary bismillah-bg-opacity-0">bg-opacity-0</div>`}
              >
                <div className="space-y-4">
                  <div className="bg-primary bg-opacity-100 text-white p-4 rounded">bg-opacity-100</div>
                  <div className="bg-primary bg-opacity-75 text-white p-4 rounded">bg-opacity-75</div>
                  <div className="bg-primary bg-opacity-50 text-white p-4 rounded">bg-opacity-50</div>
                  <div className="bg-primary bg-opacity-25 text-white p-4 rounded">bg-opacity-25</div>
                  <div className="bg-primary bg-opacity-10 text-white p-4 rounded">bg-opacity-10</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Background Gradient"
                description="Utilities for applying gradient backgrounds to elements."
                code={`<div class="bismillah-bg-gradient-to-r bismillah-from-primary bismillah-to-secondary">
  Gradient Right
</div>
<div class="bismillah-bg-gradient-to-l bismillah-from-primary bismillah-to-secondary">
  Gradient Left
</div>
<div class="bismillah-bg-gradient-to-t bismillah-from-primary bismillah-to-secondary">
  Gradient Top
</div>
<div class="bismillah-bg-gradient-to-b bismillah-from-primary bismillah-to-secondary">
  Gradient Bottom
</div>`}
              >
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded">
                    Gradient Right (blue to purple)
                  </div>
                  <div className="bg-gradient-to-l from-blue-500 to-purple-500 text-white p-4 rounded">
                    Gradient Left (blue to purple)
                  </div>
                  <div className="bg-gradient-to-t from-blue-500 to-purple-500 text-white p-4 rounded">
                    Gradient Top (blue to purple)
                  </div>
                  <div className="bg-gradient-to-b from-blue-500 to-purple-500 text-white p-4 rounded">
                    Gradient Bottom (blue to purple)
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded">
                    Gradient Right (green to blue)
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded">
                    Gradient Right with Via (pink to red to yellow)
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="borders" className="space-y-8">
              <UtilitySection
                title="Border Width"
                description="Utilities for controlling the width of an element's borders."
                code={`<div class="bismillah-border-0">border-0</div>
<div class="bismillah-border">border</div>
<div class="bismillah-border-2">border-2</div>
<div class="bismillah-border-4">border-4</div>
<div class="bismillah-border-8">border-8</div>
<div class="bismillah-border-t-2">border-t-2</div>
<div class="bismillah-border-r-2">border-r-2</div>
<div class="bismillah-border-b-2">border-b-2</div>
<div class="bismillah-border-l-2">border-l-2</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border-0 p-4 bg-primary/10 rounded">border-0</div>
                  <div className="border p-4 bg-primary/10 rounded">border</div>
                  <div className="border-2 p-4 bg-primary/10 rounded">border-2</div>
                  <div className="border-4 p-4 bg-primary/10 rounded">border-4</div>
                  <div className="border-8 p-4 bg-primary/10 rounded">border-8</div>
                  <div className="border-t-2 p-4 bg-primary/10 rounded">border-t-2</div>
                  <div className="border-r-2 p-4 bg-primary/10 rounded">border-r-2</div>
                  <div className="border-b-2 p-4 bg-primary/10 rounded">border-b-2</div>
                  <div className="border-l-2 p-4 bg-primary/10 rounded">border-l-2</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Border Color"
                description="Utilities for controlling the color of an element's borders."
                code={`<div class="bismillah-border-2 bismillah-border-primary">border-primary</div>
<div class="bismillah-border-2 bismillah-border-secondary">border-secondary</div>
<div class="bismillah-border-2 bismillah-border-success">border-success</div>
<div class="bismillah-border-2 bismillah-border-danger">border-danger</div>
<div class="bismillah-border-2 bismillah-border-warning">border-warning</div>
<div class="bismillah-border-2 bismillah-border-info">border-info</div>
<div class="bismillah-border-2 bismillah-border-light">border-light</div>
<div class="bismillah-border-2 bismillah-border-dark">border-dark</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border-2 border-primary p-4 rounded">border-primary</div>
                  <div className="border-2 border-blue-500 p-4 rounded">border-blue-500</div>
                  <div className="border-2 border-green-500 p-4 rounded">border-green-500</div>
                  <div className="border-2 border-red-500 p-4 rounded">border-red-500</div>
                  <div className="border-2 border-yellow-500 p-4 rounded">border-yellow-500</div>
                  <div className="border-2 border-purple-500 p-4 rounded">border-purple-500</div>
                  <div className="border-2 border-pink-500 p-4 rounded">border-pink-500</div>
                  <div className="border-2 border-gray-500 p-4 rounded">border-gray-500</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Border Radius"
                description="Utilities for controlling the border radius of an element."
                code={`<div class="bismillah-rounded-none">rounded-none</div>
<div class="bismillah-rounded-sm">rounded-sm</div>
<div class="bismillah-rounded">rounded</div>
<div class="bismillah-rounded-md">rounded-md</div>
<div class="bismillah-rounded-lg">rounded-lg</div>
<div class="bismillah-rounded-xl">rounded-xl</div>
<div class="bismillah-rounded-2xl">rounded-2xl</div>
<div class="bismillah-rounded-3xl">rounded-3xl</div>
<div class="bismillah-rounded-full">rounded-full</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="rounded-none bg-primary/20 p-4">rounded-none</div>
                  <div className="rounded-sm bg-primary/20 p-4">rounded-sm</div>
                  <div className="rounded bg-primary/20 p-4">rounded</div>
                  <div className="rounded-md bg-primary/20 p-4">rounded-md</div>
                  <div className="rounded-lg bg-primary/20 p-4">rounded-lg</div>
                  <div className="rounded-xl bg-primary/20 p-4">rounded-xl</div>
                  <div className="rounded-2xl bg-primary/20 p-4">rounded-2xl</div>
                  <div className="rounded-3xl bg-primary/20 p-4">rounded-3xl</div>
                  <div className="rounded-full bg-primary/20 p-4">rounded-full</div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="effects" className="space-y-8">
              <UtilitySection
                title="Box Shadow"
                description="Utilities for controlling the box shadow of an element."
                code={`<div class="bismillah-shadow-sm">shadow-sm</div>
<div class="bismillah-shadow">shadow</div>
<div class="bismillah-shadow-md">shadow-md</div>
<div class="bismillah-shadow-lg">shadow-lg</div>
<div class="bismillah-shadow-xl">shadow-xl</div>
<div class="bismillah-shadow-2xl">shadow-2xl</div>
<div class="bismillah-shadow-inner">shadow-inner</div>
<div class="bismillah-shadow-none">shadow-none</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="shadow-sm bg-white dark:bg-gray-800 p-4 rounded">shadow-sm</div>
                  <div className="shadow bg-white dark:bg-gray-800 p-4 rounded">shadow</div>
                  <div className="shadow-md bg-white dark:bg-gray-800 p-4 rounded">shadow-md</div>
                  <div className="shadow-lg bg-white dark:bg-gray-800 p-4 rounded">shadow-lg</div>
                  <div className="shadow-xl bg-white dark:bg-gray-800 p-4 rounded">shadow-xl</div>
                  <div className="shadow-2xl bg-white dark:bg-gray-800 p-4 rounded">shadow-2xl</div>
                  <div className="shadow-inner bg-white dark:bg-gray-800 p-4 rounded">shadow-inner</div>
                  <div className="shadow-none bg-white dark:bg-gray-800 p-4 rounded border">shadow-none</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Opacity"
                description="Utilities for controlling the opacity of an element."
                code={`<div class="bismillah-opacity-0">opacity-0</div>
<div class="bismillah-opacity-5">opacity-5</div>
<div class="bismillah-opacity-10">opacity-10</div>
<div class="bismillah-opacity-20">opacity-20</div>
<div class="bismillah-opacity-25">opacity-25</div>
<div class="bismillah-opacity-30">opacity-30</div>
<div class="bismillah-opacity-40">opacity-40</div>
<div class="bismillah-opacity-50">opacity-50</div>
<div class="bismillah-opacity-60">opacity-60</div>
<div class="bismillah-opacity-70">opacity-70</div>
<div class="bismillah-opacity-75">opacity-75</div>
<div class="bismillah-opacity-80">opacity-80</div>
<div class="bismillah-opacity-90">opacity-90</div>
<div class="bismillah-opacity-95">opacity-95</div>
<div class="bismillah-opacity-100">opacity-100</div>`}
              >
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  <div className="opacity-100 bg-primary p-4 rounded text-white text-center">100%</div>
                  <div className="opacity-75 bg-primary p-4 rounded text-white text-center">75%</div>
                  <div className="opacity-50 bg-primary p-4 rounded text-white text-center">50%</div>
                  <div className="opacity-25 bg-primary p-4 rounded text-white text-center">25%</div>
                  <div className="opacity-10 bg-primary p-4 rounded text-white text-center">10%</div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="filters" className="space-y-8">
              <UtilitySection
                title="Blur"
                description="Utilities for applying blur filters to an element."
                code={`<div class="bismillah-blur-none">blur-none</div>
<div class="bismillah-blur-sm">blur-sm</div>
<div class="bismillah-blur">blur</div>
<div class="bismillah-blur-md">blur-md</div>
<div class="bismillah-blur-lg">blur-lg</div>
<div class="bismillah-blur-xl">blur-xl</div>
<div class="bismillah-blur-2xl">blur-2xl</div>
<div class="bismillah-blur-3xl">blur-3xl</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="mb-2 text-sm">blur-none</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-none" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur-sm</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-sm" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur-md</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-md" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur-lg</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-lg" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur-xl</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-xl" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur-2xl</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-2xl" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">blur-3xl</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="blur-3xl" />
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Brightness"
                description="Utilities for applying brightness filters to an element."
                code={`<div class="bismillah-brightness-0">brightness-0</div>
<div class="bismillah-brightness-50">brightness-50</div>
<div class="bismillah-brightness-75">brightness-75</div>
<div class="bismillah-brightness-90">brightness-90</div>
<div class="bismillah-brightness-95">brightness-95</div>
<div class="bismillah-brightness-100">brightness-100</div>
<div class="bismillah-brightness-105">brightness-105</div>
<div class="bismillah-brightness-110">brightness-110</div>
<div class="bismillah-brightness-125">brightness-125</div>
<div class="bismillah-brightness-150">brightness-150</div>
<div class="bismillah-brightness-200">brightness-200</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="mb-2 text-sm">brightness-50</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="brightness-50" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">brightness-75</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="brightness-75" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">brightness-100</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="brightness-100" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">brightness-125</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="brightness-125" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">brightness-150</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="brightness-150" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">brightness-200</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="brightness-200" />
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Contrast"
                description="Utilities for applying contrast filters to an element."
                code={`<div class="bismillah-contrast-0">contrast-0</div>
<div class="bismillah-contrast-50">contrast-50</div>
<div class="bismillah-contrast-75">contrast-75</div>
<div class="bismillah-contrast-100">contrast-100</div>
<div class="bismillah-contrast-125">contrast-125</div>
<div class="bismillah-contrast-150">contrast-150</div>
<div class="bismillah-contrast-200">contrast-200</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="mb-2 text-sm">contrast-50</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="contrast-50" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">contrast-75</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="contrast-75" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">contrast-100</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="contrast-100" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">contrast-125</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="contrast-125" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">contrast-150</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="contrast-150" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">contrast-200</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="contrast-200" />
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Grayscale"
                description="Utilities for applying grayscale filters to an element."
                code={`<div class="bismillah-grayscale-0">grayscale-0</div>
<div class="bismillah-grayscale">grayscale</div>`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-sm">grayscale-0 (original)</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="grayscale-0" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm">grayscale</p>
                    <img src="/placeholder.svg?height=100&width=100" alt="Placeholder" className="grayscale" />
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="transitions" className="space-y-8">
              <UtilitySection
                title="Transition Property"
                description="Utilities for controlling which CSS properties transition."
                code={`<div class="bismillah-transition-none">transition-none</div>
<div class="bismillah-transition-all">transition-all</div>
<div class="bismillah-transition">transition</div>
<div class="bismillah-transition-colors">transition-colors</div>
<div class="bismillah-transition-opacity">transition-opacity</div>
<div class="bismillah-transition-shadow">transition-shadow</div>
<div class="bismillah-transition-transform">transition-transform</div>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">transition (hover me)</p>
                    <div className="transition duration-300 ease-in-out bg-primary/20 hover:bg-primary hover:scale-110 p-4 rounded text-center">
                      Transition All
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">transition-colors (hover me)</p>
                    <div className="transition-colors duration-300 ease-in-out bg-primary/20 hover:bg-primary p-4 rounded text-center">
                      Transition Colors
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">transition-opacity (hover me)</p>
                    <div className="transition-opacity duration-300 ease-in-out bg-primary/20 hover:opacity-50 p-4 rounded text-center">
                      Transition Opacity
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">transition-transform (hover me)</p>
                    <div className="transition-transform duration-300 ease-in-out bg-primary/20 hover:scale-110 p-4 rounded text-center">
                      Transition Transform
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Transition Duration"
                description="Utilities for controlling the duration of CSS transitions."
                code={`<div class="bismillah-duration-75">duration-75</div>
<div class="bismillah-duration-100">duration-100</div>
<div class="bismillah-duration-150">duration-150</div>
<div class="bismillah-duration-200">duration-200</div>
<div class="bismillah-duration-300">duration-300</div>
<div class="bismillah-duration-500">duration-500</div>
<div class="bismillah-duration-700">duration-700</div>
<div class="bismillah-duration-1000">duration-1000</div>`}
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                      <p className="mb-2 text-sm">duration-75 (hover me)</p>
                      <div className="transition duration-75 ease-in-out bg-primary/20 hover:bg-primary p-4 rounded text-center">
                        75ms
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                      <p className="mb-2 text-sm">duration-150 (hover me)</p>
                      <div className="transition duration-150 ease-in-out bg-primary/20 hover:bg-primary p-4 rounded text-center">
                        150ms
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                      <p className="mb-2 text-sm">duration-300 (hover me)</p>
                      <div className="transition duration-300 ease-in-out bg-primary/20 hover:bg-primary p-4 rounded text-center">
                        300ms
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                      <p className="mb-2 text-sm">duration-700 (hover me)</p>
                      <div className="transition duration-700 ease-in-out bg-primary/20 hover:bg-primary p-4 rounded text-center">
                        700ms
                      </div>
                    </div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Transition Timing Function"
                description="Utilities for controlling the easing of CSS transitions."
                code={`<div class="bismillah-ease-linear">ease-linear</div>
<div class="bismillah-ease-in">ease-in</div>
<div class="bismillah-ease-out">ease-out</div>
<div class="bismillah-ease-in-out">ease-in-out</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">ease-linear (hover me)</p>
                    <div className="transition duration-300 ease-linear bg-primary/20 hover:translate-x-4 p-4 rounded text-center">
                      Linear
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">ease-in (hover me)</p>
                    <div className="transition duration-300 ease-in bg-primary/20 hover:translate-x-4 p-4 rounded text-center">
                      Ease In
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">ease-out (hover me)</p>
                    <div className="transition duration-300 ease-out bg-primary/20 hover:translate-x-4 p-4 rounded text-center">
                      Ease Out
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                    <p className="mb-2 text-sm">ease-in-out (hover me)</p>
                    <div className="transition duration-300 ease-in-out bg-primary/20 hover:translate-x-4 p-4 rounded text-center">
                      Ease In Out
                    </div>
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="transforms" className="space-y-8">
              <UtilitySection
                title="Scale"
                description="Utilities for scaling elements with transform."
                code={`<div class="bismillah-scale-0">scale-0</div>
<div class="bismillah-scale-50">scale-50</div>
<div class="bismillah-scale-75">scale-75</div>
<div class="bismillah-scale-90">scale-90</div>
<div class="bismillah-scale-95">scale-95</div>
<div class="bismillah-scale-100">scale-100</div>
<div class="bismillah-scale-105">scale-105</div>
<div class="bismillah-scale-110">scale-110</div>
<div class="bismillah-scale-125">scale-125</div>
<div class="bismillah-scale-150">scale-150</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">scale-50</p>
                    <div className="scale-50 bg-primary/20 p-4 rounded">Scale 50%</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">scale-75</p>
                    <div className="scale-75 bg-primary/20 p-4 rounded">Scale 75%</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">scale-100 (normal)</p>
                    <div className="scale-100 bg-primary/20 p-4 rounded">Scale 100%</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">scale-125</p>
                    <div className="scale-125 bg-primary/20 p-4 rounded">Scale 125%</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">scale-150</p>
                    <div className="scale-150 bg-primary/20 p-4 rounded">Scale 150%</div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Rotate"
                description="Utilities for rotating elements with transform."
                code={`<div class="bismillah-rotate-0">rotate-0</div>
<div class="bismillah-rotate-45">rotate-45</div>
<div class="bismillah-rotate-90">rotate-90</div>
<div class="bismillah-rotate-180">rotate-180</div>
<div class="bismillah-rotate-270">rotate-270</div>
<div class="bismillah--rotate-45">-rotate-45</div>
<div class="bismillah--rotate-90">-rotate-90</div>
<div class="bismillah--rotate-180">-rotate-180</div>
<div class="bismillah--rotate-270">-rotate-270</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">rotate-0 (normal)</p>
                    <div className="rotate-0 bg-primary/20 p-4 rounded">Rotate 0°</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">rotate-45</p>
                    <div className="rotate-45 bg-primary/20 p-4 rounded">Rotate 45°</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">rotate-90</p>
                    <div className="rotate-90 bg-primary/20 p-4 rounded">Rotate 90°</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">rotate-180</p>
                    <div className="rotate-180 bg-primary/20 p-4 rounded">Rotate 180°</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="mb-2 text-sm">-rotate-45</p>
                    <div className="-rotate-45 bg-primary/20 p-4 rounded">Rotate -45°</div>
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Translate"
                description="Utilities for translating elements with transform."
                code={`<div class="bismillah-translate-x-0">translate-x-0</div>
<div class="bismillah-translate-x-1">translate-x-1</div>
<div class="bismillah-translate-x-2">translate-x-2</div>
<div class="bismillah-translate-x-4">translate-x-4</div>
<div class="bismillah-translate-x-8">translate-x-8</div>
<div class="bismillah--translate-x-1">-translate-x-1</div>
<div class="bismillah--translate-x-2">-translate-x-2</div>
<div class="bismillah--translate-x-4">-translate-x-4</div>
<div class="bismillah--translate-x-8">-translate-x-8</div>
<div class="bismillah-translate-y-0">translate-y-0</div>
<div class="bismillah-translate-y-1">translate-y-1</div>
<div class="bismillah-translate-y-2">translate-y-2</div>
<div class="bismillah-translate-y-4">translate-y-4</div>
<div class="bismillah-translate-y-8">translate-y-8</div>
<div class="bismillah--translate-y-1">-translate-y-1</div>
<div class="bismillah--translate-y-2">-translate-y-2</div>
<div class="bismillah--translate-y-4">-translate-y-4</div>
<div class="bismillah--translate-y-8">-translate-y-8</div>`}
              >
                <div className="space-y-8">
                  <div>
                    <p className="mb-2 text-sm">Translate X</p>
                    <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                      <div className="absolute top-4 left-4 translate-x-0 bg-primary/20 p-2 rounded">translate-x-0</div>
                      <div className="absolute top-12 left-4 translate-x-8 bg-primary/20 p-2 rounded">
                        translate-x-8
                      </div>
                      <div className="absolute top-20 left-4 -translate-x-4 bg-primary/20 p-2 rounded">
                        -translate-x-4
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-sm">Translate Y</p>
                    <div className="relative h-32 bg-gray-100 dark:bg-gray-800 p-4 rounded">
                      <div className="absolute top-4 left-4 translate-y-0 bg-primary/20 p-2 rounded">translate-y-0</div>
                      <div className="absolute top-4 left-32 translate-y-8 bg-primary/20 p-2 rounded">
                        translate-y-8
                      </div>
                      <div className="absolute top-4 left-60 -translate-y-4 bg-primary/20 p-2 rounded">
                        -translate-y-4
                      </div>
                    </div>
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>

            <TabsContent value="interactivity" className="space-y-8">
              <UtilitySection
                title="Cursor"
                description="Utilities for controlling the cursor style when hovering over an element."
                code={`<div class="bismillah-cursor-auto">cursor-auto</div>
<div class="bismillah-cursor-default">cursor-default</div>
<div class="bismillah-cursor-pointer">cursor-pointer</div>
<div class="bismillah-cursor-wait">cursor-wait</div>
<div class="bismillah-cursor-text">cursor-text</div>
<div class="bismillah-cursor-move">cursor-move</div>
<div class="bismillah-cursor-not-allowed">cursor-not-allowed</div>
<div class="bismillah-cursor-help">cursor-help</div>
<div class="bismillah-cursor-progress">cursor-progress</div>
<div class="bismillah-cursor-crosshair">cursor-crosshair</div>
<div class="bismillah-cursor-grab">cursor-grab</div>
<div class="bismillah-cursor-grabbing">cursor-grabbing</div>`}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="cursor-auto bg-primary/10 p-4 rounded text-center">cursor-auto</div>
                  <div className="cursor-default bg-primary/10 p-4 rounded text-center">cursor-default</div>
                  <div className="cursor-pointer bg-primary/10 p-4 rounded text-center">cursor-pointer</div>
                  <div className="cursor-wait bg-primary/10 p-4 rounded text-center">cursor-wait</div>
                  <div className="cursor-text bg-primary/10 p-4 rounded text-center">cursor-text</div>
                  <div className="cursor-move bg-primary/10 p-4 rounded text-center">cursor-move</div>
                  <div className="cursor-not-allowed bg-primary/10 p-4 rounded text-center">cursor-not-allowed</div>
                  <div className="cursor-help bg-primary/10 p-4 rounded text-center">cursor-help</div>
                  <div className="cursor-progress bg-primary/10 p-4 rounded text-center">cursor-progress</div>
                  <div className="cursor-crosshair bg-primary/10 p-4 rounded text-center">cursor-crosshair</div>
                  <div className="cursor-grab bg-primary/10 p-4 rounded text-center">cursor-grab</div>
                  <div className="cursor-grabbing bg-primary/10 p-4 rounded text-center">cursor-grabbing</div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="User Select"
                description="Utilities for controlling whether the user can select text in an element."
                code={`<div class="bismillah-select-none">select-none</div>
<div class="bismillah-select-text">select-text</div>
<div class="bismillah-select-all">select-all</div>
<div class="bismillah-select-auto">select-auto</div>`}
              >
                <div className="space-y-4">
                  <div className="select-none bg-primary/10 p-4 rounded">
                    This text cannot be selected (select-none)
                  </div>
                  <div className="select-text bg-primary/10 p-4 rounded">This text can be selected (select-text)</div>
                  <div className="select-all bg-primary/10 p-4 rounded">
                    This text is selected all at once (select-all)
                  </div>
                  <div className="select-auto bg-primary/10 p-4 rounded">
                    This text has the default selection behavior (select-auto)
                  </div>
                </div>
              </UtilitySection>

              <UtilitySection
                title="Pointer Events"
                description="Utilities for controlling whether an element responds to pointer events."
                code={`<div class="bismillah-pointer-events-none">pointer-events-none</div>
<div class="bismillah-pointer-events-auto">pointer-events-auto</div>`}
              >
                <div className="space-y-4">
                  <div className="pointer-events-none bg-primary/10 p-4 rounded cursor-pointer">
                    This element does not respond to pointer events (pointer-events-none)
                  </div>
                  <div className="pointer-events-auto bg-primary/10 p-4 rounded cursor-pointer">
                    This element responds to pointer events (pointer-events-auto)
                  </div>
                </div>
              </UtilitySection>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <GlowButton asChild size="lg">
              <Link href="/components/showcase">View Component Showcase</Link>
            </GlowButton>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

