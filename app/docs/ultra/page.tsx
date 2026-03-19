import React from 'react'
import Link from "next/link"
import { ArrowRight, Zap, Shield, Layout, Layers, Monitor, CreditCard, Table as TableIcon } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"

export default function UltraComponentsPage() {
    const ultraComponents = [
        {
            title: "Hero Ultra",
            description: "Premium immersive hero sections with magnetic interactions.",
            icon: <Monitor className="h-6 w-6" />,
            href: "/docs/ultra/hero",
        },
        {
            title: "Navbar Ultra",
            description: "Glassy futuristic navigation with backdrop blur and glow.",
            icon: <Layout className="h-6 w-6" />,
            href: "/docs/ultra/navbar",
        },
        {
            title: "Pricing Ultra",
            description: "Neon-accented conversion tiers with spatial logic.",
            icon: <CreditCard className="h-6 w-6" />,
            href: "/docs/ultra/pricing",
        },
        {
            title: "Dashboard Ultra",
            description: "Full application layouts with command center aesthetics.",
            icon: <Layers className="h-6 w-6" />,
            href: "/docs/ultra/dashboard",
        },
        {
            title: "Table Ultra",
            description: "Polished data grids with interactive hover and glowing headers.",
            icon: <TableIcon className="h-6 w-6" />,
            href: "/docs/ultra/table",
        },
    ]

    return (
        <PageTransition>
            <div className="max-w-4xl px-4 py-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic">
                        Ultra Components
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxe max-w-2xl">
                        High-performance, spatial UI primitives designed for the next generation of web experiences.
                    </p>
                </div>

                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-10">
                    {ultraComponents.map((item, index) => (
                        <Link key={item.title} href={item.href} className="block group">
                            <AnimatedCard index={index} className="h-full border-cyan-500/20 bg-background/50 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300">
                                <div className="flex flex-col h-full">
                                    <div className="p-3 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                                        Explore Component <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </AnimatedCard>
                        </Link>
                    ))}
                </section>

                <section className="mt-20 p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400">
                            <Zap className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">The "Ultra" Standard</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Ultra components aren't just styles—they are intent-driven primitives. Every element is optimized for spatial perception, using glassmorphism, depth-based shadows, and neon light logic to guide user attention through complex interfaces.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
