import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Package, Palette, Zap } from "lucide-react"
import { GlowButton } from "@/components/glow-button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"

export const metadata: Metadata = {
  title: "Documentation - BismillahCSS",
  description: "Comprehensive guides and documentation to help you get started with BismillahCSS, the next-gen utility-first CSS framework.",
}

export default function DocsPage() {
  return (
    <PageTransition>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bismillahcss.github.io/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Documentation",
                "item": "https://bismillahcss.github.io/docs"
              }
            ]
          })
        }}
      />
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the BismillahCSS documentation. Here you'll find comprehensive guides and documentation to help you
          start working with BismillahCSS as quickly as possible.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Getting Started",
              description: "Everything you need to know to get up and running with BismillahCSS.",
              icon: Package,
              href: "/docs/installation",
            },
            {
              title: "Utility Classes",
              description: "Learn about the utility-first workflow and explore all available classes.",
              icon: Zap,
              href: "/docs/utility-classes/layout",
            },
            {
              title: "Components",
              description: "Explore pre-built UI components and learn how to use and customize them.",
              icon: FileText,
              href: "/docs/components",
            },
            {
              title: "Customization",
              description: "Learn how to customize themes, extend the framework and create your own design system.",
              icon: Palette,
              href: "/docs/customization/theming",
            },
          ].map((item, index) => (
            <AnimatedCard key={item.title} index={index}>
              <Link href={item.href} className="group flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </div>
                <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
                <p className="mt-1 text-muted-foreground">{item.description}</p>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 border-t pt-8">
          <h2 className="text-xl font-semibold">Not finding what you need?</h2>
          <p className="mt-4 text-muted-foreground">
            If you can't find what you're looking for in our documentation, you can check out our community resources or
            reach out to us directly.
          </p>
          <div className="mt-4 flex gap-4">
            <GlowButton asChild>
              <Link href="/community">Join the Community</Link>
            </GlowButton>
            <GlowButton variant="outline" asChild>
              <Link href="https://github.com/bismillahcss">Report an Issue</Link>
            </GlowButton>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

