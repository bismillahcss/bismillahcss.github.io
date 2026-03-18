"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Home, CreditCard, Layout, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function CardsPage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Cards</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A diverse collection of card styles, from modern flat designs to stunning glassmorphism effects.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Standard Layouts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ComponentShowcase
                                title="Simple Card"
                                description="Basic card with structure"
                                code={`<div class="bismillah-card">
  <div class="bismillah-card-header">Simple Card</div>
  <div class="bismillah-card-body">A basic card with structure.</div>
</div>`}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Simple Card</CardTitle>
                                        <CardDescription>A basic card with structure</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>This is a simple card with some content. Cards are useful for organizing information.</p>
                                    </CardContent>
                                </Card>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Card with Footer"
                                description="Card with actions in footer"
                                code={`<div class="bismillah-card-footer">
  <button>Cancel</button>
  <button>Save</button>
</div>`}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Card with Footer</CardTitle>
                                        <CardDescription>A card with actions in the footer</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>This card includes a footer with action buttons.</p>
                                    </CardContent>
                                    <CardFooter className="flex justify-between">
                                        <Button variant="outline">Cancel</Button>
                                        <Button>Save</Button>
                                    </CardFooter>
                                </Card>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Card with Image"
                                description="Card with an image header"
                                code={`<div class="bismillah-card-img-top">
  <img src="/placeholder.svg" />
</div>`}
                            >
                                <Card className="overflow-hidden">
                                    <img
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Placeholder"
                                        className="w-full h-40 object-cover"
                                    />
                                    <CardHeader>
                                        <CardTitle>Card with Image</CardTitle>
                                        <CardDescription>A card with an image header</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>This card includes an image at the top.</p>
                                    </CardContent>
                                </Card>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Interactive Effects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Hover Animations"
                                description="Cards that respond to user interaction"
                                code={`<!-- Handled by BismillahCSS React adapters -->`}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Card className="cursor-pointer">
                                            <CardHeader>
                                                <CardTitle>Hover Scale</CardTitle>
                                                <CardDescription>Scales on hover</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Hover over this card to see it scale up slightly.</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{
                                            y: -10,
                                            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        <Card className="cursor-pointer">
                                            <CardHeader>
                                                <CardTitle>Lift Card</CardTitle>
                                                <CardDescription>Lifts on hover</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p>Hover over this card to see it lift up with a shadow.</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Glassmorphism"
                                description="Cards with translucent glass effects"
                                code={`<div class="bismillah-card-glass">Glass Card</div>`}
                            >
                                <Card className="bg-white/20 backdrop-blur-md border border-white/30">
                                    <CardHeader>
                                        <CardTitle>Glass Card</CardTitle>
                                        <CardDescription>A card with glassmorphism effect</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>This card has a glassmorphism effect with backdrop blur.</p>
                                    </CardContent>
                                </Card>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Advanced Styles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Gradient Background"
                                description="Cards with beautiful gradient fills"
                                code={`<div class="bismillah-card-gradient">Gradient Card</div>`}
                            >
                                <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                    <CardHeader>
                                        <CardTitle>Gradient Card</CardTitle>
                                        <CardDescription className="text-white/80">Gradient background card</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p>This card has a beautiful gradient background.</p>
                                    </CardContent>
                                </Card>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Interactive Flip Card"
                                description="Two sides of data in one card"
                                code={`<div class="bismillah-flip-card">...</div>`}
                            >
                                <div className="relative h-[200px] perspective-[1000px] group w-full">
                                    <div className="absolute inset-0 transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white backface-hidden flex flex-col justify-center items-center">
                                            <h3 className="text-lg font-semibold mb-2">Flip Card Front</h3>
                                            <p>Hover to see the back side</p>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-6 text-white backface-hidden rotate-y-180 flex flex-col justify-center items-center">
                                            <h3 className="text-lg font-semibold mb-2">Flip Card Back</h3>
                                            <p>This is the back side of the card</p>
                                        </div>
                                    </div>
                                </div>
                            </ComponentShowcase>
                        </div>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
