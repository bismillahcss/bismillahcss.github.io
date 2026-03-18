import React from 'react'
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"
import { AnimatedCard } from "@/components/animated-card"

export default function ComponentsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore reusable UI components built with BismillahCSS utility classes. Learn how to build, customize, and extend components for your projects.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">What are Components?</h2>

          <p className="text-muted-foreground">
            Components are reusable UI elements built by combining BismillahCSS utility classes. Instead of writing CSS, you compose utilities to create anything from buttons to complex modals.
          </p>

          <p className="text-muted-foreground mt-4">
            BismillahCSS provides a foundation of utilities that let you build unlimited component variations without leaving your HTML.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Component Fundamentals</h2>

          <p className="text-muted-foreground mb-4">Every component starts with understanding these principles:</p>

          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">1. Composition</h3>
              <p className="text-sm text-muted-foreground">
                Build components by composing smaller utility classes. A button is color + padding + border-radius utilities.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">2. Consistency</h3>
              <p className="text-sm text-muted-foreground">
                Use the same utility classes across your project so all components feel cohesive.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">3. Reusability</h3>
              <p className="text-sm text-muted-foreground">
                Create base component patterns and reuse them, modifying only what needs to change.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">4. Maintainability</h3>
              <p className="text-sm text-muted-foreground">
                All component styles are visible in your markup, making changes trivial.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Available Components</h2>

          <div className="mt-8 grid gap-4">
            {[
              {
                title: "Buttons",
                description: "Learn to build buttons with different styles, sizes, and states.",
                icon: "🔘",
                href: "/docs/components/buttons",
              },
              {
                title: "Cards",
                description: "Create versatile card components for displaying content.",
                icon: "📋",
                href: "/docs/components/cards",
              },
              {
                title: "Forms",
                description: "Build accessible forms with inputs, labels, and validation states.",
                icon: "📝",
                href: "/docs/components/forms",
              },
              {
                title: "Modals",
                description: "Create dialogs and modals for user interactions.",
                icon: "🪟",
                href: "/docs/components/modals",
              },
            ].map((item, index) => (
              <Link key={item.title} href={item.href}>
                <AnimatedCard index={index} className="group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Building Your Own Components</h2>

          <p className="text-muted-foreground mb-4">
            Here's how to build a component using BismillahCSS utilities:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Step 1: Plan the Structure</h3>
              <p className="text-muted-foreground mb-2">
                Identify the layout, colors, spacing, and interactive states.
              </p>
              <CodeBlock language="html">
{`<!-- A simple badge component needs:
     - Background color
     - Text color
     - Padding
     - Border radius
     - Small text size -->
<span class="bismillah-bg-blue-200 bismillah-text-blue-800 bismillah-px-2 bismillah-py-1 bismillah-rounded-full bismillah-text-xs bismillah-font-semibold">
  Badge
</span>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Step 2: Add States</h3>
              <p className="text-muted-foreground mb-2">
                Add hover, focus, active, and disabled states using variant prefixes.
              </p>
              <CodeBlock language="html">
{`<button class="
  bismillah-bg-blue-600
  bismillah-text-white
  bismillah-px-4
  bismillah-py-2
  bismillah-rounded-lg
  hover:bismillah-bg-blue-700
  active:bismillah-bg-blue-800
  focus:bismillah-outline-none
  focus:bismillah-ring-2
  focus:bismillah-ring-blue-300
  disabled:bismillah-opacity-50
  disabled:bismillah-cursor-not-allowed
">
  Button
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Step 3: Make it Responsive</h3>
              <p className="text-muted-foreground mb-2">
                Use responsive prefixes to adapt components across screen sizes.
              </p>
              <CodeBlock language="html">
{`<div class="
  bismillah-grid
  bismillah-grid-cols-1
  md:bismillah-grid-cols-2
  lg:bismillah-grid-cols-3
  bismillah-gap-4
">
  <!-- Cards that adapt -->
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Component Patterns</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Base Styles</h3>
              <p className="text-muted-foreground mb-2">
                Create base styles that all variations inherit:
              </p>
              <CodeBlock language="html">
{`<!-- Base button -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-rounded-lg bismillah-font-semibold transition-colors">
  Default
</button>

<!-- Primary variant -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-rounded-lg bismillah-font-semibold transition-colors bismillah-bg-blue-600 bismillah-text-white hover:bismillah-bg-blue-700">
  Primary
</button>

<!-- Secondary variant -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-rounded-lg bismillah-font-semibold transition-colors bismillah-bg-gray-200 bismillah-text-gray-900 hover:bismillah-bg-gray-300">
  Secondary
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Compound Components</h3>
              <p className="text-muted-foreground mb-2">
                Build complex components from simpler ones:
              </p>
              <CodeBlock language="html">
{`<!-- Card component compound -->
<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md">
  <!-- Header -->
  <div class="bismillah-px-6 bismillah-py-4 bismillah-border-b bismillah-border-gray-200">
    <h3 class="bismillah-text-lg bismillah-font-bold">Card Title</h3>
  </div>
  
  <!-- Body -->
  <div class="bismillah-px-6 bismillah-py-4">
    <p class="bismillah-text-gray-600">Card content</p>
  </div>
  
  <!-- Footer -->
  <div class="bismillah-px-6 bismillah-py-4 bismillah-border-t bismillah-border-gray-200">
    <button class="bismillah-bg-blue-600 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
      Action
    </button>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Variants</h3>
              <p className="text-muted-foreground mb-2">
                Create variations with conditional styling:
              </p>
              <CodeBlock language="html">
{`<!-- Alert component with variants -->

<!-- Info variant -->
<div class="bismillah-bg-blue-50 bismillah-border-l-4 bismillah-border-blue-500 bismillah-p-4 bismillah-text-blue-800">
  Info message
</div>

<!-- Success variant -->
<div class="bismillah-bg-green-50 bismillah-border-l-4 bismillah-border-green-500 bismillah-p-4 bismillah-text-green-800">
  Success message
</div>

<!-- Error variant -->
<div class="bismillah-bg-red-50 bismillah-border-l-4 bismillah-border-red-500 bismillah-p-4 bismillah-text-red-800">
  Error message
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Best Practices</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Keep utility classes in your markup:</strong> This makes components visible and easy to maintain.
            </li>
            <li>
              <strong>Create component variations:</strong> Button sizes, colors, styles should all be utility-based variations.
            </li>
            <li>
              <strong>Use semantic HTML:</strong> Always use the correct HTML elements for accessibility.
            </li>
            <li>
              <strong>Test accessibility:</strong> Ensure components are keyboard navigable and work with screen readers.
            </li>
            <li>
              <strong>Document variations:</strong> Show all component states and variations in your documentation.
            </li>
            <li>
              <strong>Consistent spacing:</strong> Use the spacing scale consistently across all components.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Next Steps</h2>

          <p className="text-muted-foreground">
            Explore specific component types to learn detailed implementation patterns:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-4">
            <li>Learn to build <Link href="/docs/components/buttons" className="text-blue-600 hover:underline">buttons with different styles</Link></li>
            <li>Create <Link href="/docs/components/cards" className="text-blue-600 hover:underline">flexible card layouts</Link></li>
            <li>Build <Link href="/docs/components/forms" className="text-blue-600 hover:underline">accessible forms</Link></li>
            <li>Implement <Link href="/docs/components/modals" className="text-blue-600 hover:underline">modal dialogs</Link></li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
