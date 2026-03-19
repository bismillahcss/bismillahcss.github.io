"use client"

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface BismillahIsolatedProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

/**
 * Isolates BismillahCSS components within an iframe to prevent CSS mixing
 * with the site's Tailwind styles.
 */
export function BismillahIsolated({ children, className, style }: BismillahIsolatedProps) {
    const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null)
    const mountNode = contentRef?.contentWindow?.document?.body

    useEffect(() => {
        if (!contentRef || !contentRef.contentWindow) return

        const doc = contentRef.contentWindow.document

        // Inject BismillahCSS styles into the iframe
        const link1 = doc.createElement('link')
        link1.rel = 'stylesheet'
        link1.href = '/bismillah.css'

        const link2 = doc.createElement('link')
        link2.rel = 'stylesheet'
        link2.href = '/attractive.css'

        doc.head.appendChild(link1)
        doc.head.appendChild(link2)

        // Set background to transparent to inherit from owner
        doc.body.style.margin = '0'
        doc.body.style.padding = '0'
        doc.body.style.backgroundColor = 'transparent'
        doc.body.style.overflow = 'hidden'

        // Force dark mode if the parent has it
        if (document.documentElement.classList.contains('dark')) {
            doc.documentElement.classList.add('dark')
        } else {
            doc.documentElement.classList.remove('dark')
        }

        // Adjust height based on content
        const resizeObserver = new ResizeObserver(() => {
            if (contentRef) {
                contentRef.style.height = `${doc.body.scrollHeight}px`
            }
        })

        resizeObserver.observe(doc.body)

        return () => resizeObserver.disconnect()
    }, [contentRef])

    return (
        <iframe
            title="Bismillah Preview"
            ref={setContentRef}
            className={className}
            style={{
                width: '100%',
                border: 'none',
                background: 'transparent',
                ...style
            }}
        >
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}
