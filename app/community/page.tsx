import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Github, MessagesSquare, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Community - BismillahCSS",
  description: "Join the BismillahCSS community. Connect with other developers, share your projects, and get help with your work.",
}

const communities = [
  {
    title: "Discord",
    description: "Join our Discord server to chat with the community, ask questions, and get help with your projects.",
    icon: MessagesSquare,
    href: "https://discord.gg/bismillahcss",
    color: "bg-[#5865F2]/10 text-[#5865F2]",
  },
  {
    title: "GitHub Discussions",
    description: "Participate in discussions about features, bugs, and future development of BismillahCSS.",
    icon: Github,
    href: "https://github.com/bismillahcss/framework/discussions",
    color: "bg-black/10 text-black dark:bg-white/10 dark:text-white",
  },
  {
    title: "Twitter",
    description: "Follow us on Twitter for the latest updates, tips, and announcements about BismillahCSS.",
    icon: Twitter,
    href: "https://twitter.com/bismillahcss",
    color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
  },
]

const showcases = [
  {
    title: "Portfolio Template",
    creator: "Ahmed Khan",
    description: "A clean, minimalist portfolio template built with BismillahCSS.",
    image: "/placeholder.svg?height=200&width=400",
    href: "/community/showcase/portfolio-template",
  },
  {
    title: "E-Commerce Dashboard",
    creator: "Sara Ahmed",
    description: "A comprehensive dashboard for e-commerce websites with analytics and management features.",
    image: "/placeholder.svg?height=200&width=400",
    href: "/community/showcase/ecommerce-dashboard",
  },
  {
    title: "Blog Platform",
    creator: "Mohammad Ali",
    description: "A modern blog platform with a focus on readability and user experience.",
    image: "/placeholder.svg?height=200&width=400",
    href: "/community/showcase/blog-platform",
  },
]

export default function CommunityPage() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Community</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Connect with other developers, get help with your projects, and share your work with the BismillahCSS
          community.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {communities.map((community) => (
          <Link
            key={community.title}
            href={community.href}
            className="group flex flex-col rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${community.color}`}>
              <community.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-xl font-bold">{community.title}</h2>
            <p className="mt-2 text-muted-foreground">{community.description}</p>
            <div className="mt-6 flex items-center text-primary">
              <span>Join now</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Community Showcase</h2>
            <p className="mt-2 text-muted-foreground">
              Check out these amazing projects built with BismillahCSS by our community members.
            </p>
          </div>
          <div>
            <Button asChild>
              <Link href="/community/submit-project">Submit Your Project</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcases.map((showcase) => (
            <Link
              key={showcase.title}
              href={showcase.href}
              className="group flex flex-col rounded-lg border shadow-sm transition-all hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={showcase.image || "/placeholder.svg"}
                  alt={showcase.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{showcase.title}</h3>
                <p className="text-sm text-muted-foreground">by {showcase.creator}</p>
                <p className="mt-2 text-muted-foreground">{showcase.description}</p>
                <div className="mt-4 flex items-center text-primary">
                  <span>View project</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/community/showcase">View All Projects</Link>
          </Button>
        </div>
      </div>

      <div className="mt-24 rounded-lg border bg-card p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold">Have questions or need help?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Our community is always ready to help. Join our Discord server or check out the documentation for answers to
          common questions.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild>
            <Link href="https://discord.gg/bismillahcss">Join Discord</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs">Read Documentation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

