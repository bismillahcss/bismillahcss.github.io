import Link from "next/link";
import { GlowButton } from "@/components/glow-button";
import { PageTransition } from "@/components/page-transition";
import { FuturisticBackground } from "@/components/futuristic-background";

export default function NotFound() {
    return (
        <PageTransition>
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <FuturisticBackground variant="dots" intensity="medium" />
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold tracking-tighter mb-4 text-primary">404</h1>
                    <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto mb-8">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <GlowButton asChild size="lg">
                        <Link href="/">Back to Home</Link>
                    </GlowButton>
                </div>
            </div>
        </PageTransition>
    );
}
