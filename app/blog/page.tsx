import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"


const posts = [
  {
    title: "Introducing BismillahCSS v1.0",
    description:
      "Today we're excited to announce the official release of BismillahCSS v1.0, the next-gen CSS framework for modern web development.",
    date: "March 15, 2024",
    author: "Mubashir Ali",
    authorImage: "images/mubashir.png",
    category: "Release",
    slug: "introducing-bismillahcss-v1",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Building Responsive Layouts with BismillahCSS",
    description:
      "Learn how to create beautiful responsive layouts using BismillahCSS's powerful utility classes and components.",
    date: "March 10, 2024",
    author: "Sara Ahmed",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Tutorial",
    slug: "building-responsive-layouts",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Performance Optimization Tips for BismillahCSS",
    description:
      "Discover advanced techniques to optimize your BismillahCSS project for better performance and user experience.",
    date: "March 5, 2024",
    author: "Mohammad Ali",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Best Practices",
    slug: "performance-optimization-tips",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Customizing BismillahCSS: Creating Your Own Theme",
    description:
      "A step-by-step guide to customizing BismillahCSS to match your brand's unique identity and design requirements.",
    date: "February 28, 2024",
    author: "Fatima Zahra",
    authorImage: "/placeholder.svg?height=40&width=40",
    category: "Customization",
    slug: "customizing-bismillahcss-themes",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <p className="mt-2 text-muted-foreground">Latest news, updates, and tutorials for BismillahCSS</p>
        </div>
        <div className="flex items-center">
          <Button variant="outline" asChild>
            <Link href="/blog/rss">Subscribe to RSS</Link>
          </Button>
        </div>
      </div>

      {/* Featured Post */}
      <div className="mt-10">
        <Link
          href={`/blog/${posts[0].slug}`}
          className="group grid gap-4 rounded-lg border p-4 sm:p-6 shadow-sm transition-all hover:shadow-md md:grid-cols-2"
        >
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {posts[0].category}
            </div>
            <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight md:text-3xl">{posts[0].title}</h2>
            <p className="mt-2 text-muted-foreground">{posts[0].description}</p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src={posts[0].authorImage || "/placeholder.svg"}
                alt={posts[0].author}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{posts[0].author}</p>
                <p className="text-sm text-muted-foreground">{posts[0].date}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center text-primary">
              <span>Read article</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          <div className="order-1 md:order-2 aspect-video overflow-hidden rounded-lg bg-muted">
            <img
              src={posts[0].image || "/placeholder.svg"}
              alt={posts[0].title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      {/* Other Posts */}
      <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-lg border shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category}
              </div>
              <h3 className="mt-4 text-xl font-bold">{post.title}</h3>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={post.authorImage || "/placeholder.svg"} alt={post.author} className="h-8 w-8 rounded-full" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

