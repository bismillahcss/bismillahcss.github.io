import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function GridPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Grid Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Create complex layouts with CSS Grid and BismillahCSS grid utilities.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Display</h2>

          <p className="text-muted-foreground mb-3">Enable grid layout:</p>
          <CodeBlock language="html">
{`<!-- Basic grid container -->
<div class="bismillah-grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Inline grid -->
<div class="bismillah-inline-grid">
  <div>Item</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Columns</h2>

          <p className="text-muted-foreground mb-3">Define the number of columns:</p>
          <CodeBlock language="html">
{`<!-- 1 column -->
<div class="bismillah-grid bismillah-grid-cols-1">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 2 columns -->
<div class="bismillah-grid bismillah-grid-cols-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 3 columns -->
<div class="bismillah-grid bismillah-grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- 4 columns -->
<div class="bismillah-grid bismillah-grid-cols-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>

<!-- 6 columns -->
<div class="bismillah-grid bismillah-grid-cols-6">
  <!-- More items -->
</div>

<!-- 12 columns (Bootstrap-like) -->
<div class="bismillah-grid bismillah-grid-cols-12">
  <!-- For fine-grained layouts -->
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Rows</h2>

          <p className="text-muted-foreground mb-3">Define the number of rows:</p>
          <CodeBlock language="html">
{`<!-- 3 rows -->
<div class="bismillah-grid bismillah-grid-rows-3">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Gap</h2>

          <p className="text-muted-foreground mb-3">Add spacing between grid items:</p>
          <CodeBlock language="html">
{`<!-- Gap between cells -->
<div class="bismillah-grid bismillah-grid-cols-3 bismillah-gap-4">
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item 1</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item 2</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item 3</div>
</div>

<!-- Horizontal gap only -->
<div class="bismillah-grid bismillah-grid-cols-2 bismillah-gap-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Vertical gap only -->
<div class="bismillah-grid bismillah-grid-cols-2 bismillah-gap-y-6">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Item Span</h2>

          <p className="text-muted-foreground mb-3">Make items span multiple columns:</p>
          <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-3 bismillah-gap-4">
  <!-- Spans 2 columns -->
  <div class="bismillah-col-span-2 bismillah-bg-blue-500 bismillah-text-white bismillah-p-4">
    Wide item
  </div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item</div>
  
  <!-- Full width -->
  <div class="bismillah-col-span-3 bismillah-bg-green-500 bismillah-text-white bismillah-p-4">
    Full width item
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Row Span</h2>

          <p className="text-muted-foreground mb-3">Make items span multiple rows:</p>
          <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-3 bismillah-grid-rows-3 bismillah-gap-4 bismillah-h-96">
  <!-- Spans 2 rows -->
  <div class="bismillah-row-span-2 bismillah-bg-blue-500 bismillah-text-white bismillah-p-4">
    Tall item
  </div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Item</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Auto Flow</h2>

          <p className="text-muted-foreground mb-3">Control how items are placed in the grid:</p>
          <CodeBlock language="html">
{`<!-- Fill row by row (default) -->
<div class="bismillah-grid bismillah-grid-cols-3 bismillah-auto-rows-max">
  <!-- Items fill rows first -->
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Responsive Grid</h2>

          <p className="text-muted-foreground mb-3">Use responsive utilities for different screen sizes:</p>
          <CodeBlock language="html">
{`<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="bismillah-grid bismillah-grid-cols-1 md:bismillah-grid-cols-2 lg:bismillah-grid-cols-3 bismillah-gap-4">
  <div class="bismillah-bg-gray-100 bismillah-p-4">Card 1</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Card 2</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Card 3</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Patterns</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Card Grid</h3>
              <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-1 md:bismillah-grid-cols-2 lg:bismillah-grid-cols-3 bismillah-gap-6">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card 1</h3>
    <p class="bismillah-text-gray-600">Description</p>
  </div>
  <!-- Repeat for more cards -->
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dashboard Layout</h3>
              <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-12 bismillah-gap-4">
  <!-- Sidebar -->
  <div class="bismillah-col-span-3 bismillah-bg-gray-800">
    Sidebar
  </div>
  
  <!-- Main content -->
  <div class="bismillah-col-span-9">
    <div class="bismillah-grid bismillah-grid-cols-2 bismillah-gap-4">
      <div class="bismillah-bg-white bismillah-p-4 bismillah-rounded">Widget 1</div>
      <div class="bismillah-bg-white bismillah-p-4 bismillah-rounded">Widget 2</div>
    </div>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Hero with Sidebar</h3>
              <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-3 bismillah-gap-6 bismillah-mb-6">
  <!-- Hero spans 2 columns -->
  <div class="bismillah-col-span-2 bismillah-bg-blue-600 bismillah-text-white bismillah-p-8 bismillah-rounded-lg">
    <h1 class="bismillah-text-3xl bismillah-font-bold">Welcome</h1>
  </div>
  
  <!-- Sidebar -->
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded-lg">
    Sidebar
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Article with Sidebar</h3>
              <CodeBlock language="html">
{`<div class="bismillah-grid bismillah-grid-cols-12 bismillah-gap-8">
  <!-- Article -->
  <article class="bismillah-col-span-8">
    <h1 class="bismillah-text-3xl bismillah-font-bold bismillah-mb-4">Article Title</h1>
    <p class="bismillah-text-gray-600">Content...</p>
  </article>
  
  <!-- Sidebar -->
  <aside class="bismillah-col-span-4 bismillah-bg-gray-50 bismillah-p-6 bismillah-rounded-lg">
    Related content
  </aside>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Feature Grid</h3>
              <CodeBlock language="html">
{`<!-- 2-column featured item + 2-column regular items -->
<div class="bismillah-grid bismillah-grid-cols-4 bismillah-gap-4">
  <div class="bismillah-col-span-2 bismillah-row-span-2 bismillah-bg-gradient-to-br bismillah-from-blue-500 bismillah-to-purple-600 bismillah-text-white bismillah-p-6 bismillah-rounded-lg">
    Featured
  </div>
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Item 1</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Item 2</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Item 3</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4 bismillah-rounded">Item 4</div>
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
                  <td className="border p-2">grid, inline-grid</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">Columns</td>
                  <td className="border p-2">grid-cols-1 through grid-cols-12</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Rows</td>
                  <td className="border p-2">grid-rows-1 through grid-rows-6</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">Column Span</td>
                  <td className="border p-2">col-span-1 through col-span-12</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Row Span</td>
                  <td className="border p-2">row-span-1 through row-span-6</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-semibold">Gap</td>
                  <td className="border p-2">gap-1 through gap-12, gap-x-*, gap-y-*</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Grid Tips</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Responsive first:</strong> Start with 1 column and increase for larger screens.
            </li>
            <li>
              <strong>Use gap:</strong> Gap is cleaner than adding margins to individual items.
            </li>
            <li>
              <strong>Combine with flexbox:</strong> Use flex inside grid items for finer control.
            </li>
            <li>
              <strong>Semantic columns:</strong> Use more columns (12) for finer control.
            </li>
            <li>
              <strong>Test layouts:</strong> Grid changes can be dramatic—test at all breakpoints.
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
