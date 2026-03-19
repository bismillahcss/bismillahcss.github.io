import React from 'react'
import { PageTransition } from "@/components/page-transition"
import { CodeBlock } from "@/components/code-block"
import { DashboardUltra } from "@/components/ultra-components"

export default function DashboardUltraDocs() {
    return (
        <PageTransition>
            <div className="max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic mb-6">Dashboard Ultra</h1>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    The Dashboard Ultra component features an integrated sidebar-to-main structure with command-center aesthetics, designed for comprehensive data monitoring applications.
                </p>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <div className="rounded-2xl border border-cyan-500/20 overflow-hidden bg-black min-h-[500px] flex items-center justify-center">
                        <DashboardUltra />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">CLI Generation</h2>
                    <CodeBlock language="bash">{`npx bismillahcss add dashboard-ultra`}</CodeBlock>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Configuration</h2>
                    <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                        <li><strong>Sidebar</strong>: Defined by <code>b-sidebar-ultra</code> for high-volume navigational nodes.</li>
                        <li><strong>Main Area</strong>: Open-form viewport for high-density data visualizations.</li>
                        <li><strong>Theming</strong>: Automatically adopts the <code>#0f0f1a</code> deep-space background.</li>
                    </ul>
                </section>
            </div>
        </PageTransition>
    )
}
