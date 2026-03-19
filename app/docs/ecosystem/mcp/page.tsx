import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "Model Context Protocol (MCP) - BismillahCSS",
    description: "Learn how BismillahCSS integrates with AI agents via the Model Context Protocol.",
}

export default function MCPPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Bismillah MCP</h1>
                <p className="text-xl text-cyan-400 font-bold uppercase tracking-widest border-b border-cyan-800/40 pb-4">AI Interface Intelligence Layer</p>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                    BismillahCSS is the first CSS framework to support **Model Context Protocol (MCP)** natively, allowing AI coding assistants like Claude, ChatGPT, and DeepMind to understand and generate design-compliant components.
                </p>

                <section className="mt-16 space-y-12">
                    {/* Why MCP? */}
                    <div className="p-8 border-2 border-dashed border-white/5 rounded-3xl bg-slate-900/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Why MCP?</h2>
                        <ul className="text-slate-400 space-y-4">
                            <li className="flex gap-3">
                                <span className="text-cyan-400 font-bold">01.</span>
                                <span>**High-Definition Context**: AI tools get structured JSON definitions of every Bismillah primitive.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-400 font-bold">02.</span>
                                <span>**Verified Generation**: Prevent AI from hallucinating invalid class names or legacy styles.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-cyan-400 font-bold">03.</span>
                                <span>**Tool Discovery**: Directly expose framework CLI tools to your AI agent.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4 pt-12">
                        <h2 className="text-2xl font-semibold">Native Integration</h2>
                        <pre className="bg-black/80 p-6 rounded-2xl text-cyan-200 text-sm overflow-x-auto border border-cyan-900/30">
                            import {"{"} registerMCP {"}"} from 'bismillahcss/mcp';{"\n"}
                            registerMCP(); // Automatically connects to the local AI context environment
                        </pre>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
