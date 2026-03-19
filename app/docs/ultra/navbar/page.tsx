import React from 'react'
import { PageTransition } from "@/components/page-transition"
import { CodeBlock } from "@/components/code-block"
import { NavbarUltra } from "@/components/ultra-components"

export default function NavbarUltraDocs() {
    return (
        <PageTransition>
            <div className="max-w-4xl px-4 py-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent italic mb-6">Navbar Ultra</h1>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    The Navbar Ultra component provides a sophisticated, transparent header layer featuring backdrop-blur-md filters and glassmorphic borders that adapt to any page background.
                </p>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Preview</h2>
                    <div className="rounded-2xl border border-cyan-500/20 overflow-hidden bg-slate-900 min-h-[150px] flex items-center justify-center">
                        <NavbarUltra />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Implementation</h2>
                    <CodeBlock language="bash">{`npx bismillahcss add navbar-ultra`}</CodeBlock>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Spatial Logic Integration</h2>
                    <p className="text-muted-foreground mb-4 font-italic italic">
                        "The navbar isn't just a menu—it's the roof of your application's architecture."
                    </p>
                    <CodeBlock language="html">{`<nav class="b-navbar-ultra" style="position: relative; padding: 20px 0; z-index: 1000; background: rgba(15, 15, 26, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05);">
    <!-- Navigation Body -->
</nav>`}</CodeBlock>
                </section>
            </div>
        </PageTransition>
    )
}
