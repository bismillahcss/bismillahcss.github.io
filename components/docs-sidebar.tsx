"use client"
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Utility-First", href: "/docs/utility-first" },
      { title: "Responsive Design", href: "/docs/responsive-design" },
      { title: "Pseudo-Classes", href: "/docs/pseudo-classes" },
      { title: "Dark Mode", href: "/docs/dark-mode" },
    ],
  },
  {
    title: "Utility Classes",
    items: [
      { title: "Layout", href: "/docs/utility-classes/layout" },
      { title: "Typography", href: "/docs/utility-classes/typography" },
      { title: "Colors", href: "/docs/utility-classes/colors" },
      { title: "Spacing", href: "/docs/utility-classes/spacing" },
      { title: "Flexbox", href: "/docs/utility-classes/flexbox" },
      { title: "Grid", href: "/docs/utility-classes/grid" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components" },
      { title: "Buttons", href: "/docs/components/buttons" },
      { title: "Cards", href: "/docs/components/cards" },
      { title: "Forms", href: "/docs/components/forms" },
      { title: "Modals", href: "/docs/components/modals" },
    ],
  },
  {
    title: "Ultra Components",
    items: [
      { title: "Overview", href: "/docs/ultra" },
      { title: "Hero Ultra", href: "/docs/ultra/hero" },
      { title: "Navbar Ultra", href: "/docs/ultra/navbar" },
      { title: "Pricing Ultra", href: "/docs/ultra/pricing" },
      { title: "Dashboard Ultra", href: "/docs/ultra/dashboard" },
    ],
  },
  {
    title: "UI Library & Primitives",
    items: [
      { title: "Introduction", href: "/docs/ui-library" },
      { title: "Motion Primitives", href: "/docs/ui-library/primitives" },
      { title: "Icons Library", href: "/docs/ui-library/icons" },
      { title: "Theme Presets", href: "/docs/ui-library/presets" },
    ],
  },
  {
    title: "Advanced Ecosystem",
    items: [
      { title: "MCP (AI Context)", href: "/docs/ecosystem/mcp" },
      { title: "Registry", href: "/docs/ecosystem/registry" },
      { title: "Schema & Types", href: "/docs/ecosystem/schema" },
    ],
  },
  {
    title: "Customization",
    items: [
      { title: "Theming", href: "/docs/customization/theming" },
      { title: "Configuration", href: "/docs/customization/configuration" },
      { title: "Plugins", href: "/docs/customization/plugins" },
      { title: "Extending", href: "/docs/customization/extending" },
    ],
  },
]

export function DocsSidebar({ className, onLinkClick }: { className?: string; onLinkClick?: () => void }) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>(
    // Default to all sections open on mobile, but can be toggled
    sidebarItems.map((item) => item.title),
  )

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(`${href}/`)
  }

  return (
    <nav className={cn("flex flex-col gap-2 relative z-20 pointer-events-auto", className)}>
      {sidebarItems.map((section) => (
        <div key={section.title} className="pb-4">
          <button
            onClick={() => toggleSection(section.title)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-all group cursor-pointer"
          >
            <span className="tracking-tight uppercase text-xs text-muted-foreground group-hover:text-primary transition-colors">
              {section.title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("h-4 w-4 text-muted-foreground/50 transition-all", openSections.includes(section.title) ? "rotate-0 opacity-100" : "-rotate-90 opacity-40")}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className={cn("mt-1 pl-1 space-y-1 overflow-hidden transition-all duration-300",
            openSections.includes(section.title) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onLinkClick}
                className={cn(
                  "flex items-center rounded-lg px-4 py-1.5 text-sm transition-all duration-200 relative group overflow-hidden",
                  isActive(item.href)
                    ? "bg-primary/20 text-primary font-bold shadow-[0_0_15px_-3px_rgba(var(--primary),0.3)]"
                    : "text-muted-foreground/80 hover:text-foreground hover:bg-accent/40",
                )}
              >
                {isActive(item.href) && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute left-1.5 w-1 h-1 rounded-full bg-primary"
                  />
                )}
                {item.title}
                {!isActive(item.href) && (
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}


