"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"

const showcases = [
    {
        title: "Portfolio Template",
        creator: "Ahmed Khan",
        description: "A clean, minimalist portfolio template built with BismillahCSS.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "portfolio-template",
        category: "Template",
    },
    {
        title: "E-Commerce Dashboard",
        creator: "Sara Ahmed",
        description: "A comprehensive dashboard for e-commerce websites with analytics and management features.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "ecommerce-dashboard",
        category: "Dashboard",
    },
    {
        title: "Blog Platform",
        creator: "Mohammad Ali",
        description: "A modern blog platform with a focus on readability and user experience.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "blog-platform",
        category: "Web App",
    },
    {
        title: "SaaS Landing Page",
        creator: "Fatima Zahra",
        description: "High-converting landing page for subscription-based services.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "saas-landing",
        category: "Landing Page",
    },
    {
        title: "Real Estate Portal",
        creator: "Zaid Omar",
        description: "Complex property listing and search application.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "real-estate",
        category: "Web App",
    },
    {
        title: "Recipe App",
        creator: "Layla Hassan",
        description: "Instructional food application with intuitive UI.",
        image: "/placeholder.svg?height=200&width=400",
        slug: "recipe-app",
        category: "Mobile Web",
    },
]

export default function ShowcasePage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10 text-center">
                    <Link href="/community" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Community
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Community Showcase</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Explore a collection of amazing projects built by our global community using BismillahCSS.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Button asChild>
                            <Link href="/community/submit-project">Submit Your Own Project</Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
                    {showcases.map((showcase) => (
                        <Card key={showcase.slug} className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                            <div className="aspect-video w-full overflow-hidden bg-muted">
                                <img
                                    src={showcase.image || "/placeholder.svg"}
                                    alt={showcase.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline">{showcase.category}</Badge>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardTitle className="line-clamp-1">{showcase.title}</CardTitle>
                                <CardDescription className="flex items-center gap-2">
                                    <User className="h-3 w-3" /> by {showcase.creator}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {showcase.description}
                                </p>
                            </CardContent>
                            <CardFooter className="pt-0">
                                <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                                    <Link href={`https://github.com/bismillahcss/showcase/tree/main/${showcase.slug}`}>
                                        View Details
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </PageTransition>
    )
}
