import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ButtonsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Button Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Build versatile button components with different styles, sizes, and states using BismillahCSS utilities.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Basic Button</h2>

          <p className="text-muted-foreground mb-3">A simple button with essential utilities:</p>
          <CodeBlock language="html">
{`<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-blue-700 transition-colors">
  Click me
</button>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Button Variants</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Primary Button</h3>
              <CodeBlock language="html">
{`<button class="bismillah-px-6 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-blue-700 active:bismillah-bg-blue-800 transition-colors">
  Primary Button
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Secondary Button</h3>
              <CodeBlock language="html">
{`<button class="bismillah-px-6 bismillah-py-2 bismillah-bg-gray-200 bismillah-text-gray-900 bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-gray-300 active:bismillah-bg-gray-400 transition-colors">
  Secondary Button
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Danger Button</h3>
              <CodeBlock language="html">
{`<button class="bismillah-px-6 bismillah-py-2 bismillah-bg-red-600 bismillah-text-white bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-red-700 active:bismillah-bg-red-800 transition-colors">
  Delete
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Success Button</h3>
              <CodeBlock language="html">
{`<button class="bismillah-px-6 bismillah-py-2 bismillah-bg-green-600 bismillah-text-white bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-green-700 active:bismillah-bg-green-800 transition-colors">
  Save
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Outline Button</h3>
              <CodeBlock language="html">
{`<button class="bismillah-px-6 bismillah-py-2 bismillah-border-2 bismillah-border-blue-600 bismillah-text-blue-600 bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-blue-50 active:bismillah-bg-blue-100 transition-colors">
  Outline Button
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Ghost Button</h3>
              <CodeBlock language="html">
{`<button class="bismillah-px-4 bismillah-py-2 bismillah-text-blue-600 bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-blue-50 active:bismillah-bg-blue-100 transition-colors">
  Ghost Button
</button>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Button Sizes</h2>

          <CodeBlock language="html">
{`<!-- Small -->
<button class="bismillah-px-2 bismillah-py-1 bismillah-text-sm bismillah-bg-blue-600 bismillah-text-white bismillah-rounded">
  Small
</button>

<!-- Medium (default) -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
  Medium
</button>

<!-- Large -->
<button class="bismillah-px-6 bismillah-py-3 bismillah-text-lg bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
  Large
</button>

<!-- Full width -->
<button class="bismillah-w-full bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
  Full Width
</button>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Button States</h2>

          <CodeBlock language="html">
{`<!-- Normal state -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
  Normal
</button>

<!-- Hover state -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 hover:bismillah-bg-blue-700 bismillah-text-white bismillah-rounded-lg">
  Hover
</button>

<!-- Active state -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 active:bismillah-bg-blue-800 active:bismillah-shadow-inner bismillah-text-white bismillah-rounded-lg">
  Active
</button>

<!-- Disabled state -->
<button disabled class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg bismillah-opacity-50 bismillah-cursor-not-allowed">
  Disabled
</button>

<!-- Loading state -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
  <span>Loading...</span>
</button>

<!-- Focus state -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg focus:bismillah-outline-none focus:bismillah-ring-2 focus:bismillah-ring-blue-300">
  Focus
</button>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Icon Buttons</h2>

          <CodeBlock language="html">
{`<!-- Icon only -->
<button class="bismillah-p-2 bismillah-bg-gray-100 bismillah-text-gray-600 bismillah-rounded-lg hover:bismillah-bg-gray-200">
  🔍
</button>

<!-- Icon with text -->
<button class="bismillah-flex bismillah-items-center bismillah-gap-2 bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
  ➕ Add Item
</button>

<!-- Animated icon -->
<button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg hover:bismillah-bg-blue-700 group">
  Learn More
  <span class="group-hover:bismillah-translate-x-1 transition-transform">→</span>
</button>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Button Groups</h2>

          <CodeBlock language="html">
{`<!-- Horizontal button group -->
<div class="bismillah-flex bismillah-gap-2">
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-l-lg">
    Left
  </button>
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200">
    Middle
  </button>
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200 bismillah-rounded-r-lg">
    Right
  </button>
</div>

<!-- Vertical button group -->
<div class="bismillah-flex bismillah-flex-col bismillah-gap-2">
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white">
    Option 1
  </button>
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200">
    Option 2
  </button>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Complete Example</h2>

          <CodeBlock language="html">
{`<!-- Button showcase -->
<div class="bismillah-space-y-4">
  <div>
    <h3 class="bismillah-text-sm bismillah-font-medium bismillah-text-gray-700 bismillah-mb-2">Primary Buttons</h3>
    <div class="bismillah-flex bismillah-gap-2">
      <button class="bismillah-px-6 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg hover:bismillah-bg-blue-700 transition-colors">
        Primary
      </button>
      <button class="bismillah-px-6 bismillah-py-2 bismillah-bg-gray-200 bismillah-text-gray-900 bismillah-rounded-lg hover:bismillah-bg-gray-300 transition-colors">
        Secondary
      </button>
      <button class="bismillah-px-6 bismillah-py-2 bismillah-border-2 bismillah-border-blue-600 bismillah-text-blue-600 bismillah-rounded-lg hover:bismillah-bg-blue-50 transition-colors">
        Outline
      </button>
    </div>
  </div>

  <div>
    <h3 class="bismillah-text-sm bismillah-font-medium bismillah-text-gray-700 bismillah-mb-2">Sizes</h3>
    <div class="bismillah-flex bismillah-gap-2 bismillah-items-center">
      <button class="bismillah-px-3 bismillah-py-1 bismillah-text-sm bismillah-bg-blue-600 bismillah-text-white bismillah-rounded">
        Small
      </button>
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
        Medium
      </button>
      <button class="bismillah-px-6 bismillah-py-3 bismillah-text-lg bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">
        Large
      </button>
    </div>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Accessibility Tips</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use semantic <code className="bg-gray-100 px-2 py-1 rounded">&lt;button&gt;</code> elements or <code className="bg-gray-100 px-2 py-1 rounded">role="button"</code></li>
            <li>Make buttons easily clickable (minimum 44x44px)</li>
            <li>Provide clear focus states for keyboard navigation</li>
            <li>Use descriptive button text or aria-labels</li>
            <li>Ensure sufficient color contrast in all button states</li>
            <li>Indicate disabled state clearly to assistive technologies</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
