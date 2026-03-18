import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function LayoutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Layout Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Control positioning, sizing, and layout with BismillahCSS layout utilities.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Display</h2>

          <p className="text-muted-foreground mb-3">Control the display property:</p>
          <CodeBlock language="html">
{`<div class="bismillah-block">Block element</div>
<div class="bismillah-inline-block">Inline-block</div>
<div class="bismillah-inline">Inline element</div>
<div class="bismillah-none">Hidden element</div>
<div class="bismillah-flex">Flex container</div>
<div class="bismillah-grid">Grid container</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Position</h2>

          <p className="text-muted-foreground mb-3">Control element positioning:</p>
          <CodeBlock language="html">
{`<div class="bismillah-static">Static position</div>
<div class="bismillah-relative">Relative position</div>
<div class="bismillah-absolute">Absolute position</div>
<div class="bismillah-fixed">Fixed position</div>
<div class="bismillah-sticky">Sticky position</div>`}
          </CodeBlock>

          <p className="text-muted-foreground mb-3 mt-4">Positioning coordinates (top, right, bottom, left, inset):</p>
          <CodeBlock language="html">
{`<!-- Spacing from edges -->
<div class="bismillah-absolute bismillah-top-0 bismillah-right-0">Top-right</div>
<div class="bismillah-fixed bismillah-inset-0">Cover entire screen</div>
<div class="bismillah-absolute bismillah-top-2 bismillah-left-2">With offset</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Size & Dimensions</h2>

          <p className="text-muted-foreground mb-3">Control width and height:</p>
          <CodeBlock language="html">
{`<!-- Width -->
<div class="bismillah-w-full">Full width</div>
<div class="bismillah-w-1/2">Half width</div>
<div class="bismillah-w-1/3">One-third width</div>
<div class="bismillah-w-64">16rem width</div>
<div class="bismillah-w-screen">Full viewport width</div>
<div class="bismillah-max-w-md">Max width medium</div>
<div class="bismillah-min-w-fit">Min width fit content</div>

<!-- Height -->
<div class="bismillah-h-full">Full height</div>
<div class="bismillah-h-screen">Full viewport height</div>
<div class="bismillah-h-64">16rem height</div>
<div class="bismillah-max-h-xs">Max height extra small</div>
<div class="bismillah-min-h-full">Min height full</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Overflow</h2>

          <p className="text-muted-foreground mb-3">Control how content overflows containers:</p>
          <CodeBlock language="html">
{`<div class="bismillah-overflow-auto">Auto scroll if needed</div>
<div class="bismillah-overflow-hidden">Hide overflow</div>
<div class="bismillah-overflow-x-auto bismillah-overflow-y-hidden">Scroll horizontally</div>
<div class="bismillah-overflow-ellipsis">Text ellipsis</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Container</h2>

          <p className="text-muted-foreground mb-3">Center and constrain content:</p>
          <CodeBlock language="html">
{`<!-- Max-width container centered -->
<div class="bismillah-container bismillah-mx-auto">
  Content with max-width, centered horizontally
</div>

<!-- With padding -->
<div class="bismillah-container bismillah-mx-auto bismillah-px-4">
  Content with padding on sides
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Visibility</h2>

          <p className="text-muted-foreground mb-3">Control element visibility:</p>
          <CodeBlock language="html">
{`<div class="bismillah-visible">Visible element</div>
<div class="bismillah-invisible">Invisible (takes up space)</div>
<div class="bismillah-hidden">Hidden (doesn't take up space)</div>
<div class="bismillah-sr-only">Screen reader only (hidden visually)</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Z-Index</h2>

          <p className="text-muted-foreground mb-3">Control stacking order:</p>
          <CodeBlock language="html">
{`<div class="bismillah-z-0">Base layer</div>
<div class="bismillah-z-10">Higher layer</div>
<div class="bismillah-z-50">Even higher</div>
<div class="bismillah-z-auto">Auto z-index</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Patterns</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Full Screen Overlay</h3>
              <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-z-50">
  <!-- Content centered on overlay -->
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sticky Header</h3>
              <CodeBlock language="html">
{`<header class="bismillah-sticky bismillah-top-0 bismillah-z-40 bismillah-bg-white bismillah-shadow">
  Navigation that sticks to top
</header>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Fixed Sidebar</h3>
              <CodeBlock language="html">
{`<aside class="bismillah-fixed bismillah-left-0 bismillah-top-0 bismillah-h-screen bismillah-w-64 bismillah-bg-gray-100">
  Sidebar content
</aside>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Centered Content</h3>
              <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-items-center bismillah-justify-center bismillah-h-screen">
  Content centered both vertically and horizontally
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Responsive Layout</h2>

          <p className="text-muted-foreground mb-3">Use responsive variants for different screen sizes:</p>
          <CodeBlock language="html">
{`<!-- Full width on mobile, contained on larger screens -->
<div class="bismillah-w-full md:bismillah-max-w-4xl bismillah-mx-auto">
  Responsive width
</div>

<!-- Hide on mobile, show on desktop -->
<div class="bismillah-hidden md:bismillah-block">
  Desktop only content
</div>

<!-- Different sizes at different breakpoints -->
<div class="bismillah-h-32 md:bismillah-h-48 lg:bismillah-h-64">
  Responsive height
</div>`}
          </CodeBlock>
        </section>
      </div>
    </PageTransition>
  )
}
