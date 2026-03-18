import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function QuickStartPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Quick Start Guide</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Get up and running with BismillahCSS in minutes. This guide will walk you through the essentials.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">⚡ 5-Minute Setup</h2>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Step 1: Install via NPM</h3>
            <p className="text-muted-foreground">
              The fastest way to get started is using NPM. Make sure you have Node.js installed.
            </p>
            <CodeBlock language="bash">npm install bismillahcss</CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Step 2: Import in Your Project</h3>
            <p className="text-muted-foreground">
              In your main CSS file or JavaScript entry point, add:
            </p>
            <CodeBlock language="javascript">
{`import "bismillahcss/dist/bismillah.css";`}
            </CodeBlock>
            <p className="text-muted-foreground">Or in your HTML file:</p>
            <CodeBlock language="html">
{`<link rel="stylesheet" href="node_modules/bismillahcss/dist/bismillah.css">`}
            </CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Step 3: Start Using Utility Classes</h3>
            <p className="text-muted-foreground">
              You're ready to go! Start building with utility classes:
            </p>
            <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-items-center bismillah-justify-center bismillah-h-screen">
  <button class="bismillah-bg-blue-500 bismillah-text-white bismillah-px-6 bismillah-py-3 bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-blue-600 transition-colors">
    Get Started
  </button>
</div>`}
            </CodeBlock>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📦 Choose Your Method</h2>
          
          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-600 mb-2">✅ Recommended: NPM + React/Next.js</h3>
              <CodeBlock language="bash">npm install bismillahcss</CodeBlock>
              <p className="text-muted-foreground text-sm mt-2">Best for modern web applications with build tools</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🚀 Quick: CDN Link</h3>
              <CodeBlock language="html">
{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bismillahcss@latest/dist/bismillah.min.css">`}
              </CodeBlock>
              <p className="text-muted-foreground text-sm mt-2">No installation required, perfect for quick prototypes</p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">🎨 Advanced: PostCSS</h3>
              <CodeBlock language="bash">npm install bismillahcss postcss autoprefixer</CodeBlock>
              <p className="text-muted-foreground text-sm mt-2">Full control and customization for production projects</p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🎯 Common Use Cases</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Button Component</h3>
              <CodeBlock language="html">
{`<button class="bismillah-bg-indigo-600 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded-md bismillah-font-medium hover:bismillah-bg-indigo-700 transition-colors">
  Click me
</button>`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Flex Layout</h3>
              <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-gap-4 bismillah-items-center bismillah-justify-between">
  <div class="bismillah-flex-1"></div>
  <div class="bismillah-flex-1"></div>
</div>`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Grid Layout</h3>
              <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-3 bismillah-gap-4">
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Card 1</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Card 2</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Card 3</div>
</div>`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Responsive Design</h3>
              <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-1 md:bismillah-grid-cols-2 lg:bismillah-grid-cols-3 bismillah-gap-4">
  <div>Responsive item</div>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🔧 Basic Configuration</h2>

          <p className="text-muted-foreground">
            Create a <code className="bg-gray-100 px-2 py-1 rounded">bismillah.config.js</code> file to customize BismillahCSS:
          </p>

          <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#10B981'
      },
      spacing: {
        '128': '32rem'
      }
    }
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground">
            Then use your custom values in your HTML:
          </p>

          <CodeBlock language="html">
{`<div class="bismillah-bg-primary bismillah-p-128">
  Custom configured styles
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">⚙️ Responsive Breakpoints</h2>

          <p className="text-muted-foreground mb-3">
            BismillahCSS includes responsive prefixes for mobile-first development:
          </p>

          <div className="space-y-2">
            <div className="flex gap-4 items-center">
              <code className="bg-gray-100 px-3 py-1 rounded text-sm">sm:</code>
              <span className="text-muted-foreground">Small screens (≥ 640px)</span>
            </div>
            <div className="flex gap-4 items-center">
              <code className="bg-gray-100 px-3 py-1 rounded text-sm">md:</code>
              <span className="text-muted-foreground">Medium screens (≥ 768px)</span>
            </div>
            <div className="flex gap-4 items-center">
              <code className="bg-gray-100 px-3 py-1 rounded text-sm">lg:</code>
              <span className="text-muted-foreground">Large screens (≥ 1024px)</span>
            </div>
            <div className="flex gap-4 items-center">
              <code className="bg-gray-100 px-3 py-1 rounded text-sm">xl:</code>
              <span className="text-muted-foreground">Extra large screens (≥ 1280px)</span>
            </div>
          </div>

          <p className="text-muted-foreground mt-4">
            Example:
          </p>

          <CodeBlock language="html">
{`<div class="bismillah-text-sm md:bismillah-text-base lg:bismillah-text-lg">
  Responsive text size
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🚀 Next Steps</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Explore Utility Classes:</strong> Check out all available utility classes for layout, typography, colors, and more.
            </li>
            <li>
              <strong>Read Core Concepts:</strong> Understand utility-first CSS, responsive design, and how to use pseudo-classes.
            </li>
            <li>
              <strong>Customize Your Theme:</strong> Learn how to configure colors, fonts, and spacing for your project.
            </li>
            <li>
              <strong>Build Components:</strong> Discover pre-built components or create your own using utility classes.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">❓ Need Help?</h2>

          <p className="text-muted-foreground">
            If you encounter any issues or have questions, check out our documentation pages or community resources. Happy building! 🎉
          </p>
        </section>
      </div>
    </PageTransition>
  )
}
