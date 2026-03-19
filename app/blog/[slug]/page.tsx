import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const posts = [
    {
        title: "BismillahCSS: Redefining How We Think About Styling",
        description: "Explore how BismillahCSS shifts the paradigm from technical implementation to human-centered intent, prioritizing clarity and meaning.",
        content: `
      <p>In today’s rapidly evolving frontend ecosystem, developers are no longer just writing code—they are shaping experiences. Frameworks like Tailwind CSS and shadcn/ui have already transformed how interfaces are built. Tailwind introduced a utility-first mindset, while shadcn/ui streamlined development through reusable components. Both approaches are powerful, yet they still operate within a familiar paradigm: styling as a technical task.</p>
      <p>BismillahCSS challenges that assumption entirely.</p>
      <h2>A Shift from Implementation to Intent</h2>
      <p>At its core, BismillahCSS is built on a radically different philosophy: <strong>intent over implementation</strong>.</p>
      <p>Instead of thinking in terms of margins, paddings, or flexbox utilities, developers express what they mean. Rather than writing long chains of classes, they use purpose-driven names like:</p>
      <ul>
        <li><code>card-primary</code></li>
        <li><code>layout-focus</code></li>
        <li><code>text-peace</code></li>
      </ul>
      <p>This shift reduces cognitive overload and aligns code with human thinking. You are no longer assembling styles—you are communicating ideas.</p>
      <h2>Semantic and Expressive by Design</h2>
      <p>Where traditional frameworks prioritize technical accuracy, BismillahCSS prioritizes clarity and meaning. Class names are readable, memorable, and emotionally expressive.</p>
      <p>This makes it especially powerful for beginners learning UI development, teams collaborating on large projects, and developers who value clean, self-documenting code. With BismillahCSS, the codebase becomes easier to read—not just for machines, but for humans.</p>
      <h2>Opinionated Design Systems, Not Just Tools</h2>
      <p>Unlike utility-first frameworks that give you complete freedom, BismillahCSS introduces opinionated design systems. It comes with predefined spacing scales, harmonized typography, and thoughtfully curated color palettes.</p>
      <p>This reduces decision fatigue and enforces visual consistency—similar to how companies like Apple Inc. approach design: guided, intentional, and disciplined.</p>
      <h2>Smart Presets for Rapid Development</h2>
      <p>One of the most powerful features of BismillahCSS is its smart presets. With minimal configuration, developers can instantly apply complete UI systems tailored for startup dashboards, student portfolios, or bioinformatics platforms.</p>
      <h2>Built-In Accessibility and Behavior</h2>
      <p>Accessibility in many frameworks is often optional. In BismillahCSS, it is default. The framework automatically handles color contrast, focus states, and readability. But it goes even further by embedding behavior into styling. For example, a single button class may include hover effects, loading states, and subtle animations.</p>
      <h2>A Human-Centered Design Philosophy</h2>
      <p>Perhaps the most unique aspect of BismillahCSS is its philosophical approach to design. It is not just about building interfaces—it is about building meaningful experiences. The framework encourages calm and focused layouts, intentional use of space, and emotionally aware design choices.</p>
      <h2>Developer Experience That Feels Natural</h2>
      <p>BismillahCSS also prioritizes developer experience with intuitive CLI commands, prebuilt layouts, and minimal setup. Developers can spend less time configuring and more time creating.</p>
      <h2>Getting Started</h2>
      <p>You can quickly integrate BismillahCSS into your project using CDN:</p>
      <pre><code>&lt;link href="https://cdn.jsdelivr.net/npm/bismillahcss/dist/bismillah.min.css" rel="stylesheet"&gt;</code></pre>
      <p>Or install it via npm:</p>
      <pre><code>npm install bismillahcss</code></pre>
    `,
        date: "March 19, 2024",
        author: "Mubashir Ali",
        authorImage: "images/mubashir.png",
        category: "Philosophy",
        slug: "redefining-styling-intent-driven-css",
        image: "/images/blog/redefining-styling.png",
        readTime: "7 min read",
    },
    {
        title: "Introducing BismillahCSS v1.0",
        description:
            "Today we're excited to announce the official release of BismillahCSS v1.0, the next-gen CSS framework for modern web development.",
        content: `
      <p>BismillahCSS v1.0 marks a significant milestone in our journey to provide a truly performance-oriented CSS framework. We've focused on three core pillars: speed, accessibility, and ease of use.</p>
      <h2>What's New?</h2>
      <p>Building on the foundation of utility-first CSS, we've introduced a set of pre-built components that follow the highest standards of web accessibility. Our new compiler is 40% faster than the alpha version, ensuring your development workflow remains smooth.</p>
      <ul>
        <li>Over 500+ new utility classes</li>
        <li>Fully responsive grid system</li>
        <li>Native dark mode support</li>
        <li>Zero-runtime CSS injection</li>
      </ul>
      <p>We've also simplified the configuration process, making it easier than ever to customize themes and extend the framework with your own proprietary plugins.</p>
    `,
        date: "March 15, 2024",
        author: "Mubashir Ali",
        authorImage: "images/mubashir.png",
        category: "Release",
        slug: "introducing-bismillahcss-v1",
        image: "/placeholder.svg?height=400&width=800",
        readTime: "5 min read",
    },
    {
        title: "Building Responsive Layouts with BismillahCSS",
        description:
            "Learn how to create beautiful responsive layouts using BismillahCSS's powerful utility classes and components.",
        content: `
      <p>Responsive design is no longer an option—it's a requirement. BismillahCSS makes it intuitive to build layouts that look great on any device, from mobile phones to high-resolution monitors.</p>
      <h2>Using the Grid System</h2>
      <p>Our grid system is based on modern CSS Grid and Flexbox. By using simple utilities like <code>b-grid</code> and <code>b-cols-12</code>, you can define complex structures in minutes.</p>
      <div class="bg-muted p-4 rounded-md my-4">
        <code>&lt;div class="b-grid b-cols-1 md:b-cols-2 lg:b-cols-3"&gt;...&lt;/div&gt;</code>
      </div>
      <h2>Breakpoints</h2>
      <p>BismillahCSS uses a mobile-first approach with default breakpoints at 640px, 768px, 1024px, and 1280px. You can even define your own custom breakpoints in the config file.</p>
    `,
        date: "March 10, 2024",
        author: "Sara Ahmed",
        authorImage: "/placeholder.svg?height=40&width=40",
        category: "Tutorial",
        slug: "building-responsive-layouts",
        image: "/placeholder.svg?height=400&width=800",
        readTime: "8 min read",
    },
    {
        title: "Performance Optimization Tips for BismillahCSS",
        description:
            "Discover advanced techniques to optimize your BismillahCSS project for better performance and user experience.",
        content: `
      <p>Performance is at the heart of BismillahCSS. While the framework is lightweight by default, there are several steps you can take to ensure your project remains as fast as possible.</p>
      <h2>Tree Shaking and Purging</h2>
      <p>One of the most effective ways to reduce your CSS bundle size is to ensure your project only includes the classes you're actually using. Our built-in purging tool handles this automatically during production builds.</p>
      <h2>Critical CSS</h2>
      <p>For even better perceived performance, consider inlining critical CSS directly in the HTML <code>&lt;head&gt;</code>. This prevents render-blocking and ensures your users see the page content immediately.</p>
    `,
        date: "March 5, 2024",
        author: "Mohammad Ali",
        authorImage: "/placeholder.svg?height=40&width=40",
        category: "Best Practices",
        slug: "performance-optimization-tips",
        image: "/placeholder.svg?height=400&width=800",
        readTime: "6 min read",
    },
    {
        title: "Customizing BismillahCSS: Creating Your Own Theme",
        description:
            "A step-by-step guide to customizing BismillahCSS to match your brand's unique identity and design requirements.",
        content: `
      <p>Every brand is unique, and your CSS framework should reflect that. BismillahCSS is designed to be highly customizable via its <code>bismillah.config.js</code> file.</p>
      <h2>Defining Your Palette</h2>
      <p>You can easily override the default color palette or add your own custom colors. These colors will automatically generate corresponding utility classes like <code>b-text-brand-primary</code> and <code>b-bg-brand-secondary</code>.</p>
      <h2>Extending Utilities</h2>
      <p>If you find yourself needing a utility that isn't included by default, you can easily add it to the <code>extend</code> section of your config.</p>
    `,
        date: "February 28, 2024",
        author: "Fatima Zahra",
        authorImage: "/placeholder.svg?height=40&width=40",
        category: "Customization",
        slug: "customizing-bismillahcss-themes",
        image: "/placeholder.svg?height=400&width=800",
        readTime: "7 min read",
    },
]

export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="container py-10 max-w-4xl mx-auto">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.description,
                            "image": `https://bismillahcss.github.io${post.image}`,
                            "author": {
                                "@type": "Person",
                                "name": post.author,
                                "url": "https://bismillahcss.github.io"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "BismillahCSS",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://bismillahcss.github.io/images/bismillah-logo.png"
                                }
                            },
                            "datePublished": post.date,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://bismillahcss.github.io/blog/${post.slug}`
                            }
                        })
                    }}
                />
            </head>
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>

            <div className="space-y-4 text-center">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {post.category}
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
                <div className="flex items-center justify-center gap-6 py-4">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{post.readTime}</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 aspect-video overflow-hidden rounded-xl bg-muted border">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>

            <div className="mt-12 prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-16 pt-8 border-t">
                <div className="flex items-center gap-4">
                    <img
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        className="h-16 w-16 rounded-full border-2 border-primary/20"
                    />
                    <div>
                        <h3 className="font-bold text-lg">About {post.author}</h3>
                        <p className="text-muted-foreground">
                            Contributor to BismillahCSS and passionate web developer specializing in performance and accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
