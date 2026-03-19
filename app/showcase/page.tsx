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
        { name: "Pikachu", class: "bismillah-pikachu", content: <><div className="bismillah-pikachu-ears left"><div className="bismillah-pikachu-ears-tip left"></div></div><div className="bismillah-pikachu-ears right"><div className="bismillah-pikachu-ears-tip right"></div></div><div className="bismillah-pikachu-eyes left"><div className="bismillah-pikachu-eyes-highlight left"></div></div><div className="bismillah-pikachu-eyes right"><div className="bismillah-pikachu-eyes-highlight right"></div></div><div className="bismillah-pikachu-nose"></div><div className="bismillah-pikachu-cheeks left"></div><div className="bismillah-pikachu-cheeks right"></div><div className="bismillah-pikachu-mouth"></div><div className="bismillah-pikachu-tail"></div></> },
        { name: "Doraemon", class: "bismillah-doraemon", content: <><div className="bismillah-doraemon-face"><div className="bismillah-doraemon-eyes left"><div className="bismillah-doraemon-pupils left"></div></div><div className="bismillah-doraemon-eyes right"><div className="bismillah-doraemon-pupils right"></div></div><div className="bismillah-doraemon-nose"></div><div className="bismillah-doraemon-whiskers left1"></div><div className="bismillah-doraemon-whiskers left2"></div><div className="bismillah-doraemon-whiskers left3"></div><div className="bismillah-doraemon-whiskers right1"></div><div className="bismillah-doraemon-whiskers right2"></div><div className="bismillah-doraemon-whiskers right3"></div><div className="bismillah-doraemon-mouth"></div></div><div className="bismillah-doraemon-bell"></div></> },
        { name: "Spongebob", class: "bismillah-spongebob", content: <><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-holes"></div><div className="bismillah-spongebob-eyes left"><div className="bismillah-spongebob-pupils left"></div></div><div className="bismillah-spongebob-eyes right"><div className="bismillah-spongebob-pupils right"></div></div><div className="bismillah-spongebob-lashes left1"></div><div className="bismillah-spongebob-lashes left2"></div><div className="bismillah-spongebob-lashes left3"></div><div className="bismillah-spongebob-lashes right1"></div><div className="bismillah-spongebob-lashes right2"></div><div className="bismillah-spongebob-lashes right3"></div><div className="bismillah-spongebob-nose"></div><div className="bismillah-spongebob-mouth"></div><div className="bismillah-spongebob-teeth left"></div><div className="bismillah-spongebob-teeth right"></div></> },
        { name: "Mickey Mouse", class: "bismillah-mickey", content: <><div className="bismillah-mickey-face"><div className="bismillah-mickey-eyes left"><div className="bismillah-mickey-pupils left"></div></div><div className="bismillah-mickey-eyes right"><div className="bismillah-mickey-pupils right"></div></div><div className="bismillah-mickey-nose"></div><div className="bismillah-mickey-mouth"></div></div></> },
        { name: "Hello Kitty", class: "bismillah-hello-kitty", content: <><div className="bismillah-hello-kitty-ears left"></div><div className="bismillah-hello-kitty-ears right"></div><div className="bismillah-hello-kitty-eyes left"></div><div className="bismillah-hello-kitty-eyes right"></div><div className="bismillah-hello-kitty-nose"></div><div className="bismillah-hello-kitty-whiskers left1"></div><div className="bismillah-hello-kitty-whiskers left2"></div><div className="bismillah-hello-kitty-whiskers left3"></div><div className="bismillah-hello-kitty-whiskers right1"></div><div className="bismillah-hello-kitty-whiskers right2"></div><div className="bismillah-hello-kitty-whiskers right3"></div><div className="bismillah-hello-kitty-bow"></div></> },
    ]

    return (
        <PageTransition>
            <div className="container mx-auto py-12 px-4 mt-20 bismillah-showcase">
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
                                    <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-slate-950/20 rounded-xl mb-6 border border-white/5">
                                        <div className={`b-cartoon-scalable ${char.class} bismillah-cartoon-blink bismillah-cartoon-bounce`}>
                                            {char.content}
                                        </div>
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
                    <h2 className="text-3xl font-bold mb-10">Spatial Intelligence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group relative p-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                            <div className="relative z-10 text-white font-bold text-xl mb-4">Magnetic Feedback</div>
                            <p className="relative z-10 text-slate-500 text-sm">Elements that literally pull toward your focus point using bMagnetic.</p>
                            <div className="mt-8 flex justify-center">
                                <button className="b-btn-futu px-8 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-cyan-500/20 cursor-pointer">MAGNETIC HUB</button>
                            </div>
                        </div>
                        <div className="group relative p-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500">
                            <div className="relative z-10 text-white font-bold text-xl mb-4">Ambient Spotlight</div>
                            <p className="relative z-10 text-slate-500 text-sm">Dynamic circular illumination following your intent intent on the grid.</p>
                            <div className="mt-8 h-32 w-full border border-dashed border-purple-500/20 rounded-2xl flex items-center justify-center">
                                <div className="h-16 w-16 rounded-full bg-purple-500/20 blur-xl group-hover:bg-purple-500/40 transition-all"></div>
                            </div>
                        </div>
                        <div className="group relative p-8 bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-magenta-500/30 transition-all duration-500">
                            <div className="relative z-10 text-white font-bold text-xl mb-4">Text Reveal Engine</div>
                            <p className="relative z-10 text-slate-500 text-sm">Progressive opacity shifts triggered by viewport intersection.</p>
                            <div className="mt-8">
                                <div className="text-4xl font-extrabold opacity-20 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-r from-magenta-500 to-amber-500 bg-clip-text text-transparent">REVEAL CORE</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Ultra Component Tiers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-1 border border-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl">
                            <div className="bg-slate-950 p-8 rounded-[1.4rem] h-full">
                                <div className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">ELITE TIER</div>
                                <h3 className="text-white text-2xl font-black mb-4 tracking-tighter">PRISM INTERFACE</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Crystalline geometric design patterns with high-fidelity glass refraction and isometric depth.</p>
                                <div className="h-40 w-full bg-gradient-to-br from-cyan-900/40 to-slate-950 rounded-2xl border border-white/5 flex items-center justify-center">
                                    <div className="h-20 w-20 border-2 border-cyan-400 rotate-45 shadow-[0_0_30px_#00f2ff22]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 border border-gradient-to-br from-amber-500 to-magenta-500 rounded-3xl">
                            <div className="bg-slate-950 p-8 rounded-[1.4rem] h-full">
                                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">ROYAL TIER</div>
                                <h3 className="text-white text-2xl font-black mb-4 tracking-tighter">SILK MAJESTY</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Liquid-smooth gradients and organic transitions designed for ultra-premium luxury experiences.</p>
                                <div className="h-40 w-full bg-gradient-to-br from-amber-900/40 to-slate-950 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                                    <div className="h-60 w-60 bg-amber-500/10 blur-[60px] animate-pulse"></div>
                                    <div className="text-3xl font-display text-white italic tracking-widest">IMPERIAL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-10">Design Archetypes</h2>
                    <p className="text-lg text-slate-400 mb-8 font-display">BismillahCSS supports multiple futuristic and classic design languages with zero configuration.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Neumorphism */}
                        <div className="p-10 b-neumorphic flex flex-col items-center justify-center text-slate-600">
                            <div className="font-black text-xl mb-2">NEUMORPHIC</div>
                            <button className="px-6 py-2 b-neumorphic-inset text-sm font-bold">PRESSED</button>
                        </div>
                        {/* 2. Brutalism */}
                        <div className="b-brutalist flex flex-col items-center justify-center">
                            <div className="text-2xl mb-4">BRUTALIST CORE</div>
                            <p className="text-xs uppercase font-black">Raw & Unfiltered</p>
                        </div>
                        {/* 3. Claymorphism */}
                        <div className="b-clay flex flex-col items-center justify-center">
                            <div className="text-xl font-bold mb-2">CLAY STYLE</div>
                            <div className="h-12 w-12 rounded-full border-4 border-white/20 shadow-inner bg-white/10"></div>
                        </div>
                        {/* 4. Cyber Neon */}
                        <div className="p-10 b-cyber-neon border-2 border-cyan-400 bg-black flex flex-col items-center justify-center">
                            <div className="text-xl font-mono tracking-tighter shadow-cyan-400">CYBER_LINK_ACTV</div>
                        </div>
                        {/* 5. Skeuomorphism */}
                        <div className="p-10 b-skeuo flex flex-col items-center justify-center text-slate-800">
                            <div className="text-lg font-bold">ANALOG DIAL</div>
                            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border border-slate-500 shadow-xl mt-4"></div>
                        </div>
                        {/* 6. Aurora */}
                        <div className="p-10 b-aurora rounded-3xl flex flex-col items-center justify-center overflow-hidden">
                            <div className="text-2xl font-black italic">AURORA FLOW</div>
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
