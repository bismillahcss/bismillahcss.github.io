import React from 'react'
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FuturisticBackground } from "@/components/futuristic-background"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BismillahCSS - The Next-Gen CSS Framework",
  description: "Fast, lightweight, utility-first CSS framework for modern web development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="relative flex-1">
              <FuturisticBackground variant="grid" />
              {children}
            </div>
            <SiteFooter />
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'