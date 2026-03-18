import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function CardsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Card Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Create flexible card components that work for any type of content. From simple cards to complex layouts.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Basic Card</h2>

          <p className="text-muted-foreground mb-3">A simple card with essential styling:</p>
          <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6">
  <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card Title</h3>
  <p class="bismillah-text-gray-600">This is a basic card with some content.</p>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Card Variants</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Elevated Card</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-lg bismillah-p-6 hover:bismillah-shadow-xl transition-shadow">
  <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Elevated Card</h3>
  <p class="bismillah-text-gray-600">Card with more shadow</p>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Bordered Card</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-border bismillah-border-gray-200 bismillah-rounded-lg bismillah-p-6">
  <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Bordered Card</h3>
  <p class="bismillah-text-gray-600">Card with border instead of shadow</p>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Colored Card</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-blue-50 bismillah-border-l-4 bismillah-border-blue-500 bismillah-rounded-lg bismillah-p-6">
  <h3 class="bismillah-text-lg bismillah-font-bold bismillah-text-blue-900 bismillah-mb-2">Colored Card</h3>
  <p class="bismillah-text-blue-700">Card with accent color</p>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Outlined Card</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-transparent bismillah-border-2 bismillah-border-dashed bismillah-border-gray-300 bismillah-rounded-lg bismillah-p-6">
  <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Outlined Card</h3>
  <p class="bismillah-text-gray-600">Card with dashed border</p>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Card with Header & Footer</h2>

          <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-overflow-hidden">
  <!-- Header -->
  <div class="bismillah-px-6 bismillah-py-4 bismillah-border-b bismillah-border-gray-200 bismillah-bg-gray-50">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-text-gray-900">Card Title</h3>
  </div>

  <!-- Body -->
  <div class="bismillah-px-6 bismillah-py-4">
    <p class="bismillah-text-gray-600 bismillah-mb-4">
      This is the main content of the card. You can include any content here.
    </p>
  </div>

  <!-- Footer -->
  <div class="bismillah-px-6 bismillah-py-4 bismillah-border-t bismillah-border-gray-200 bismillah-bg-gray-50">
    <button class="bismillah-bg-blue-600 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded-lg">
      Action
    </button>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Card with Image</h2>

          <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-overflow-hidden">
  <!-- Image -->
  <img src="image.jpg" alt="Card image" class="bismillah-w-full bismillah-h-48 bismillah-object-cover" />

  <!-- Content -->
  <div class="bismillah-p-6">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Beautiful Image Card</h3>
    <p class="bismillah-text-gray-600 bismillah-mb-4">
      This card features an image at the top with content below.
    </p>
    <button class="bismillah-bg-blue-600 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
      Learn More
    </button>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Card Grid</h2>

          <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-1 md:bismillah-grid-cols-2 lg:bismillah-grid-cols-3 bismillah-gap-6">
  <!-- Card 1 -->
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card 1</h3>
    <p class="bismillah-text-gray-600">Description for card 1</p>
  </div>

  <!-- Card 2 -->
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card 2</h3>
    <p class="bismillah-text-gray-600">Description for card 2</p>
  </div>

  <!-- Card 3 -->
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card 3</h3>
    <p class="bismillah-text-gray-600">Description for card 3</p>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Hoverable Card</h2>

          <CodeBlock language="html">
{`<div class="group bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md hover:bismillah-shadow-lg hover:bismillah--translate-y-1 bismillah-p-6 transition-all cursor-pointer">
  <div class="bismillah-flex bismillah-items-center bismillah-justify-between">
    <div>
      <h3 class="bismillah-text-lg bismillah-font-bold group-hover:bismillah-text-blue-600 transition-colors">Hover me</h3>
      <p class="bismillah-text-gray-600 bismillah-text-sm">Card responds to hover</p>
    </div>
    <span class="group-hover:bismillah-translate-x-1 transition-transform">→</span>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Stat Card</h2>

          <CodeBlock language="html">
{`<!-- Display statistics -->
<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6 bismillah-text-center">
  <div class="bismillah-text-3xl bismillah-font-bold bismillah-text-blue-600 bismillah-mb-2">1,234</div>
  <p class="bismillah-text-gray-600 bismillah-text-sm">Total Users</p>
</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Product Card</h2>

              <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-overflow-hidden">
  <!-- Product image -->
  <img src="product.jpg" alt="Product" class="bismillah-w-full bismillah-h-48 bismillah-object-cover" />

  <!-- Product info -->
  <div class="bismillah-p-4">
    <div class="bismillah-flex bismillah-items-start bismillah-justify-between bismillah-mb-2">
      <h3 class="bismillah-font-bold">Product Name</h3>
      <span class="bismillah-text-yellow-500">★★★★★</span>
    </div>
    <p class="bismillah-text-sm bismillah-text-gray-600 bismillah-mb-4">Short product description</p>
    <div class="bismillah-flex bismillah-items-center bismillah-justify-between">
      <span class="bismillah-text-2xl bismillah-font-bold bismillah-text-blue-600">$99.99</span>
      <button class="bismillah-bg-blue-600 bismillah-text-white bismillah-px-4 bismillah-py-1 bismillah-rounded">
        Add to cart
      </button>
    </div>
  </div>
</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Dark Mode Cards</h2>

              <CodeBlock language="html">
{`<div class="bismillah-bg-white dark:bismillah-bg-gray-800 bismillah-rounded-lg bismillah-shadow-md dark:bismillah-shadow-lg dark:bismillah-shadow-black/20 bismillah-p-6">
  <h3 class="bismillah-text-lg bismillah-font-bold bismillah-text-gray-900 dark:bismillah-text-white bismillah-mb-2">
    Dark Mode Card
  </h3>
  <p class="bismillah-text-gray-600 dark:bismillah-text-gray-300">
    This card works in both light and dark modes
  </p>
</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Responsive Cards</h2>

              <CodeBlock language="html">
{`<!-- Cards that stack on mobile, side-by-side on desktop -->
<div class="bismillah-grid bismillah-grid-cols-1 md:bismillah-grid-cols-2 bismillah-gap-4 md:bismillah-gap-6">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-4 md:bismillah-p-6">
    <h3 class="bismillah-text-base md:bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card 1</h3>
    <p class="bismillah-text-sm md:bismillah-text-base bismillah-text-gray-600">Content adapts to screen size</p>
  </div>
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-4 md:bismillah-p-6">
    <h3 class="bismillah-text-base md:bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card 2</h3>
    <p class="bismillah-text-sm md:bismillah-text-base bismillah-text-gray-600">Cards are responsive</p>
  </div>
</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Best Practices</h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Keep cards modular—they should work independently</li>
                <li>Use consistent spacing and padding</li>
                <li>Make cards responsive with proper grid layouts</li>
                <li>Add appropriate shadows for depth</li>
                <li>Use hover states to indicate interactivity</li>
                <li>Ensure content hierarchy within cards</li>
              </ul>
            </section>
          </div>
        </PageTransition>
      )
    }
