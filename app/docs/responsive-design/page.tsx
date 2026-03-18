import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ResponsiveDesignPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Responsive Design</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to build responsive layouts that work beautifully on all screen sizes using BismillahCSS breakpoints and utilities.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Mobile-First Approach</h2>

          <p className="text-muted-foreground">
            BismillahCSS uses a mobile-first approach to responsive design. This means you write styles for mobile devices first, then add media queries for larger screens using responsive breakpoints.
          </p>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-900 font-semibold">💡 Mobile-First Benefits</p>
            <ul className="text-amber-800 text-sm mt-2 space-y-1 list-disc pl-5">
              <li>Ensures your site works on mobile first (most users)</li>
              <li>Smaller CSS for mobile devices</li>
              <li>Forces you to prioritize important content</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Breakpoints</h2>

          <p className="text-muted-foreground mb-4">
            BismillahCSS includes the following responsive breakpoints:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Breakpoint</th>
                  <th className="border p-2 text-left">Min Width</th>
                  <th className="border p-2 text-left">Max Width</th>
                  <th className="border p-2 text-left">Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-mono font-semibold">-</td>
                  <td className="border p-2">0px</td>
                  <td className="border p-2">639px</td>
                  <td className="border p-2">Mobile (default, no prefix needed)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono font-semibold">sm:</td>
                  <td className="border p-2">640px</td>
                  <td className="border p-2">767px</td>
                  <td className="border p-2">Small devices</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono font-semibold">md:</td>
                  <td className="border p-2">768px</td>
                  <td className="border p-2">1023px</td>
                  <td className="border p-2">Tablets & small laptops</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono font-semibold">lg:</td>
                  <td className="border p-2">1024px</td>
                  <td className="border p-2">1279px</td>
                  <td className="border p-2">Laptops</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono font-semibold">xl:</td>
                  <td className="border p-2">1280px</td>
                  <td className="border p-2">1535px</td>
                  <td className="border p-2">Large screens</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono font-semibold">2xl:</td>
                  <td className="border p-2">1536px+</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">Extra large screens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Using Breakpoints</h2>

          <p className="text-muted-foreground mb-4">
            Add breakpoint prefixes to any utility class:
          </p>

          <CodeBlock language="html">
{`<!-- Mobile-first: 1 column by default -->
<!-- sm: 2 columns on small screens -->
<!-- md: 3 columns on medium screens -->
<!-- lg: 4 columns on large screens -->
<div class="bismillah-grid bismillah-grid-cols-1 sm:bismillah-grid-cols-2 md:bismillah-grid-cols-3 lg:bismillah-grid-cols-4 bismillah-gap-4">
  <div class="bismillah-bg-gray-100 bismillah-p-4">Column</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Column</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Column</div>
  <div class="bismillah-bg-gray-100 bismillah-p-4">Column</div>
</div>`}
          </CodeBlock>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 font-semibold">📝 How to Read This</p>
            <p className="text-blue-800 text-sm mt-2">
              "On mobile, use 1 column. When the screen is 640px or wider, use 2 columns. When it's 768px or wider, use 3 columns. When it's 1024px or wider, use 4 columns."
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Responsive Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hero Section</h3>
              <CodeBlock language="html">
{`<section class="bismillah-py-12 md:bismillah-py-24 bismillah-px-4">
  <div class="bismillah-container bismillah-mx-auto">
    <h1 class="bismillah-text-2xl md:bismillah-text-4xl lg:bismillah-text-5xl bismillah-font-bold bismillah-mb-4">
      Welcome to BismillahCSS
    </h1>
    <p class="bismillah-text-base md:bismillah-text-lg bismillah-text-gray-600 bismillah-max-w-2xl">
      Build responsive designs without leaving your HTML
    </p>
  </div>
</section>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Two-Column Layout</h3>
              <CodeBlock language="html">
{`<!-- Stacked on mobile, side-by-side on larger screens -->
<div class="bismillah-flex bismillah-flex-col md:bismillah-flex-row bismillah-gap-8">
  <div class="bismillah-flex-1">
    <h2 class="bismillah-text-2xl bismillah-font-bold bismillah-mb-3">Left Content</h2>
    <p class="bismillah-text-gray-600">Your content here</p>
  </div>
  <div class="bismillah-flex-1">
    <h2 class="bismillah-text-2xl bismillah-font-bold bismillah-mb-3">Right Content</h2>
    <p class="bismillah-text-gray-600">Your content here</p>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Navigation Bar</h3>
              <CodeBlock language="html">
{`<nav class="bismillah-bg-gray-900 bismillah-text-white">
  <div class="bismillah-container bismillah-mx-auto bismillah-px-4 bismillah-py-4">
    <!-- On mobile: stacked, On larger screens: flex row -->
    <div class="bismillah-flex bismillah-flex-col sm:bismillah-flex-row bismillah-items-center bismillah-justify-between bismillah-gap-4">
      <div class="bismillah-text-2xl bismillah-font-bold">Logo</div>
      <div class="bismillah-flex bismillah-flex-col sm:bismillah-flex-row bismillah-gap-2 sm:bismillah-gap-6 bismillah-w-full sm:bismillah-w-auto">
        <a href="#" class="hover:bismillah-text-gray-300">Home</a>
        <a href="#" class="hover:bismillah-text-gray-300">About</a>
        <a href="#" class="hover:bismillah-text-gray-300">Contact</a>
      </div>
    </div>
  </div>
</nav>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Responsive Spacing</h3>
              <CodeBlock language="html">
{`<!-- Different padding on different screen sizes -->
<div class="bismillah-p-4 md:bismillah-p-8 lg:bismillah-p-12">
  <h2 class="bismillah-mb-2 md:bismillah-mb-4 lg:bismillah-mb-6 bismillah-text-lg md:bismillah-text-xl lg:bismillah-text-2xl">
    Responsive Content
  </h2>
  <p class="bismillah-text-sm md:bismillah-text-base lg:bismillah-text-lg">
    Padding and text size adjust based on screen size
  </p>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Responsive Grid</h3>
              <CodeBlock language="html">
{`<!-- Card grid that adapts to screen size -->
<div class="bismillah-grid bismillah-grid-cols-1 sm:bismillah-grid-cols-2 lg:bismillah-grid-cols-4 bismillah-gap-4">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-4">
    <h3 class="bismillah-font-bold bismillah-mb-2">Card 1</h3>
    <p class="bismillah-text-sm bismillah-text-gray-600">Content</p>
  </div>
  <!-- Repeat for more cards -->
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Hidden/Visible Elements</h3>
              <CodeBlock language="html">
{`<!-- Show on mobile, hide on larger screens -->
<button class="md:bismillah-hidden">Mobile Menu</button>

<!-- Hide on mobile, show on larger screens -->
<div class="bismillah-hidden md:bismillah-block">
  Desktop Navigation Menu
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Responsive Text</h2>

          <p className="text-muted-foreground mb-4">
            Adjust font sizes for different screen sizes for better readability:
          </p>

          <CodeBlock language="html">
{`<h1 class="bismillah-text-2xl sm:bismillah-text-3xl md:bismillah-text-4xl lg:bismillah-text-5xl bismillah-font-bold">
  Responsive Heading
</h1>

<p class="bismillah-text-sm sm:bismillah-text-base md:bismillah-text-lg bismillah-text-gray-600">
  Responsive body text that scales with screen size
</p>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Responsive Images</h2>

          <p className="text-muted-foreground mb-4">
            Scale images responsively using width utilities:
          </p>

          <CodeBlock language="html">
{`<!-- Full width on mobile, half width on medium screens, and so on -->
<img 
  src="image.jpg" 
  class="bismillah-w-full md:bismillah-w-1/2 lg:bismillah-w-1/3 bismillah-h-auto bismillah-rounded-lg"
  alt="Responsive image"
/>

<!-- Using max-width for responsive behavior -->
<img 
  src="image.jpg" 
  class="bismillah-max-w-full md:bismillah-max-w-md bismillah-h-auto"
  alt="Responsive image"
/>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Container Queries (Advanced)</h2>

          <p className="text-muted-foreground mb-4">
            For container-based responsive design within components:
          </p>

          <CodeBlock language="html">
{`<!-- The container with responsive context -->
<div class="bismillah-container bismillah-mx-auto bismillah-px-4">
  <div class="@container">
    <!-- Respond to container size, not viewport -->
    <h2 class="@sm:bismillah-text-lg @md:bismillah-text-xl @lg:bismillah-text-2xl">
      Container-relative heading
    </h2>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Testing Responsive Design</h2>

          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">① Use Browser DevTools</h3>
              <p className="text-sm text-muted-foreground">
                Press F12 to open DevTools, click the responsive design button, and test different screen sizes.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">② Test Real Devices</h3>
              <p className="text-sm text-muted-foreground">
                Always test on actual phones and tablets to ensure your design looks good.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">③ Common Breakpoints to Test</h3>
              <p className="text-sm text-muted-foreground">
                Test at: 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop)
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Responsive Design Tips</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Start mobile-first:</strong> Design for mobile first, then enhance for larger screens.
            </li>
            <li>
              <strong>Test early:</strong> Don't wait until the end to test responsive behavior.
            </li>
            <li>
              <strong>Use flexible layouts:</strong> Prefer flexbox and grid for flexible, responsive layouts.
            </li>
            <li>
              <strong>Keep it simple:</strong> Don't overcomplicate responsive designs with too many breakpoints.
            </li>
            <li>
              <strong>Use relative units:</strong> Use `%`, `em`, `rem` instead of fixed `px` where possible.
            </li>
            <li>
              <strong>Consider touch:</strong> Make buttons and links larger on mobile (minimum 44x44px).
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
