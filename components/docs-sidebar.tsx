"use client"
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
    title: "Customization",
    items: [
      { title: "Theming", href: "/docs/customization/theming" },
      { title: "Configuration", href: "/docs/customization/configuration" },
      { title: "Plugins", href: "/docs/customization/plugins" },
      { title: "Extending", href: "/docs/customization/extending" },
    ],
  },
]

export function DocsSidebar({ className }: { className?: string }) {
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
    <nav className={cn("flex flex-col gap-2", className)}>
      {sidebarItems.map((section) => (
        <div key={section.title} className="pb-4">
          <button
            onClick={() => toggleSection(section.title)}
            className="flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium"
          >
            {section.title}
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
              className={cn("h-4 w-4 transition-transform", openSections.includes(section.title) ? "rotate-180" : "")}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className={cn("mt-1 pl-2 space-y-1", !openSections.includes(section.title) && "hidden")}>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-2 py-1 text-sm",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  )
}

