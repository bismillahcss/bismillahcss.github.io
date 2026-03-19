import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "Icons Library - BismillahCSS",
    description: "Exposing the built-in BismillahCSS SVG icon library for futuristic interfaces.",
}

export default function IconsLibraryPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Bismillah Icons</h1>
                <p className="text-lg text-slate-400">Exclusive futuristic icons optimized for high-fidelity displays.</p>

                <section className="mt-12 space-y-12">
                    {/* Display Icons */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {[
                            { name: 'power', desc: 'System start' },
                            { name: 'glow', desc: 'Lighting effect' },
                            { name: 'cyber', desc: 'Code interface' },
                            { name: 'aurora', desc: 'Ambient design' },
                            { name: 'matrix', desc: 'Grid system' },
                        ].map(icon => (
                            <div key={icon.name} className="p-6 border border-white/5 bg-slate-900/40 rounded-2xl flex flex-col items-center gap-4 group hover:border-cyan-500/40 transition-all duration-300">
                                <div className="h-12 w-12 text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">
                                    {/* Placeholder icon rendering logic */}
                                    <span className="font-bold text-xl uppercase tracking-widest">{icon.name.charAt(0)}</span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-white font-mono text-sm leading-none mb-1">{icon.name}</h3>
                                    <p className="text-xs text-slate-500">{icon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 pt-12 border-t border-white/5">
                        <h2 className="text-2xl font-semibold">Library Usage</h2>
                        <pre className="bg-slate-950 p-4 rounded-xl text-blue-400 text-sm overflow-x-auto">
                            import {"{"} getIcon {"}"} from 'bismillahcss/icons';{"\n"}
                            const iconSvg = getIcon('glow');{"\n"}
                            container.innerHTML = iconSvg;
                        </pre>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
