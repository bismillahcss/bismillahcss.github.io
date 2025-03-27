"use client"
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DocsSidebar } from "@/components/docs-sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="container flex-1">
      <div className="flex items-center py-4 text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
        <Link href="/docs" className="text-foreground font-medium">
          Documentation
        </Link>
      </div>

      <div className="md:hidden py-2">
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Menu className="h-4 w-4" />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px]">
            <div className="py-4">
              <DocsSidebar />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-col md:flex-row md:gap-10">
        <DocsSidebar className="hidden md:block shrink-0 md:w-64 xl:w-72" />
        <main className="flex-1 py-6">{children}</main>
      </div>
    </div>
  )
}

