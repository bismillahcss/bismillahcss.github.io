import React from 'react'
import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t py-10 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src="/images/bismillah-logo.png" alt="BismillahCSS Logo" className="h-8 w-auto" />
            <h3 className="text-lg font-semibold">BismillahCSS</h3>
          </div>
          <p className="text-sm text-muted-foreground">The next-gen CSS framework for modern web development.</p>
          <div className="mt-4 flex space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/bismillahcss/framework">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://twitter.com/bismillahcss">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 className="text-sm font-semibold">Documentation</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="/docs/installation" className="text-muted-foreground hover:text-primary">
                Installation
              </Link>
            </li>
            <li>
              <Link href="/docs/utility-classes" className="text-muted-foreground hover:text-primary">
                Utility Classes
              </Link>
            </li>
            <li>
              <Link href="/docs/components" className="text-muted-foreground hover:text-primary">
                Components
              </Link>
            </li>
            <li>
              <Link href="/docs/customization" className="text-muted-foreground hover:text-primary">
                Customization
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <h3 className="text-sm font-semibold">Community</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-primary">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-muted-foreground hover:text-primary">
                Discord
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-muted-foreground hover:text-primary">
                GitHub Discussions
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-muted-foreground hover:text-primary">
                Showcase
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid gap-2">
          <h3 className="text-sm font-semibold">Legal</h3>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/license" className="text-muted-foreground hover:text-primary">
                License (MIT)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 border-t pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BismillahCSS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

