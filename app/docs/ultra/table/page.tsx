import React from 'react'
import { PageTransition } from "@/components/page-transition"
import { CodeBlock } from "@/components/code-block"
import { TableUltra } from "@/components/ultra-components"

export default function TableUltraDocs() {
    return (
        <PageTransition>
            <div className="max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic mb-6">Table Ultra</h1>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    The Table Ultra component integrates high-density data display with high-quality visual feedback, using <code>bismillah-table-ultra</code> for glowing headers and semi-transparent row dividers.
                </p>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <div className="rounded-2xl border border-cyan-500/20 overflow-hidden bg-black min-h-[300px] flex items-center justify-center">
                        <TableUltra />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">CLI Command</h2>
                    <CodeBlock language="bash">{`npx bismillahcss add table-ultra`}</CodeBlock>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Core Properties</h2>
                    <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                        <li><strong>Glowing Headers</strong>: Headers feature a <code>cyan-400</code> glow effect for category differentiation.</li>
                        <li><strong>Interactive Rows</strong>: Sub-atomic hover states that highlight data without obstructing readability.</li>
                        <li><strong>Backdrop-Blur</strong>: Supports full backdrop filtering if rendered over complex backgrounds.</li>
                    </ul>
                </section>
            </div>
        </PageTransition>
    )
}
