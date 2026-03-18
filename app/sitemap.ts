import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bismillahcss.github.io';

    const routes = [
        '',
        '/blog',
        '/community',
        '/components',
        '/components/showcase',
        '/components-showcase',
        '/docs',
        '/docs/components',
        '/docs/components/buttons',
        '/docs/components/cards',
        '/docs/components/forms',
        '/docs/components/modals',
        '/docs/configuration',
        '/docs/customization/configuration',
        '/docs/customization/extending',
        '/docs/customization/plugins',
        '/docs/customization/theming',
        '/docs/dark-mode',
        '/docs/installation',
        '/docs/pseudo-classes',
        '/docs/quick-start',
        '/docs/responsive-design',
        '/docs/utility-classes',
        '/docs/utility-classes/colors',
        '/docs/utility-classes/flexbox',
        '/docs/utility-classes/grid',
        '/docs/utility-classes/layout',
        '/docs/utility-classes/spacing',
        '/docs/utility-classes/typography',
        '/docs/utility-first',
        '/playground',
        '/tailwind-utilities',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
