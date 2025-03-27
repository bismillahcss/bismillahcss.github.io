"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GlowButton } from "@/components/glow-button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

const components = [
  {
    title: "Buttons",
    description: "Interactive button elements for forms and actions.",
    href: "/components/buttons",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Cards",
    description: "Containers for presenting content in a structured way.",
    href: "/components/cards",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Forms",
    description: "Input elements for collecting user data.",
    href: "/components/forms",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Navigation",
    description: "Components for navigating between pages and sections.",
    href: "/components/navigation",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Modals",
    description: "Overlay dialogs for important content and actions.",
    href: "/components/modals",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Alerts",
    description: "Notifications to provide feedback to users.",
    href: "/components/alerts",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Tables",
    description: "Display tabular data in a structured format.",
    href: "/components/tables",
    image: "/placeholder.svg?height=120&width=240",
  },
  {
    title: "Tabs",
    description: "Organize content into separate views or sections.",
    href: "/components/tabs",
    image: "/placeholder.svg?height=120&width=240",
  },
]

const categories = ["All", "Layout", "Forms", "Navigation", "Feedback", "Data Display", "Overlays", "Media"]

export default function ComponentsPage() {
  return (
    <PageTransition>
      <div className="container py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Components</h1>
            <p className="mt-2 text-muted-foreground">Beautiful, reusable components built with BismillahCSS.</p>
          </div>
          <div className="flex items-center gap-2">
            <GlowButton asChild>
              <Link href="/docs/components">Documentation</Link>
            </GlowButton>
            <GlowButton variant="outline" asChild>
              <Link href="/playground">Playground</Link>
            </GlowButton>
          </div>
        </div>

        <div className="my-8">
          <ScrollArea className="w-full">
            <Tabs defaultValue="All">
              <div className="flex border-b pb-4">
                <TabsList className="flex flex-nowrap">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="min-w-[100px]">
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <Tabs defaultValue="All" className="hidden">
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              {/* Content will be controlled by JavaScript */}
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {components.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all"
            >
              <Link href={component.href} className="group flex h-full flex-col">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={component.image || "/placeholder.svg"}
                    alt={component.title}
                    width={240}
                    height={120}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="font-semibold">{component.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{component.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-primary">
                    <span>View Component</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border bg-card p-8 text-center shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold">Looking for more components?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              If you can't find what you're looking for, check out our documentation or let us know what you need. We're
              constantly adding new components based on community feedback.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
              <GlowButton asChild>
                <Link href="/docs/components">Browse All Components</Link>
              </GlowButton>
              <GlowButton variant="outline" asChild>
                <Link href="https://github.com/bismillahcss/framework/issues/new">Request Component</Link>
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

