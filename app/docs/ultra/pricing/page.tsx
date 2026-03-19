import React from 'react'
import { PageTransition } from "@/components/page-transition"
import { CodeBlock } from "@/components/code-block"
import { PricingUltra } from "@/components/ultra-components"

export default function PricingUltraDocs() {
    return (
        <PageTransition>
            <div className="max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic mb-6">Pricing Ultra</h1>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    The Pricing Ultra component utilizes the <code>bismillah-pricing-ultra</code> and <code>bismillah-btn-neon</code> classes to create high-visibility conversion cards with spatial depth logic.
                </p>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <div className="rounded-2xl border border-cyan-500/20 overflow-hidden bg-black flex items-center justify-center min-h-[500px]">
                        <PricingUltra />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Commands</h2>
                    <CodeBlock language="bash">{`npx bismillahcss add pricing-ultra`}</CodeBlock>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Core Classes</h2>
                    <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                        <li><code>bismillah-pricing-ultra</code>: Container defining the glassmorphism card structure and hover animations.</li>
                        <li><code>price</code>: Specialized typography for high-impact price display.</li>
                        <li><code>bismillah-btn-neon</code>: High-intensity action button with glowing borders.</li>
                    </ul>
                </section>
            </div>
        </PageTransition>
    )
}
