import type { Metadata } from "next"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
    title: "Motion Primitives - BismillahCSS",
    description: "Learn how to use BismillahCSS motion primitives like magnetic effects, spotlights, and ambient glares.",
}

export default function PrimitivesPage() {
    return (
        <PageTransition>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tight">Motion Primitives</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    BismillahCSS primitives provide high-level APIs for common futuristic UI behaviors.
                </p>

                <section className="mt-12 space-y-12">
                    {/* Spotlight Effect */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">Spotlight (bSpotlight)</h2>
                        <p className="text-muted-foreground">Follows the mouse position to create a circular glow on an element.</p>
                        <div className="p-8 border border-white/10 rounded-2xl bg-slate-900/50 relative overflow-hidden group">
                            <div className="h-40 w-full flex items-center justify-center border-2 border-dashed border-cyan-500/20 rounded-xl">
                                <span className="text-cyan-400 font-bold tracking-widest">SPOTLIGHT AREA</span>
                            </div>
                        </div>
                        <pre className="bg-slate-950 p-4 rounded-xl text-blue-400 text-sm overflow-x-auto">
                            import {"{"} bSpotlight {"}"} from 'bismillahcss';{"\n"}
                            const el = document.querySelector('.b-spotlight');{"\n"}
                            bSpotlight(el);
                        </pre>
                    </div>

                    {/* Magnetic Effect */}
                    <div className="space-y-4 pt-8 border-t border-white/5">
                        <h2 className="text-2xl font-semibold">Magnetic (bMagnetic)</h2>
                        <p className="text-muted-foreground">Attracts the element toward the cursor, creating satisfying spatial feedback.</p>
                        <pre className="bg-slate-950 p-4 rounded-xl text-blue-400 text-sm overflow-x-auto">
                            import {"{"} bMagnetic {"}"} from 'bismillahcss';{"\n"}
                            bMagnetic(buttonEl, 0.5); // 1.0 is max strength
                        </pre>
                    </div>

                    {/* Glare Effect */}
                    <div className="space-y-4 pt-8 border-t border-white/5">
                        <h2 className="text-2xl font-semibold">Ambient Glare (bGlare)</h2>
                        <p className="text-muted-foreground">Simulates a light source reflecting off a surface as the mouse moves.</p>
                        <pre className="bg-slate-950 p-4 rounded-xl text-blue-400 text-sm overflow-x-auto">
                            import {"{"} bGlare {"}"} from 'bismillahcss';{"\n"}
                            bGlare(cardEl);
                        </pre>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
