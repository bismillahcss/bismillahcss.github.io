import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'BismillahCSS - Next-Gen CSS Framework',
        short_name: 'BismillahCSS',
        description: 'Fast, lightweight, utility-first CSS framework for modern web development.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/images/bismillah-logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
