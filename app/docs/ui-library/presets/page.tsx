import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "Theme Presets - BismillahCSS",
    description: "Exposing the curated BismillahCSS theme presets like Deep Cyber and Solar Aurora.",
}

export default function PresetsPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2 font-display uppercase tracking-[.2em]">Presets</h1>
                <p className="text-lg text-slate-400">Curated aesthetics for futuristic web experiences.</p>

                <section className="mt-12 space-y-12">
                    {/* Preset Display */}
                    <div className="grid gap-8">
                        <div className="p-8 border border-white/5 bg-slate-900 rounded-3xl group transition-all duration-300 hover:border-cyan-500/30">
                            <h3 className="text-2xl font-bold text-white mb-2">Deep Cyber</h3>
                            <p className="text-slate-500 mb-6">Designed for immersive dark interfaces. High-contrast cyans on pitch-black background.</p>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-[#00f2ff] rounded-full shadow-[0_0_15px_#00f2ff44]"></div>
                                <div className="h-10 w-10 bg-[#7000ff] rounded-full"></div>
                                <div className="h-10 w-10 bg-[#050507] rounded-full border border-white/10"></div>
                            </div>
                        </div>

                        <div className="p-8 border border-white/5 bg-slate-900 rounded-3xl group transition-all duration-300 hover:border-yellow-500/30">
                            <h3 className="text-2xl font-bold text-white mb-2">Solar Aurora</h3>
                            <p className="text-slate-500 mb-6">Inspired by energy and vitality. Dynamic golds with neon green highlights.</p>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-[#ffbb00] rounded-full shadow-[0_0_15px_#ffbb0044]"></div>
                                <div className="h-10 w-10 bg-[#00ff88] rounded-full"></div>
                                <div className="h-10 w-10 bg-[#080808] rounded-full border border-white/10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-12 border-t border-white/5">
                        <h2 className="text-2xl font-semibold">Usage</h2>
                        <pre className="bg-slate-950 p-4 rounded-xl text-blue-400 text-sm overflow-x-auto">
                            import {"{"} applyPreset {"}"} from 'bismillahcss/preset';{"\n"}
                            const theme = applyPreset('deep_cyber');{"\n"}
              // Inject into your CSS framework context
                        </pre>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
