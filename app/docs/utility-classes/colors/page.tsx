import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ColorsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Color Utilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Use color utilities to control text, background, border, and accent colors throughout your project.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Background Colors</h2>

          <p className="text-muted-foreground mb-3">Apply background colors to elements:</p>
          <CodeBlock language="html">
{`<div class="bismillah-bg-white">White background</div>
<div class="bismillah-bg-gray-100">Light gray background</div>
<div class="bismillah-bg-blue-500">Blue background</div>
<div class="bismillah-bg-green-600">Green background</div>
<div class="bismillah-bg-red-500">Red background</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Text Colors</h2>

          <p className="text-muted-foreground mb-3">Control text color:</p>
          <CodeBlock language="html">
{`<p class="bismillah-text-gray-900">Dark text</p>
<p class="bismillah-text-gray-600">Medium text</p>
<p class="bismillah-text-blue-600">Blue text</p>
<p class="bismillah-text-green-600">Green text</p>
<p class="bismillah-text-red-600">Red text</p>
<p class="bismillah-text-white">White text</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Border Colors</h2>

          <p className="text-muted-foreground mb-3">Apply border colors:</p>
          <CodeBlock language="html">
{`<div class="bismillah-border-2 bismillah-border-gray-300">Gray border</div>
<div class="bismillah-border-2 bismillah-border-blue-500">Blue border</div>
<div class="bismillah-border-2 bismillah-border-red-500">Red border</div>
<div class="bismillah-border-t bismillah-border-green-600">Top green border</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Opacity</h2>

          <p className="text-muted-foreground mb-3">Control color opacity:</p>
          <CodeBlock language="html">
{`<div class="bismillah-bg-blue-500 bismillah-opacity-100">100% opacity</div>
<div class="bismillah-bg-blue-500 bismillah-opacity-75">75% opacity</div>
<div class="bismillah-bg-blue-500 bismillah-opacity-50">50% opacity</div>
<div class="bismillah-bg-blue-500 bismillah-opacity-25">25% opacity</div>
<div class="bismillah-bg-blue-500 bismillah-opacity-0">0% opacity</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Color Palette</h2>

          <p className="text-muted-foreground mb-4">BismillahCSS includes a comprehensive color palette:</p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Gray Scale</h3>
              <div className="grid grid-cols-5 gap-2">
                {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
                  <div key={shade} className={`p-3 rounded text-white text-center text-xs font-semibold ${shade === '50' ? 'bg-gray-100 text-black border border-gray-200' : `bg-gray-${shade}`}`}>
                    {shade}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Primary Colors</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Blues, reds, greens, yellows, purples, and other primary colors available in multiple shades (50-900).
              </p>
              <CodeBlock language="html">
{`<!-- Each color has multiple shades -->
<div class="bismillah-bg-blue-50">Very light blue</div>
<div class="bismillah-bg-blue-500">Medium blue</div>
<div class="bismillah-bg-blue-900">Dark blue</div>

<!-- Works with all properties -->
<p class="bismillah-text-red-600">Red text</p>
<div class="bismillah-border bismillah-border-green-500">Green border</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Interactive States with Colors</h2>

          <p className="text-muted-foreground mb-3">Combine colors with pseudo-classes:</p>
          <CodeBlock language="html">
{`<!-- Button with hover color change -->
<button class="bismillah-bg-blue-600 hover:bismillah-bg-blue-700 active:bismillah-bg-blue-800 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
  Click me
</button>

<!-- Link with hover text color -->
<a href="#" class="bismillah-text-blue-600 hover:bismillah-text-blue-800">
  Link
</a>

<!-- Card with hover effects -->
<div class="bismillah-bg-white hover:bismillah-bg-gray-50 bismillah-border bismillah-border-gray-200 hover:bismillah-border-gray-300 bismillah-p-4 bismillah-rounded">
  Hover me
</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Dark Mode Colors</h2>

              <p className="text-muted-foreground mb-3">Use appropriate colors for dark mode:</p>
              <CodeBlock language="html">
{`<!-- Light background in light mode, dark in dark mode -->
<div class="bismillah-bg-white dark:bismillah-bg-gray-900">
  <!-- Light text in light mode, white in dark mode -->
  <p class="bismillah-text-gray-900 dark:bismillah-text-white">
    Content
  </p>
</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Semantic Colors</h2>

              <p className="text-muted-foreground mb-3">Use colors semantically:</p>
              <CodeBlock language="html">
{`<!-- Success state -->
<div class="bismillah-text-green-600">✓ Success!</div>

<!-- Error state -->
<div class="bismillah-text-red-600">✗ Error</div>

<!-- Warning state -->
<div class="bismillah-text-yellow-600">⚠ Warning</div>

<!-- Info state -->
<div class="bismillah-text-blue-600">ℹ Information</div>`}
              </CodeBlock>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold">Common Patterns</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Colored Alert</h3>
                  <CodeBlock language="html">
{`<div class="bismillah-bg-blue-50 bismillah-border-l-4 bismillah-border-blue-500 bismillah-p-4 bismillah-text-blue-800">
  This is an informational alert
</div>`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Colored Badge</h3>
                  <CodeBlock language="html">
{`<span class="bismillah-bg-blue-200 bismillah-text-blue-800 bismillah-px-3 bismillah-py-1 bismillah-rounded-full text-sm">
  Badge
</span>`}
                  </CodeBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Gradient Background</h3>
                  <CodeBlock language="html">
{`<div class="bismillah-bg-gradient-to-r bismillah-from-blue-500 bismillah-to-purple-600 bismillah-text-white bismillah-p-8">
  Gradient background
</div>`}
                  </CodeBlock>
                </div>
              </div>
            </section>
          </div>
        </PageTransition>
      )
    }
