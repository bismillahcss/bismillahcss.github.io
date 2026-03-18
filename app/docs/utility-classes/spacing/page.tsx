import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function SpacingPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Spacing Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Control margins, padding, and gaps between elements to create well-structured layouts.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Padding</h2>

          <p className="text-muted-foreground mb-3">Add internal spacing around element content:</p>
          <CodeBlock language="html">
{`<!-- All sides -->
<div class="bismillah-p-4">Padding on all sides</div>

<!-- Top & Bottom -->
<div class="bismillah-py-4">Vertical padding</div>

<!-- Left & Right -->
<div class="bismillah-px-4">Horizontal padding</div>

<!-- Individual sides -->
<div class="bismillah-pt-4">Padding top</div>
<div class="bismillah-pb-4">Padding bottom</div>
<div class="bismillah-pl-4">Padding left</div>
<div class="bismillah-pr-4">Padding right</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Margin</h2>

          <p className="text-muted-foreground mb-3">Add external spacing around elements:</p>
          <CodeBlock language="html">
{`<!-- All sides -->
<div class="bismillah-m-4">Margin on all sides</div>

<!-- Top & Bottom -->
<div class="bismillah-my-4">Vertical margin</div>

<!-- Left & Right -->
<div class="bismillah-mx-4">Horizontal margin</div>

<!-- Individual sides -->
<div class="bismillah-mt-4">Margin top</div>
<div class="bismillah-mb-4">Margin bottom</div>
<div class="bismillah-ml-4">Margin left</div>
<div class="bismillah-mr-4">Margin right</div>

<!-- Negative margins -->
<div class="bismillah--m-4">Negative margin</div>
<div class="bismillah--mt-2">Negative margin top</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Center Elements</h2>

          <p className="text-muted-foreground mb-3">Use marginauto to center elements:</p>
          <CodeBlock language="html">
{`<!-- Center horizontally -->
<div class="bismillah-mx-auto">Centered horizontally</div>

<!-- Center both ways -->
<div class="bismillah-mx-auto bismillah-my-auto">Centered both ways</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Gap</h2>

          <p className="text-muted-foreground mb-3">Control spacing between flex and grid items:</p>
          <CodeBlock language="html">
{`<!-- Gap between all items -->
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

<!-- Vertical gap only -->
<div class="bismillah-flex bismillah-flex-col bismillah-gap-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Spacing Scale</h2>

          <p className="text-muted-foreground mb-4">
            BismillahCSS uses a consistent spacing scale (in rem, with 1rem = 16px):
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Class</th>
                  <th className="border p-2 text-left">Size (px)</th>
                  <th className="border p-2 text-left">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-mono">-0</td>
                  <td className="border p-2">0px</td>
                  <td className="border p-2">No spacing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">-1</td>
                  <td className="border p-2">4px</td>
                  <td className="border p-2">Small gaps</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">-2</td>
                  <td className="border p-2">8px</td>
                  <td className="border p-2">Tight spacing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">-4</td>
                  <td className="border p-2">16px</td>
                  <td className="border p-2">Standard spacing</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">-6</td>
                  <td className="border p-2">24px</td>
                  <td className="border p-2">Normal spacing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">-8</td>
                  <td className="border p-2">32px</td>
                  <td className="border p-2">Generous spacing</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">-12</td>
                  <td className="border p-2">48px</td>
                  <td className="border p-2">Large gaps</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">-16</td>
                  <td className="border p-2">64px</td>
                  <td className="border p-2">Extra large gaps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Space Between</h2>

          <p className="text-muted-foreground mb-3">Add consistent spacing between child elements:</p>
          <CodeBlock language="html">
{`<!-- Add margin between each item -->
<div class="bismillah-space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal spacing -->
<div class="bismillah-space-x-4">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Patterns</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Padded Container</h3>
              <CodeBlock language="html">
{`<!-- Mobile: less padding, desktop: more padding -->
<div class="bismillah-p-4 md:bismillah-p-8 lg:bismillah-p-12">
  Content with responsive padding
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Spaced List</h3>
              <CodeBlock language="html">
{`<!-- Items with consistent spacing -->
<ul class="bismillah-space-y-2">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Form Fields</h3>
              <CodeBlock language="html">
{`<!-- Form fields with spacing -->
<form class="bismillah-space-y-4">
  <div>
    <label class="bismillah-block bismillah-mb-1">Email</label>
    <input type="email" class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-rounded" />
  </div>
  <div>
    <label class="bismillah-block bismillah-mb-1">Password</label>
    <input type="password" class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-rounded" />
  </div>
</form>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Grid with Gap</h3>
              <CodeBlock language="html">
{`<!-- Grid items with gaps -->
<div class="bismillah-grid bismillah-grid-cols-3 bismillah-gap-4">
  <div class="bismillah-bg-gray-100 bismillah-p-4">Card 1</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Card 2</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Card 3</div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Card Container</h3>
              <CodeBlock language="html">
{`<!-- Card with internal and external spacing -->
<div class="bismillah-mb-6">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-p-6 bismillah-shadow">
    <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Title</h3>
    <p class="bismillah-text-gray-600 bismillah-mb-4">Description</p>
    <button class="bismillah-mt-4">Action</button>
  </div>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Spacing Tips</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Use consistent values:</strong> Stick to the spacing scale for a cohesive design.
            </li>
            <li>
              <strong>Combine padding and margin:</strong> Use padding for internal spacing, margin for gaps between elements.
            </li>
            <li>
              <strong>Responsive spacing:</strong> Use different spacing on mobile vs. desktop for better layout.
            </li>
            <li>
              <strong>Space-between is helpful:</strong> Automatically add spacing between sequential items.
            </li>
            <li>
              <strong>Gap over margin:</strong> For flex and grid, use gap instead of margin on children.
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
