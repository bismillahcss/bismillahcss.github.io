import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Playground - BismillahCSS",
    description: "Test BismillahCSS components and utility classes in real-time in our interactive playground.",
}

export default function PlaygroundLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
