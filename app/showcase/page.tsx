import React from 'react'
import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"

export const metadata: Metadata = {
    title: "Visual Showcase - BismillahCSS",
    description: "Experience the unique and creative components of BismillahCSS, from interactive cartoon characters to futuristic UI elements.",
    keywords: ["CSS Pikachu", "CSS Doraemon", "CSS Mickey Mouse", "CSS Spongebob", "CSS Hello Kitty", "BismillahCSS Showcase", "Futuristic UI Patterns"],
}

export default function ShowcasePage() {
    const characters = [
        { name: "Pikachu", class: "bismillah-pikachu", content: <><div className="bismillah-pikachu-ears left"><div className="bismillah-pikachu-ears-tip left"></div></div><div className="bismillah-pikachu-ears right"><div className="bismillah-pikachu-ears-tip right"></div></div><div className="bismillah-pikachu-eyes left"><div className="bismillah-pikachu-eyes-highlight left"></div></div><div className="bismillah-pikachu-eyes right"><div className="bismillah-pikachu-eyes-highlight right"></div></div><div className="bismillah-pikachu-nose"></div><div className="bismillah-pikachu-cheeks left"></div><div className="bismillah-pikachu-cheeks right"></div><div className="bismillah-pikachu-mouth"></div></> },
        { name: "Doraemon", class: "bismillah-doraemon", content: <><div className="bismillah-doraemon-face"><div className="bismillah-doraemon-eyes left"><div className="bismillah-doraemon-pupils left"></div></div><div className="bismillah-doraemon-eyes right"><div className="bismillah-doraemon-pupils right"></div></div><div className="bismillah-doraemon-nose"></div><div className="bismillah-doraemon-whiskers left1"></div><div className="bismillah-doraemon-whiskers left2"></div><div className="bismillah-doraemon-whiskers left3"></div><div className="bismillah-doraemon-whiskers right1"></div><div className="bismillah-doraemon-whiskers right2"></div><div className="bismillah-doraemon-whiskers right3"></div><div className="bismillah-doraemon-mouth"></div></div><div className="bismillah-doraemon-bell"></div></> },
        { name: "Spongebob", class: "bismillah-spongebob", content: <><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-eyes left"><div className="bismillah-spongebob-pupils left"></div></div><div className="bismillah-spongebob-eyes right"><div className="bismillah-spongebob-pupils right"></div></div><div className="bismillah-spongebob-lashes left1"></div><div className="bismillah-spongebob-lashes left2"></div><div className="bismillah-spongebob-lashes left3"></div><div className="bismillah-spongebob-lashes right1"></div><div className="bismillah-spongebob-lashes right2"></div><div className="bismillah-spongebob-lashes right3"></div><div className="bismillah-spongebob-nose"></div><div className="bismillah-spongebob-mouth"></div><div className="bismillah-spongebob-teeth left"></div><div className="bismillah-spongebob-teeth right"></div></> },
        { name: "Mickey Mouse", class: "bismillah-mickey", content: <><div className="bismillah-mickey-face"><div className="bismillah-mickey-eyes left"><div className="bismillah-mickey-pupils left"></div></div><div className="bismillah-mickey-eyes right"><div className="bismillah-mickey-pupils right"></div></div><div className="bismillah-mickey-nose"></div><div className="bismillah-mickey-mouth"></div></div></> },
        { name: "Hello Kitty", class: "bismillah-hello-kitty", content: <><div className="bismillah-hello-kitty-ears left"></div><div className="bismillah-hello-kitty-ears right"></div><div className="bismillah-hello-kitty-eyes left"></div><div className="bismillah-hello-kitty-eyes right"></div><div className="bismillah-hello-kitty-nose"></div><div className="bismillah-hello-kitty-whiskers left1"></div><div className="bismillah-hello-kitty-whiskers left2"></div><div className="bismillah-hello-kitty-whiskers left3"></div><div className="bismillah-hello-kitty-whiskers right1"></div><div className="bismillah-hello-kitty-whiskers right2"></div><div className="bismillah-hello-kitty-whiskers right3"></div><div className="bismillah-hello-kitty-bow"></div></> },
    ]

    return (
        <PageTransition>
            <div className="container mx-auto py-12 px-4 mt-20">
                <header className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        Visual <span className="text-primary">Showcase</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        BismillahCSS isn't just about utility classes. It's about creative expression.
                        Experience our pure-CSS components that push the boundaries of what's possible with modern CSS.
                    </p>
                </header>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Pure CSS Characters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {characters.map((char, index) => (
                            <AnimatedCard key={char.name} index={index}>
                                <div className="p-8 flex flex-col items-center justify-center bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all">
                                    <div className={`mb-6 scale-75 md:scale-100 ${char.class} bismillah-cartoon-blink bismillah-cartoon-bounce`}>
                                        {char.content}
                                    </div>
                                    <h3 className="text-2xl font-bold">{char.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-2 mb-4">Pure CSS Animation</p>
                                    <code className="px-3 py-1 bg-muted rounded-md text-sm">
                                        class="{char.class}"
                                    </code>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Interactive Primitives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-card border border-border/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                            <div className="bismillah-text-gradient bismillah-text-5xl bismillah-font-extrabold mb-4">
                                GLASSMORPHISM
                            </div>
                            <p className="text-muted-foreground">Using .bismillah-glass utility</p>
                            <div className="bismillah-glass p-8 mt-6 w-full max-w-sm">
                                <p className="font-medium">Frosted glass effect with backdrop blur and subtle border.</p>
                            </div>
                        </div>

                        <div className="bg-card border border-border/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                            <div className="bismillah-text-gradient bismillah-text-5xl bismillah-font-extrabold mb-4">
                                NEON GLOW
                            </div>
                            <p className="text-muted-foreground">Using .bismillah-bg-neon utilities</p>
                            <div className="flex gap-4 mt-8 flex-wrap justify-center">
                                <div className="bismillah-bg-neon-blue w-12 h-12 bismillah-rounded-full"></div>
                                <div className="bismillah-bg-neon-green w-12 h-12 bismillah-rounded-full"></div>
                                <div className="bismillah-bg-neon-red w-12 h-12 bismillah-rounded-full"></div>
                                <div className="bismillah-bg-neon-pink w-12 h-12 bismillah-rounded-full"></div>
                                <div className="bismillah-bg-neon-yellow w-12 h-12 bismillah-rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-6">Future-Proof Architecture</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Built with intent-driven semantics, BismillahCSS allows you to express your design vision
                        clearly while maintaining absolute control over the final output.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                            <h3 className="font-bold text-lg mb-2">High Efficiency</h3>
                            <p className="text-sm text-muted-foreground">Optimized for speed and minimal bundle size by leveraging raw CSS performance.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                            <h3 className="font-bold text-lg mb-2">Zero JS Dependency</h3>
                            <p className="text-sm text-muted-foreground">Most complex animations and interactions work without a single line of JavaScript.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                            <h3 className="font-bold text-lg mb-2">SEO Optimized</h3>
                            <p className="text-sm text-muted-foreground">Semantic class names and structured patterns that search engines love to index.</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
