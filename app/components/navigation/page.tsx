"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Home, User, Settings, Bell, Search, Mail, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function NavigationPage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Navigation</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive set of navigation components for building intuitive user journeys.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Breadcrumbs</h2>
                        <ComponentShowcase
                            title="Page Paths"
                            description="Informational path to current page"
                            code={`<nav class="bismillah-breadcrumb">
  <ul>
    <li>Home</li>
    <li>Docs</li>
    <li>Components</li>
  </ul>
</nav>`}
                        >
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Components</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Navigation Menus</h2>
                        <ComponentShowcase
                            title="Main Menu"
                            description="Desktop navigation menu with dropdowns"
                            code={`<nav class="bismillah-nav">...</nav>`}
                        >
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">BismillahCSS</div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                High-performance CSS framework designed for speed and accessibility.
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                                <li>
                                                    <Link href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        <div className="text-sm font-medium leading-none">Documentation</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Learn how to use utility classes and components.
                                                        </p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/components" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                        <div className="text-sm font-medium leading-none">Components</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Explore a wide range of UI elements.
                                                        </p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Navbars & Headers</h2>
                        <ComponentShowcase
                            title="App Header"
                            description="Common application header layout"
                            code={`<header class="bismillah-header">...</header>`}
                        >
                            <div className="border rounded-lg bg-card p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="font-bold text-xl">BRAND</div>
                                    <nav className="hidden md:flex space-x-4">
                                        <Link href="#" className="text-sm font-medium hover:text-primary">Home</Link>
                                        <Link href="#" className="text-sm font-medium hover:text-primary">Features</Link>
                                        <Link href="#" className="text-sm font-medium hover:text-primary">Pricing</Link>
                                    </nav>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="ghost" size="icon">
                                        <Search className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Bell className="h-4 w-4" />
                                    </Button>
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </div>
                            </div>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Pills & Tabs Nav</h2>
                        <ComponentShowcase
                            title="Pills Navigation"
                            description="Floating pills for section switching"
                            code={`<div class="bismillah-nav-pills">...</div>`}
                        >
                            <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
                                <Button variant="default" size="sm" className="rounded-md">Profile</Button>
                                <Button variant="ghost" size="sm" className="rounded-md">Account</Button>
                                <Button variant="ghost" size="sm" className="rounded-md">Settings</Button>
                            </div>
                        </ComponentShowcase>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
