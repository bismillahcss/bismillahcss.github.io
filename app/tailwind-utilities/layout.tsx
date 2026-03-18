import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tailwind Utilities - BismillahCSS",
    description: "Explore the comprehensive list of BismillahCSS utility classes for layout, spacing, typography, and more.",
}

export default function TailwindUtilitiesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
