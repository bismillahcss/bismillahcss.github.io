import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function FlexboxPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Flexbox Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Master flexbox layout with BismillahCSS utilities for flexible, responsive designs.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Flex Display</h2>

          <p className="text-muted-foreground mb-3">Enable flexbox layout:</p>
          <CodeBlock language="html">
{`<!-- Enable flex display -->
<div class="bismillah-flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Inline flex -->
<div class="bismillah-inline-flex">
  <span>Item 1</span>
  <span>Item 2</span>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Flex Direction</h2>

          <p className="text-muted-foreground mb-3">Control the direction of flex items:</p>
          <CodeBlock language="html">
{`<!-- Row (left to right) - default -->
<div class="bismillah-flex bismillah-flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Column (top to bottom) -->
<div class="bismillah-flex bismillah-flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Row reverse (right to left) -->
<div class="bismillah-flex bismillah-flex-row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Column reverse (bottom to top) -->
<div class="bismillah-flex bismillah-flex-col-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Justify Content</h2>

          <p className="text-muted-foreground mb-3">Align flex items along the main axis:</p>
          <CodeBlock language="html">
{`<!-- Start (left/top) -->
<div class="bismillah-flex bismillah-justify-start">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Center -->
<div class="bismillah-flex bismillah-justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- End (right/bottom) -->
<div class="bismillah-flex bismillah-justify-end">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Space between -->
<div class="bismillah-flex bismillah-justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Space around -->
<div class="bismillah-flex bismillah-justify-around">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Space evenly -->
<div class="bismillah-flex bismillah-justify-evenly">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Align Items</h2>

          <p className="text-muted-foreground mb-3">Align flex items along the cross axis:</p>
          <CodeBlock language="html">
{`<!-- Stretch (default) -->
<div class="bismillah-flex bismillah-items-stretch">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Start (top) -->
<div class="bismillah-flex bismillah-items-start">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Center (vertically centered) -->
<div class="bismillah-flex bismillah-items-center bismillah-h-32">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- End (bottom) -->
<div class="bismillah-flex bismillah-items-end">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Baseline -->
<div class="bismillah-flex bismillah-items-baseline">
  <div class="bismillah-text-3xl">Item 1</div>
  <div class="bismillah-text-sm">Item 2</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Flex Wrap</h2>

          <p className="text-muted-foreground mb-3">Control wrapping of flex items:</p>
          <CodeBlock language="html">
{`<!-- No wrap (items compress) -->
<div class="bismillah-flex bismillah-flex-nowrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Wrap (items move to next line) -->
<div class="bismillah-flex bismillah-flex-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Wrap reverse -->
<div class="bismillah-flex bismillah-flex-wrap-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Flex Grow & Shrink</h2>

          <p className="text-muted-foreground mb-3">Control how items grow or shrink:</p>
          <CodeBlock language="html">
{`<!-- Grow to fill available space -->
<div class="bismillah-flex">
  <div class="bismillah-flex-grow">Grows</div>
  <div>Fixed</div>
</div>

<!-- Shrink proportionally -->
<div class="bismillah-flex">
  <div class="bismillah-flex-shrink">Shrinks</div>
  <div>Fixed</div>
</div>

<!-- Don't grow or shrink -->
<div class="bismillah-flex">
  <div class="bismillah-flex-none">Fixed size</div>
  <div>Grows</div>
</div>

<!-- Flex-1 (grow and shrink) -->
<div class="bismillah-flex">
  <div class="bismillah-flex-1">Equal width</div>
  <div class="bismillah-flex-1">Equal width</div>
  <div class="bismillah-flex-1">Equal width</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Align Content</h2>

          <p className="text-muted-foreground mb-3">Align wrapped flex lines (when flex-wrap is active):</p>
          <CodeBlock language="html">
{`<!-- Start -->
<div class="bismillah-flex bismillah-flex-wrap bismillah-content-start bismillah-h-64">
  <!-- Items align to start -->
</div>

<!-- Center -->
<div class="bismillah-flex bismillah-flex-wrap bismillah-content-center bismillah-h-64">
  <!-- Items centered -->
</div>

<!-- Between -->
<div class="bismillah-flex bismillah-flex-wrap bismillah-content-between bismillah-h-64">
  <!-- Items spaced with gap between -->
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Gap</h2>

          <p className="text-muted-foreground mb-3">Add spacing between flex items:</p>
          <CodeBlock language="html">
{`<!-- Gap between items -->
<div class="bismillah-flex bismillah-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal gap only -->
<div class="bismillah-flex bismillah-gap-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Vertical gap only (for flex-col) -->
<div class="bismillah-flex bismillah-flex-col bismillah-gap-y-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Patterns</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Navigation Bar</h3>
              <CodeBlock language="html">
{`<nav class="bismillah-flex bismillah-items-center bismillah-justify-between bismillah-px-4 bismillah-py-3 bismillah-bg-gray-800 bismillah-text-white">
  <div class="bismillah-text-xl bismillah-font-bold">Logo</div>
  <div class="bismillah-flex bismillah-gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Centered Hero</h3>
              <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-items-center bismillah-justify-center bismillah-min-h-screen bismillah-bg-gray-100">
  <div class="bismillah-text-center">
    <h1 class="bismillah-text-5xl bismillah-font-bold bismillah-mb-4">Welcome</h1>
    <p class="bismillah-text-gray-600">Start building today</p>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sidebar Layout</h3>
              <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-gaps-0">
  <aside class="bismillah-w-64 bismillah-bg-gray-100 bismillah-flex-none">
    Sidebar
  </aside>
  <main class="bismillah-flex-1 bismillah-p-6">
    Main content
  </main>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Card Grid</h3>
              <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-flex-wrap bismillah-gap-4">
  <div class="bismillah-flex-1 bismillah-min-w-xs bismillah-bg-white bismillah-p-4 bismillah-rounded-lg bismillah-shadow">
    Card 1
  </div>
  <div class="bismillah-flex-1 bismillah-min-w-xs bismillah-bg-white bismillah-p-4 bismillah-rounded-lg bismillah-shadow">
    Card 2
  </div>
  <div class="bismillah-flex-1 bismillah-min-w-xs bismillah-bg-white bismillah-p-4 bismillah-rounded-lg bismillah-shadow">
    Card 3
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Button Group</h3>
              <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-gap-2">
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded">Save</button>
  <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-300 bismillah-rounded">Cancel</button>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Space Between</h3>
              <CodeBlock language="html">
{`<!-- Items at far sides -->
<div class="bismillah-flex bismillah-justify-between bismillah-items-center">
  <div>Left content</div>
  <div>Right content</div>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Quick Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Property</th>
                  <th className="border p-2 text-left">Classes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Display</td>
                  <td className="border p-2">flex, inline-flex</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">Direction</td>
                  <td className="border p-2">flex-row, flex-col, flex-row-reverse, flex-col-reverse</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Justify</td>
                  <td className="border p-2">justify-start, justify-center, justify-end, justify-between, justify-around, justify-evenly</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">Align Items</td>
                  <td className="border p-2">items-start, items-center, items-end, items-baseline, items-stretch</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Wrap</td>
                  <td className="border p-2">flex-wrap, flex-nowrap, flex-wrap-reverse</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">Grow/Shrink</td>
                  <td className="border p-2">flex-1, flex-grow, flex-shrink, flex-none</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
