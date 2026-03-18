import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const posts = [
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
