import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "Component Registry - BismillahCSS",
    description: "Learn how the BismillahCSS Registry handles component discovery and versioning.",
}

export default function RegistryPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Registry & Indexing</h1>
                <p className="mt-4 text-lg text-slate-400">Centrally managed component discovery for the Bismillah ecosystem.</p>

                <section className="mt-12 space-y-12">
                    {/* Registry Definition */}
                    <div className="p-8 border-2 border-slate-800 rounded-3xl bg-slate-900/40 relative">
                        <div className="absolute top-4 right-6 text-cyan-500/50 font-mono text-xs uppercase tracking-widest">Metadata Tier</div>
                        <h2 className="text-2xl font-bold text-white mb-4">Discovery Engine</h2>
                        <p className="text-slate-500 mb-6">The registry is a global index that provides metadata about available Bismillah components, their types (atom, molecule, layout), and current versions.</p>
                        <pre className="bg-slate-950 p-6 rounded-2xl text-blue-300 text-sm overflow-x-auto border border-blue-900/10">
                            import {"{"} getRegistry {"}"} from 'bismillahcss/registry';{"\n"}
                            const myComponents = getRegistry().components;{"\n"}
                            myComponents.map(c =&gt; console.log(c.name));
                        </pre>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest border-l-2 border-cyan-500 pl-2">Atomic Pieces</h3>
                            <p className="text-slate-500 text-sm">Base primitives like glassy buttons, neon inputs, and geometric icons.</p>
                        </div>
                        <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest border-l-2 border-magenta-500 pl-2">Layout Ultra</h3>
                            <p className="text-slate-500 text-sm">Full-section layouts for dashboards, heroes, and pricing tables.</p>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
