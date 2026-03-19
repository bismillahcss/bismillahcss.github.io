import React from 'react'
import { PageTransition } from "@/components/page-transition"
import { CodeBlock } from "@/components/code-block"
import { HeroUltra } from "@/components/ultra-components"

export default function HeroUltraDocs() {
    return (
        <PageTransition>
            <div className="max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic mb-6">Hero Ultra</h1>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    The Hero Ultra component creates an immersive entryway for your application, using radial gradients, magnetic typography, and backdrop-blur primitives to define a premium design layer.
                </p>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <div className="rounded-2xl border border-cyan-500/20 overflow-hidden bg-black aspect-video flex items-center justify-center">
                        <HeroUltra />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Deployment</h2>
                    <p className="text-muted-foreground mb-4">Generate this component directly in your project using the BismillahCSS CLI:</p>
                    <CodeBlock language="bash">{`npx bismillahcss add hero-ultra`}</CodeBlock>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">HTML Architecture</h2>
                    <CodeBlock language="html">{`<section class="b-hero-ultra" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at center, #1a1a2e 0%, #0f0f1a 100%); color: white; position: relative; overflow: hidden;">
    <div class="b-container" style="text-align: center; z-index: 10;">
        <h1 style="font-size: 5rem; letter-spacing: -2px; margin-bottom: 20px; font-weight: 800; background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Beyond The Future</h1>
        <p style="font-size: 1.25rem; opacity: 0.8; max-width: 600px; margin: 0 auto 40px;">Experience the world's most advanced design intelligence layer. Fast, accessible, and breathtakingly beautiful.</p>
        <button class="b-btn b-magnetic" style="padding: 15px 40px; border-radius: 50px; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; cursor: pointer; backdrop-filter: blur(10px); transition: all 0.3s ease;">Get Started</button>
    </div>
</section>`}</CodeBlock>
                </section>
            </div>
        </PageTransition>
    )
}
