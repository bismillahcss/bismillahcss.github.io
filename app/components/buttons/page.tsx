"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Plus, Mail, Download, Settings, Heart, Trash, ArrowRight, ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GlowButton } from "@/components/glow-button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function ButtonsPage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Buttons</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A diverse collection of button styles, from standard variants to futuristic glow effects.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Standard Variants</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Button Styles"
                                description="Different button styles for various contexts"
                                code={`<button class="bismillah-btn">Default</button>
<button class="bismillah-btn bismillah-btn-destructive">Destructive</button>
<button class="bismillah-btn bismillah-btn-outline">Outline</button>
<button class="bismillah-btn bismillah-btn-secondary">Secondary</button>
<button class="bismillah-btn bismillah-btn-ghost">Ghost</button>
<button class="bismillah-btn bismillah-btn-link">Link</button>`}
                            >
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="default">Default</Button>
                                    <Button variant="destructive">Destructive</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Button Sizes"
                                description="Buttons in different sizes for various contexts"
                                code={`<button class="bismillah-btn bismillah-btn-sm">Small</button>
<button class="bismillah-btn">Default</button>
<button class="bismillah-btn bismillah-btn-lg">Large</button>`}
                            >
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button size="sm">Small</Button>
                                    <Button size="default">Default</Button>
                                    <Button size="lg">Large</Button>
                                    <Button size="icon">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">States & Feedback</h2>
                        <ComponentShowcase
                            title="Interactive States"
                            description="Buttons in different states"
                            code={`<button class="bismillah-btn" disabled>Disabled</button>
<button class="bismillah-btn bismillah-btn-loading">Loading...</button>`}
                        >
                            <div className="flex flex-wrap gap-4">
                                <Button>Default</Button>
                                <Button disabled>Disabled</Button>
                                <Button variant="outline" className="border-dashed">
                                    Dashed Border
                                </Button>
                                <Button className="bg-primary/50 hover:bg-primary/70">Muted State</Button>
                                <Button className="animate-pulse">Pulse Animation</Button>
                            </div>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Buttons with Icons</h2>
                        <ComponentShowcase
                            title="Icon Integration"
                            description="Buttons with icons for enhanced visual cues"
                            code={`<button class="bismillah-btn"><i class="icon-mail"></i> Email</button>`}
                        >
                            <div className="flex flex-wrap gap-4">
                                <Button>
                                    <Mail className="mr-2 h-4 w-4" /> Email
                                </Button>
                                <Button variant="outline">
                                    <Download className="mr-2 h-4 w-4" /> Download
                                </Button>
                                <Button variant="secondary">
                                    Settings <Settings className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="ghost">
                                    <Heart className="mr-2 h-4 w-4" /> Like
                                </Button>
                                <Button variant="destructive">
                                    <Trash className="mr-2 h-4 w-4" /> Delete
                                </Button>
                            </div>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Futuristic Effects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Glow Effects"
                                description="Buttons with interactive glow effects"
                                code={`<button class="bismillah-btn-glow">Glow Button</button>`}
                            >
                                <div className="flex flex-wrap gap-4">
                                    <GlowButton>Glow Default</GlowButton>
                                    <GlowButton variant="outline">Glow Outline</GlowButton>
                                    <GlowButton glowIntensity="strong">Strong Glow</GlowButton>
                                </div>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Hover Animations"
                                description="Advanced hover and tap animations using Framer Motion"
                                code={`<!-- Handled by BismillahCSS React adapters -->`}
                            >
                                <div className="flex flex-wrap gap-4">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button>Scale on Hover</Button>
                                    </motion.div>
                                    <motion.div whileHover={{ rotate: 5 }} whileTap={{ rotate: -5 }}>
                                        <Button variant="outline">Rotate on Hover</Button>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{
                                            boxShadow: "0 0 15px rgba(99, 102, 241, 0.8)",
                                            y: -5,
                                        }}
                                    >
                                        <Button variant="secondary">Lift on Hover</Button>
                                    </motion.div>
                                </div>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Button Groups</h2>
                        <ComponentShowcase
                            title="Layout Groups"
                            description="Groups of related buttons"
                            code={`<div class="bismillah-btn-group">
  <button>Left</button>
  <button>Middle</button>
  <button>Right</button>
</div>`}
                        >
                            <div className="space-y-4">
                                <div className="flex flex-wrap">
                                    <Button className="rounded-r-none">Left</Button>
                                    <Button className="rounded-none border-x-0">Middle</Button>
                                    <Button className="rounded-l-none">Right</Button>
                                </div>
                                <div className="flex flex-wrap">
                                    <Button variant="outline" className="rounded-r-none">
                                        <ArrowLeft className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="rounded-none border-x-0">
                                        <Home className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" className="rounded-l-none">
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </ComponentShowcase>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
