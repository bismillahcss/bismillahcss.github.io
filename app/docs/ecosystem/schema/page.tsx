import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "Schema & Types - BismillahCSS",
    description: "Learn how BismillahCSS uses Zod schemas and TypeScript interfaces to ensure design system consistency.",
}

export default function SchemaPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Schema & Configuration</h1>
                <p className="mt-4 text-lg text-slate-400 font-bold uppercase tracking-widest border-l-4 border-cyan-500 pl-4">Validation Layer</p>

                <section className="mt-16 space-y-12">
                    {/* Why it Matters */}
                    <div className="p-8 border-2 border-dashed border-white/5 rounded-3xl bg-slate-900/20">
                        <h2 className="text-2xl font-bold text-white mb-4 italic">The Source of Truth</h2>
                        <p className="text-slate-500 mb-6 leading-relaxed">Design consistency is enforced at the data layer. Every configuration, theme, and component definition is validated by our strict Zod schema before it hits the UI.</p>
                        <pre className="bg-slate-950 p-6 rounded-2xl text-blue-300 text-sm overflow-x-auto border border-blue-900/10">
                            import {"{"} bConfigSchema {"}"} from 'bismillahcss/schema';{"\n"}
                            const result = bConfigSchema.safeParse(yourConfig);{"\n"}
                            if (!result.success) {"{"} /* Handle errors with full IDE context */ {"}"}
                        </pre>
                    </div>

                    <div className="space-y-4 pt-12">
                        <h2 className="text-2xl font-semibold">Core Interfaces</h2>
                        <ul className="text-slate-400 space-y-4">
                            <li className="flex gap-3 items-center group">
                                <div className="h-6 w-1 bg-cyan-500 rounded-full group-hover:h-8 transition-all"></div>
                                <span className="font-mono text-sm uppercase font-bold text-white tracking-widest">BConfig</span>
                                <p className="text-sm">Main framework configuration object interface.</p>
                            </li>
                            <li className="flex gap-3 items-center group">
                                <div className="h-6 w-1 bg-magenta-500 rounded-full group-hover:h-8 transition-all"></div>
                                <span className="font-mono text-sm uppercase font-bold text-white tracking-widest">BComponent</span>
                                <p className="text-sm">Standardized component metadata definition.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
