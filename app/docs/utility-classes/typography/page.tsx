import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function TypographyPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Typography Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Control font sizes, weights, styles, and other text properties with typography utilities.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Font Size</h2>

          <p className="text-muted-foreground mb-3">Control text size:</p>
          <CodeBlock language="html">
{`<p class="bismillah-text-xs">Extra small text</p>
<p class="bismillah-text-sm">Small text</p>
<p class="bismillah-text-base">Base (normal) text</p>
<p class="bismillah-text-lg">Large text</p>
<p class="bismillah-text-xl">Extra large text</p>
<p class="bismillah-text-2xl">2XL text</p>
<p class="bismillah-text-3xl">3XL text</p>
<p class="bismillah-text-4xl">4XL text</p>
<p class="bismillah-text-5xl">5XL text</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Font Weight</h2>

          <p className="text-muted-foreground mb-3">Control text thickness:</p>
          <CodeBlock language="html">
{`<p class="bismillah-font-thin">Thin (100)</p>
<p class="bismillah-font-extralight">Extra light (200)</p>
<p class="bismillah-font-light">Light (300)</p>
<p class="bismillah-font-normal">Normal (400)</p>
<p class="bismillah-font-medium">Medium (500)</p>
<p class="bismillah-font-semibold">Semibold (600)</p>
<p class="bismillah-font-bold">Bold (700)</p>
<p class="bismillah-font-extrabold">Extra bold (800)</p>
<p class="bismillah-font-black">Black (900)</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Font Family</h2>

          <p className="text-muted-foreground mb-3">Control font family:</p>
          <CodeBlock language="html">
{`<p class="bismillah-font-sans">Sans serif font</p>
<p class="bismillah-font-serif">Serif font</p>
<p class="bismillah-font-mono">Monospace font</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Color</h2>

          <p className="text-muted-foreground mb-3">Control text color:</p>
          <CodeBlock language="html">
{`<p class="bismillah-text-gray-900">Dark gray text</p>
<p class="bismillah-text-gray-600">Medium gray text</p>
<p class="bismillah-text-gray-400">Light gray text</p>
<p class="bismillah-text-blue-600">Blue text</p>
<p class="bismillah-text-red-500">Red text</p>
<p class="bismillah-text-green-600">Green text</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Alignment</h2>

          <p className="text-muted-foreground mb-3">Control text alignment:</p>
          <CodeBlock language="html">
{`<p class="bismillah-text-left">Left aligned</p>
<p class="bismillah-text-center">Center aligned</p>
<p class="bismillah-text-right">Right aligned</p>
<p class="bismillah-text-justify">Justified</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Decoration</h2>

          <p className="text-muted-foreground mb-3">Add or remove text decorations:</p>
          <CodeBlock language="html">
{`<a class="bismillah-underline">Underlined link</a>
<p class="bissmill-no-underline">No underline</p>
<p class="bismillah-line-through">Strikethrough text</p>
<p class="bismillah-overline">Overline text</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Transform</h2>

          <p className="text-muted-foreground mb-3">Control text transformation:</p>
          <CodeBlock language="html">
{`<p class="bismillah-uppercase">UPPERCASE TEXT</p>
<p class="bismillah-lowercase">lowercase text</p>
<p class="bismillah-capitalize">Capitalize text</p>
<p class="bismillah-normal-case">normal case text</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Line Height</h2>

          <p className="text-muted-foreground mb-3">Control spacing between lines:</p>
          <CodeBlock language="html">
{`<p class="bismillah-leading-3">Very tight line height</p>
<p class="bismillah-leading-normal">Normal line height</p>
<p class="bismillah-leading-relaxed">Relaxed line height</p>
<p class="bismillah-leading-loose">Loose line height</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Letter Spacing</h2>

          <p className="text-muted-foreground mb-3">Control spacing between letters:</p>
          <CodeBlock language="html">
{`<p class="bismillah-tracking-tighter">Tighter letter spacing</p>
<p class="bismillah-tracking-normal">Normal letter spacing</p>
<p class="bismillah-tracking-wide">Wide letter spacing</p>
<p class="bismillah-tracking-wider">Wider letter spacing</p>
<p class="bismillah-tracking-widest">Widest letter spacing</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Overflow</h2>

          <p className="text-muted-foreground mb-3">Handle text that exceeds container:</p>
          <CodeBlock language="html">
{`<!-- Single line with ellipsis -->
<p class="bismillah-truncate">This text will be truncated with ellipsis if it's too long</p>

<!-- Multiple lines with ellipsis -->
<p class="bismillah-line-clamp-3">This text will show maximum 3 lines before being truncated with ellipsis</p>

<!-- Text wrapping -->
<p class="bismillah-break-words">Break-words ensures text wraps to next line</p>
<p class="bismillah-break-all">Break-all breaks text within words</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Font Style</h2>

          <p className="text-muted-foreground mb-3">Set italic or normal style:</p>
          <CodeBlock language="html">
{`<p class="bismillah-italic">Italic text</p>
<p class="bismillah-not-italic">Normal (not italic) text</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Shadow</h2>

          <p className="text-muted-foreground mb-3">Add shadow to text:</p>
          <CodeBlock language="html">
{`<p class="bismillah-text-shadow">Text with shadow</p>
<p class="bismillah-text-shadow-lg">Text with larger shadow</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Vertical Alignment</h2>

          <p className="text-muted-foreground mb-3">Align inline or table-cell elements:</p>
          <CodeBlock language="html">
{`<div class="bismillah-flex bismillah-items-start">Top aligned items</div>
<div class="bismillah-flex bismillah-items-center">Center aligned items</div>
<div class="bismillah-flex bismillah-items-end">Bottom aligned items</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Patterns</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Heading Styles</h3>
              <CodeBlock language="html">
{`<h1 class="bismillah-text-4xl bismillah-font-bold bismillah-text-gray-900">Main Heading</h1>
<h2 class="bismillah-text-3xl bismillah-font-bold bismillah-text-gray-900 bismillah-mt-8">Subheading</h2>
<h3 class="bismillah-text-2xl bismillah-font-semibold bismillah-text-gray-900 bismillah-mt-6">Subsection</h3>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Body Text</h3>
              <CodeBlock language="html">
{`<p class="bismillah-text-base bismillah-text-gray-700 bismillah-leading-relaxed">
  This is a paragraph of body text with relaxed line height for better readability.
</p>

<p class="bismillah-text-sm bismillah-text-gray-600">
  This is smaller supplementary text.
</p>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Label & Caption</h3>
              <CodeBlock language="html">
{`<label class="bismillah-block bismillah-text-sm bismillah-font-medium bismillah-text-gray-700 bismillah-mb-1">
  Email Address
</label>

<span class="bismillah-text-xs bismillah-text-gray-500 bismillah-uppercase bismillah-tracking-wide">
  Caption text
</span>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Responsive Typography</h3>
              <CodeBlock language="html">
{`<!-- Small on mobile, larger on desktop -->
<h1 class="bismillah-text-2xl md:bismillah-text-4xl lg:bismillah-text-5xl bismillah-font-bold">
  Responsive Heading
</h1>

<p class="bismillah-text-sm md:bismillah-text-base lg:bismillah-text-lg">
  Responsive paragraph text
</p>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Combining Utilities</h2>

          <CodeBlock language="html">
{`<!-- Create a nice heading -->
<h1 class="bismillah-text-3xl bismillah-font-bold bismillah-text-gray-900 bismillah-tracking-tight bismillah-leading-tight">
  Beautiful Typography
</h1>

<!-- Create readable body text -->
<p class="bismillah-text-base bismillah-text-gray-700 bismillah-leading-relaxed bismillah-max-w-2xl">
  Combine multiple utilities to create professional typography that's both beautiful and readable.
</p>

<!-- Create a link -->
<a href="#" class="bismillah-text-blue-600 bismillah-font-medium bismillah-underline hover:bismillah-text-blue-700">
  Learn more
</a>`}
          </CodeBlock>
        </section>
      </div>
    </PageTransition>
  )
}
