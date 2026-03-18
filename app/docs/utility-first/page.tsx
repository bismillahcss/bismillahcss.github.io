import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function UtilityFirstPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Utility-First CSS</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Understand the utility-first approach and how BismillahCSS makes it easy to build beautiful interfaces without leaving your HTML.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">What is Utility-First CSS?</h2>

          <p className="text-muted-foreground">
            Utility-first CSS is an approach to styling where you use small, single-purpose utility classes to compose designs directly in your HTML. Instead of writing custom CSS for each component, you build designs by combining pre-made utility classes.
          </p>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 font-semibold">💡 Key Idea</p>
            <p className="text-blue-800 text-sm mt-2">
              Instead of naming classes by what they look like (e.g., "card"), name them by what they do (e.g., "p-4", "rounded", "shadow").
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Traditional vs Utility-First</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">❌ Traditional Approach (Custom CSS)</h3>
              <p className="text-muted-foreground text-sm mb-2">HTML:</p>
              <CodeBlock language="html">
{`<div class="card">
  <h3 class="card-title">Welcome</h3>
  <p class="card-description">This is a card component</p>
</div>`}
              </CodeBlock>
              <p className="text-muted-foreground text-sm mb-2 mt-3">CSS (styles.css):</p>
              <CodeBlock language="css">
{`.card {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
}

.card-description {
  font-size: 0.875rem;
  color: #6B7280;
}`}
              </CodeBlock>
              <p className="text-red-600 text-sm mt-2">❌ Problems: Need to maintain separate CSS file, naming gets complex, hard to find where styles are defined</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">✅ Utility-First Approach (BismillahCSS)</h3>
              <p className="text-muted-foreground text-sm mb-2">HTML:</p>
              <CodeBlock language="html">
{`<div class="bismillah-p-4 bismillah-rounded bismillah-bg-white bismillah-shadow">
  <h3 class="bismillah-text-xl bismillah-font-bold bismillah-text-gray-900">Welcome</h3>
  <p class="bismillah-text-sm bismillah-text-gray-500">This is a card component</p>
</div>`}
              </CodeBlock>
              <p className="text-green-600 text-sm mt-2">✅ Benefits: All styles visible in HTML, no separate CSS file needed, easy to modify, consistent design system</p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Composing with Utilities</h2>

          <p className="text-muted-foreground mb-4">
            Build complex layouts and components by combining simple utility classes:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Button Component</h3>
              <CodeBlock language="html">
{`<!-- Simple button -->
<button class="bismillah-bg-blue-500 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
  Click me
</button>

<!-- Button with interactive states -->
<button class="bismillah-bg-blue-500 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded hover:bismillah-bg-blue-600 active:bismillah-bg-blue-700 transition-colors">
  Interactive Button
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Card Component</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-lg bismillah-p-6">
  <h2 class="bismillah-text-2xl bismillah-font-bold bismillah-text-gray-900 bismillah-mb-2">
    Card Title
  </h2>
  <p class="bismillah-text-gray-600 bismillah-mb-4">
    This is a card description with some content.
  </p>
  <button class="bismillah-bg-blue-500 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
    Learn More
  </button>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Navigation Bar</h3>
              <CodeBlock language="html">
{`<nav class="bismillah-bg-gray-800 bismillah-text-white">
  <div class="bismillah-container bismillah-mx-auto bismillah-px-4 bismillah-py-4">
    <div class="bismillah-flex bismillah-items-center bismillah-justify-between">
      <div class="bismillah-font-bold bismillah-text-xl">Logo</div>
      <div class="bismillah-flex bismillah-gap-6">
        <a href="#" class="hover:bismillah-text-gray-300 transition-colors">Home</a>
        <a href="#" class="hover:bismillah-text-gray-300 transition-colors">About</a>
        <a href="#" class="hover:bismillah-text-gray-300 transition-colors">Contact</a>
      </div>
    </div>
  </div>
</nav>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Form Layout</h3>
              <CodeBlock language="html">
{`<form class="bismillah-max-w-md bismillah-mx-auto bismillah-space-y-4">
  <div>
    <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-900">
      Email Address
    </label>
    <input 
      type="email"
      class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg focus:bismillah-outline-none focus:bismillah-ring-2 focus:bismillah-ring-blue-500"
      placeholder="you@example.com"
    />
  </div>
  
  <button type="submit" class="bismillah-w-full bismillah-bg-blue-600 bismillah-text-white bismillah-py-2 bismillah-rounded-lg hover:bismillah-bg-blue-700 transition-colors">
    Submit
  </button>
</form>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Advantages of Utility-First CSS</h2>

          <div className="grid gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">⚡ Speed</h3>
              <p className="text-muted-foreground text-sm">
                Stop writing custom CSS. Build interfaces faster by using pre-made utilities.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">🎨 Consistency</h3>
              <p className="text-muted-foreground text-sm">
                Use the same utility classes throughout your project to ensure consistent design patterns.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">🔄 Maintainability</h3>
              <p className="text-muted-foreground text-sm">
                Change styles directly in HTML without hunting through CSS files. Update designs in seconds.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">📦 Smaller CSS Files</h3>
              <p className="text-muted-foreground text-sm">
                Utility-first frameworks generate only the CSS you actually use, reducing file sizes.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">🚀 Responsive Design</h3>
              <p className="text-muted-foreground text-sm">
                Use responsive prefixes to create mobile-first designs without writing media queries.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">♻️ Reusable Patterns</h3>
              <p className="text-muted-foreground text-sm">
                Combine utilities to create reusable component patterns without class name bloat.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">How to Think in Utilities</h2>

          <p className="text-muted-foreground mb-4">
            Here's the mindset shift when moving to utility-first CSS:
          </p>

          <div className="space-y-3">
            <div className="bg-gray-50 rounded p-4">
              <p className="font-semibold mb-2">Before (Named Classes Mindset)</p>
              <p className="text-sm text-muted-foreground">
                "What should I call this component?" → "dark-card"<br/>
                Then write CSS for `.dark-card`
              </p>
            </div>

            <div className="bg-blue-50 rounded p-4">
              <p className="font-semibold mb-2">After (Utility-First Mindset)</p>
              <p className="text-sm text-muted-foreground">
                "What do I want this to look like?" → "dark background, white text, some padding"<br/>
                Use utilities: `.bismillah-bg-gray-900 .bismillah-text-white .bismillah-p-4`
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mt-4">
            The key is to think about the desired design, not the semantic meaning of the element.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Utility Patterns</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Spacing Utilities</h3>
              <CodeBlock language="html">
{`<!-- Padding -->
<div class="bismillah-p-4">Padding on all sides</div>
<div class="bismillah-px-4 bismillah-py-2">Horizontal and vertical padding</div>

<!-- Margin -->
<div class="bismillah-m-4">Margin on all sides</div>
<div class="bismillah-mx-auto">Center horizontally</div>

<!-- Gap (for flex/grid)-->
<div class="bismillah-flex bismillah-gap-4">Items with gap</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Flexbox Utilities</h3>
              <CodeBlock language="html">
{`<!-- Basic flex -->
<div class="bismillah-flex">Flex container</div>

<!-- With alignment -->
<div class="bismillah-flex bismillah-items-center bismillah-justify-between">
  Items centered vertically, spaced apart
</div>

<!-- Flex direction -->
<div class="bismillah-flex bismillah-flex-col">Column layout</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Typography Utilities</h3>
              <CodeBlock language="html">
{`<div class="bismillah-text-xl bismillah-font-bold bismillah-text-gray-900">
  Bold large dark text
</div>

<p class="bismillah-text-sm bismillah-text-gray-500 bismillah-leading-relaxed">
  Small gray text with more line height
</p>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">State Modifiers</h3>
              <CodeBlock language="html">
{`<button class="bismillah-bg-blue-500 hover:bismillah-bg-blue-600 active:bismillah-bg-blue-700 disabled:bismillah-opacity-50">
  Interactive Button
</button>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Tips for Using Utility-First CSS</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Start with layout:</strong> Use flexbox and grid utilities first, then add other styles.
            </li>
            <li>
              <strong>Use responsive prefixes:</strong> Build mobile-first by using `sm:`, `md:`, `lg:` prefixes.
            </li>
            <li>
              <strong>Extract components:</strong> When you repeat the same utility combinations, consider creating a reusable component.
            </li>
            <li>
              <strong>Group related utilities:</strong> Organize utilities logically in your HTML for readability.
            </li>
            <li>
              <strong>Use variable naming:</strong> Consider extracting repeated utility patterns into CSS variables or component classes.
            </li>
            <li>
              <strong>Don't worry about class count:</strong> It's okay to have many utility classes; that's the whole point!
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
