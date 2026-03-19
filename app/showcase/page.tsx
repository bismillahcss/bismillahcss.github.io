import React from 'react'
import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"
import { BismillahIsolated } from "@/components/bismillah-isolated"

export const metadata: Metadata = {
    title: "Visual Showcase - BismillahCSS",
    description: "Experience the unique and creative components of BismillahCSS, from interactive cartoon characters to futuristic UI elements.",
    keywords: ["CSS Pikachu", "CSS Doraemon", "CSS Mickey Mouse", "CSS Spongebob", "CSS Hello Kitty", "BismillahCSS Showcase", "Futuristic UI Patterns"],
}

export default function ShowcasePage() {
    const characters = [
        { name: "Pikachu", class: "bismillah-pikachu", content: <><div className="bismillah-pikachu-ears left"><div className="bismillah-pikachu-ears-tip left"></div></div><div className="bismillah-pikachu-ears right"><div className="bismillah-pikachu-ears-tip right"></div></div><div className="bismillah-pikachu-eyes left"><div className="bismillah-pikachu-eyes-highlight left"></div></div><div className="bismillah-pikachu-eyes right"><div className="bismillah-pikachu-eyes-highlight right"></div></div><div className="bismillah-pikachu-nose"></div><div className="bismillah-pikachu-cheeks left"></div><div className="bismillah-pikachu-cheeks right"></div><div className="bismillah-pikachu-mouth"></div><div className="bismillah-pikachu-tail"></div></> },
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
                                <div className="p-8 flex flex-col items-center justify-center bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all w-full">
                                    <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-slate-950/20 rounded-xl mb-6 border border-white/5">
                                        <BismillahIsolated className="h-full">
                                            <div className={`b-cartoon-scalable ${char.class} b-cartoon-blink b-cartoon-bounce`}>
                                                {char.content}
                                            </div>
                                        </BismillahIsolated>
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
                    <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Interactive Primitives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-card border border-border/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                            <div className="text-5xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
                                GLASSMORPHISM
                            </div>
                            <p className="text-muted-foreground mb-6">Using .bismillah-glass utility</p>
                            <BismillahIsolated style={{ height: '160px' }}>
                                <div className="bismillah-flex bismillah-items-center bismillah-justify-center bismillah-h-100 bismillah-w-100">
                                    <div className="bismillah-glass bismillah-p-8 bismillah-w-100">
                                        <p className="bismillah-font-medium bismillah-text-center">Frosted glass effect with backdrop blur and subtle border.</p>
                                    </div>
                                </div>
                            </BismillahIsolated>
                        </div>

                        <div className="bg-card border border-border/50 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                            <div className="text-5xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">
                                NEON GLOW
                            </div>
                            <p className="text-muted-foreground mb-6">Using .bismillah-bg-neon utilities</p>
                            <BismillahIsolated style={{ height: '100px' }}>
                                <div className="bismillah-flex bismillah-gap-4 bismillah-flex-wrap bismillah-justify-center bismillah-w-100">
                                    <div className="bismillah-bg-neon-blue bismillah-w-12 bismillah-h-12 bismillah-rounded-full"></div>
                                    <div className="bismillah-bg-neon-green bismillah-w-12 bismillah-h-12 bismillah-rounded-full"></div>
                                    <div className="bismillah-bg-neon-red bismillah-w-12 bismillah-h-12 bismillah-rounded-full"></div>
                                    <div className="bismillah-bg-neon-pink bismillah-w-12 bismillah-h-12 bismillah-rounded-full"></div>
                                    <div className="bismillah-bg-neon-yellow bismillah-w-12 bismillah-h-12 bismillah-rounded-full"></div>
                                </div>
                            </BismillahIsolated>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Spatial Intelligence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group relative p-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                            <div className="relative z-10 text-white font-bold text-xl mb-4">Magnetic Feedback</div>
                            <p className="relative z-10 text-slate-500 text-sm">Elements that literally pull toward your focus point using bMagnetic.</p>
                            <div className="mt-8 flex justify-center">
                                <button className="px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-cyan-500/20 cursor-pointer transition-all">MAGNETIC HUB</button>
                            </div>
                        </div>
                        <div className="group relative p-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500">
                            <div className="relative z-10 text-white font-bold text-xl mb-4">Ambient Spotlight</div>
                            <p className="relative z-10 text-slate-500 text-sm">Dynamic circular illumination following your intent intent on the grid.</p>
                            <div className="mt-8 h-32 w-full border border-dashed border-purple-500/20 rounded-2xl flex items-center justify-center">
                                <div className="h-16 w-16 rounded-full bg-purple-500/20 blur-xl group-hover:bg-purple-500/40 transition-all"></div>
                            </div>
                        </div>
                        <div className="group relative p-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-pink-500/30 transition-all duration-500">
                            <div className="relative z-10 text-white font-bold text-xl mb-4">Text Reveal Engine</div>
                            <p className="relative z-10 text-slate-500 text-sm">Progressive opacity shifts triggered by viewport intersection.</p>
                            <div className="mt-8">
                                <div className="text-4xl font-extrabold opacity-20 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent uppercase tracking-tight">REVEAL CORE</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Ultra Component Tiers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-1 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl group">
                            <div className="bg-slate-950 p-8 rounded-[1.4rem] h-full transition-colors group-hover:bg-slate-900/80">
                                <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">ELITE TIER</div>
                                <h3 className="text-white text-2xl font-black mb-4 tracking-tighter">PRISM INTERFACE</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Crystalline geometric design patterns with high-fidelity glass refraction and isometric depth.</p>
                                <div className="h-40 w-full bg-gradient-to-br from-cyan-900/20 to-slate-950 rounded-2xl border border-white/5 flex items-center justify-center">
                                    <div className="h-20 w-20 border-2 border-cyan-400 rotate-45 shadow-[0_0_30px_#00f2ff33] animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl group">
                            <div className="bg-slate-950 p-8 rounded-[1.4rem] h-full transition-colors group-hover:bg-slate-900/80">
                                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">ROYAL TIER</div>
                                <h3 className="text-white text-2xl font-black mb-4 tracking-tighter">SILK MAJESTY</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Liquid-smooth gradients and organic transitions designed for ultra-premium luxury experiences.</p>
                                <div className="h-40 w-full bg-gradient-to-br from-amber-900/20 to-slate-950 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                                    <div className="h-60 w-60 bg-amber-500/5 blur-[60px] animate-pulse"></div>
                                    <div className="text-3xl font-display text-white italic tracking-widest">IMPERIAL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Design Archetypes</h2>
                    <p className="text-lg text-slate-400 mb-8 font-light">BismillahCSS supports multiple futuristic and classic design languages with zero configuration.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="h-48 rounded-2xl border border-white/5 bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
                            <BismillahIsolated>
                                <div className="bismillah-flex bismillah-flex-col bismillah-items-center bismillah-justify-center bismillah-h-100 bismillah-bg-slate-100 bismillah-p-8 bismillah-rounded-xl bismillah-neumorphism">
                                    <div className="bismillah-font-black bismillah-text-xl bismillah-mb-2 bismillah-text-slate-600">NEUMORPHIC</div>
                                    <button className="bismillah-px-6 bismillah-py-2 bismillah-neumorphism bismillah-text-sm bismillah-font-bold bismillah-text-slate-500">PRESSED</button>
                                </div>
                            </BismillahIsolated>
                        </div>
                        <div className="h-48 rounded-2xl border border-white/5 bg-slate-900 flex flex-col items-center justify-center overflow-hidden group">
                            <BismillahIsolated>
                                <div className="bismillah-p-10 bismillah-brutalist bismillah-flex bismillah-flex-col bismillah-items-center bismillah-justify-center bismillah-h-100">
                                    <div className="bismillah-text-2xl bismillah-mb-4 bismillah-font-bold">BRUTALIST CORE</div>
                                    <p className="bismillah-text-xs bismillah-uppercase bismillah-font-black">Raw & Unfiltered</p>
                                </div>
                            </BismillahIsolated>
                        </div>
                        <div className="h-48 rounded-2xl border border-white/5 bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
                            <BismillahIsolated>
                                <div className="bismillah-p-10 bismillah-clay bismillah-flex bismillah-flex-col bismillah-items-center bismillah-justify-center bismillah-h-100">
                                    <div className="bismillah-text-xl bismillah-font-bold bismillah-mb-2">CLAY STYLE</div>
                                    <div className="bismillah-h-12 bismillah-w-12 bismillah-rounded-full bismillah-border-4 bismillah-border-white bismillah-shadow-inner bismillah-bg-blue-400"></div>
                                </div>
                            </BismillahIsolated>
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
                            <h3 className="font-bold text-lg mb-2">Spatial Logic</h3>
                            <p className="text-sm text-muted-foreground">Interfaces that understand the environment natively through built-in motion primitives.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                            <h3 className="font-bold text-lg mb-2">AI Native (MCP)</h3>
                            <p className="text-sm text-muted-foreground">Natively documented for AI agents via Model Context Protocol, ensuring design-compliant code generation.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
                            <h3 className="font-bold text-lg mb-2">Production Ready</h3>
                            <p className="text-sm text-muted-foreground">Validated by strict Zod schemas and distributed with full TypeScript definitions.</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
