import type { Metadata } from "next"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "UI Library - BismillahCSS",
    description: "Learn how to use BismillahCSS as a full UI library with interactive primitives and ready-made components.",
}

export default function UILibraryPage() {
    return (
        <PageTransition>
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tight">Bismillah UI Library</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    BismillahCSS is more than just utility classes. It's a complete design intelligence ecosystem with interactive primitives and motion-driven logic.
                </p>

                <section className="mt-12 space-y-6">
                    <h2 className="text-2xl font-semibold">Core Library Concepts</h2>
                    <p className="text-muted-foreground">
                        Our UI library is built on the principle of **Spatial Intelligence**. Elements aren't just static; they respond to user intent, mouse movement, and scroll depth natively.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 mt-8">
                        <AnimatedCard index={0}>
                            <h3 className="text-xl font-bold mb-2">Motion Primitives</h3>
                            <p className="text-sm text-muted-foreground">Low-level logic for magnetic effects, spotlights, and ambient glares.</p>
                        </AnimatedCard>
                        <AnimatedCard index={1}>
                            <h3 className="text-xl font-bold mb-2">Theme Presets</h3>
                            <p className="text-sm text-muted-foreground">Curated futuristic palettes like Deep Cyber and Solar Aurora.</p>
                        </AnimatedCard>
                        <AnimatedCard index={2}>
                            <h3 className="text-xl font-bold mb-2">Registry</h3>
                            <p className="text-sm text-muted-foreground">A centralized system for component discovery and dynamic loading.</p>
                        </AnimatedCard>
                        <AnimatedCard index={3}>
                            <h3 className="text-xl font-bold mb-2">Icons</h3>
                            <p className="text-sm text-muted-foreground">A built-in SVG library optimized for high-fidelity displays.</p>
                        </AnimatedCard>
                    </div>
                </section>

                <section className="mt-16 border-t pt-8">
                    <h2 className="text-2xl font-semibold">Native Library Import</h2>
                    <div className="bg-slate-950/50 p-6 rounded-xl mt-4 font-mono text-sm border border-slate-800">
                        <p className="text-cyan-400">// Install bismillahcss</p>
                        <p className="text-white">npm install bismillahcss</p>
                        <p className="mt-4 text-cyan-400">// Import library logic</p>
                        <p className="text-white">import {"{"} bLibrary {"}"} from 'bismillahcss';</p>
                        <p className="mt-2 text-cyan-400">// Initialize on mount</p>
                        <p className="text-white">bLibrary.init();</p>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
