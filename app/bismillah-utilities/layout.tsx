import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "BismillahCSS Utilities",
    description: "Explore the comprehensive list of BismillahCSS utility classes for layout, spacing, typography, and more.",
}

export default function BismillahUtilitiesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
