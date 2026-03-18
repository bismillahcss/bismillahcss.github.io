import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function PseudoClassesPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Pseudo-Classes & Pseudo-Elements</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to use pseudo-class and pseudo-element variants in BismillahCSS to create interactive and dynamic styles.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">What are Pseudo-Classes?</h2>

          <p className="text-muted-foreground">
            Pseudo-classes are selectors that target specific states of an element without adding extra markup. BismillahCSS makes it easy to apply styles for these states using variant prefixes.
          </p>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 font-semibold">💡 Key Concept</p>
            <p className="text-blue-800 text-sm mt-2">
              Instead of writing `:hover` in CSS, you add a `hover:` prefix to BismillahCSS utilities directly in your HTML.
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Pseudo-Classes</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">:hover</h3>
              <p className="text-muted-foreground mb-2">Apply styles when the user hovers over an element:</p>
              <CodeBlock language="html">
{`<!-- Change background color on hover -->
<button class="bismillah-bg-blue-500 hover:bismillah-bg-blue-600 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
  Hover me
</button>

<!-- Change multiple properties on hover -->
<a href="#" class="bismillah-text-blue-500 hover:bismillah-text-blue-700 hover:bismillah-underline">
  Hover link
</a>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">:focus</h3>
              <p className="text-muted-foreground mb-2">Apply styles when an element receives focus:</p>
              <CodeBlock language="html">
{`<!-- Highlight input when focused -->
<input 
  type="text" 
  class="bismillah-border bismillah-border-gray-300 focus:bismillah-border-blue-500 focus:bismillah-ring-2 focus:bismillah-ring-blue-200 bismillah-px-3 bismillah-py-2 bismillah-rounded"
  placeholder="Click me"
/>

<!-- Change button style when focused -->
<button class="bismillah-bg-gray-200 focus:bismillah-outline-none focus:bismillah-ring-2 focus:bismillah-ring-blue-500 bismillah-px-4 bismillah-py-2 bismillah-rounded">
  Focus me
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">:active</h3>
              <p className="text-muted-foreground mb-2">Apply styles when an element is being activated (clicked):</p>
              <CodeBlock language="html">
{`<button class="bismillah-bg-blue-500 active:bismillah-bg-blue-800 active:bismillah-shadow-inner bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
  Press me
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">:disabled</h3>
              <p className="text-muted-foreground mb-2">Apply styles to disabled form elements:</p>
              <CodeBlock language="html">
{`<button disabled class="bismillah-bg-blue-500 disabled:bismillah-opacity-50 disabled:bismillah-cursor-not-allowed bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
  Disabled button
</button>

<input type="text" disabled class="bismillah-border bismillah-border-gray-300 disabled:bismillah-bg-gray-100 disabled:bismillah-cursor-not-allowed" />`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">:first-child & :last-child</h3>
              <p className="text-muted-foreground mb-2">Apply styles to the first or last child:</p>
              <CodeBlock language="html">
{`<ul>
  <li class="first:bismillah-border-t-0 bismillah-border-t bismillah-border-gray-200 bismillah-p-2">Item 1</li>
  <li class="first:bismillah-border-t-0 bismillah-border-t bismillah-border-gray-200 bismillah-p-2">Item 2</li>
  <li class="first:bismillah-border-t-0 bismillah-border-t bismillah-border-gray-200 bismillah-p-2">Item 3</li>
</ul>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">:checked</h3>
              <p className="text-muted-foreground mb-2">Apply styles when a checkbox or radio is checked:</p>
              <CodeBlock language="html">
{`<label class="bismillah-flex bismillah-items-center">
  <input 
    type="checkbox" 
    class="bismillah-h-4 bismillah-w-4 checked:bismillah-bg-blue-500"
  />
  <span class="bismillah-ml-2">Remember me</span>
</label>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">:not() - Negation</h3>
              <p className="text-muted-foreground mb-2">Apply styles to elements that don't match a selector:</p>
              <CodeBlock language="html">
{`<!-- Style all items except the last one with margin -->
<div class="not-last:bismillah-mb-4">Item 1</div>
<div class="not-last:bismillah-mb-4">Item 2</div>
<div>Item 3 (no margin)</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Group & Sibling Selectors</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">group-hover</h3>
              <p className="text-muted-foreground mb-2">Change child elements when hovering over a parent container:</p>
              <CodeBlock language="html">
{`<div class="group border rounded p-4 hover:bg-gray-100 cursor-pointer">
  <h3 class="bismillah-font-bold group-hover:bismillah-text-blue-600">
    Card Title
  </h3>
  <p class="bismillah-text-gray-600 group-hover:bismillah-text-gray-900">
    Card description
  </p>
  <button class="group-hover:bismillah-opacity-100 bismillah-opacity-0">
    Show on hover
  </button>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">group-focus</h3>
              <p className="text-muted-foreground mb-2">Similar to group-hover but triggers on focus:</p>
              <CodeBlock language="html">
{`<div class="group">
  <input 
    type="text" 
    placeholder="Focus me"
    class="bismillah-border bismillah-px-3 bismillah-py-2"
  />
  <span class="group-focus-within:bismillah-text-blue-500">
    Focused state message
  </span>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Pseudo-Elements</h2>

          <p className="text-muted-foreground mb-4">
            Pseudo-elements allow you to style specific parts of an element without adding extra HTML:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">::before & ::after</h3>
              <p className="text-muted-foreground mb-2">Add decorative content before or after elements:</p>
              <CodeBlock language="html">
{`<!-- Add icon before element -->
<div class="before:bismillah-content-['→'] before:bismillah-mr-2">Menu Item</div>

<!-- Add decoration after -->
<span class="after:bismillah-content-['*'] after:bismillah-text-red-500 after:bismillah-ml-1">
  Required field
</span>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">::placeholder</h3>
              <p className="text-muted-foreground mb-2">Style placeholder text in inputs:</p>
              <CodeBlock language="html">
{`<input 
  type="text" 
  placeholder="Enter your email"
  class="placeholder:bismillah-text-gray-400 placeholder:bismillah-italic"
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">::selection</h3>
              <p className="text-muted-foreground mb-2">Style selected text:</p>
              <CodeBlock language="html">
{`<p class="selection:bismillah-bg-blue-300 selection:bismillah-text-white">
  Select this text to see the custom selection color
</p>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">::first-line & ::first-letter</h3>
              <p className="text-muted-foreground mb-2">Style the first line or letter of text:</p>
              <CodeBlock language="html">
{`<p class="first-line:bismillah-font-bold first-letter:bismillah-text-2xl">
  This paragraph's first line will be bold and the first letter will be large.
</p>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Practical Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Interactive Button</h3>
              <CodeBlock language="html">
{`<button class="
  bismillah-bg-blue-600 
  bismillah-text-white 
  bismillah-px-6 
  bismillah-py-2 
  bismillah-rounded-lg 
  bismillah-font-semibold
  hover:bismillah-bg-blue-700
  active:bismillah-bg-blue-800
  active:bismillah-shadow-inner
  focus:bismillah-outline-none 
  focus:bismillah-ring-2 
  focus:bismillah-ring-blue-300
  disabled:bismillah-opacity-50
  disabled:bismillah-cursor-not-allowed
  transition-all
">
  Click me
</button>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Form Input with Focus State</h3>
              <CodeBlock language="html">
{`<div>
  <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium">
    Email Address
  </label>
  <input 
    type="email"
    class="
      bismillah-w-full
      bismillah-px-4
      bismillah-py-2
      bismillah-border 
      bismillah-border-gray-300
      bismillah-rounded-lg
      focus:bismillah-border-blue-500
      focus:bismillah-ring-2
      focus:bismillah-ring-blue-200
      focus:bismillah-outline-none
      placeholder:bismillah-text-gray-400
      disabled:bismillah-bg-gray-100
      disabled:bismillah-cursor-not-allowed
      transition-colors
    "
    placeholder="Enter your email"
  />
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Hover Card with Group</h3>
              <CodeBlock language="html">
{`<div class="group border rounded-lg p-6 hover:bismillah-shadow-lg hover:bismillah-bg-blue-50 cursor-pointer transition-all">
  <h3 class="bismillah-text-xl bismillah-font-bold group-hover:bismillah-text-blue-600 bismillah-mb-2">
    Hover over this card
  </h3>
  <p class="bismillah-text-gray-600 group-hover:bismillah-text-gray-900 bismillah-mb-4">
    The entire card is hoverable and affects all child elements
  </p>
  <button class="
    bismillah-bg-gray-200 
    bismillah-text-gray-800
    group-hover:bismillah-bg-blue-600 
    group-hover:bismillah-text-white
    bismillah-px-4 
    bismillah-py-2 
    bismillah-rounded
    transition-colors
  ">
    Learn More
  </button>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">List with Borders</h3>
              <CodeBlock language="html">
{`<ul class="space-y-0">
  <li class="first:bismillah-border-t-0 bismillah-border-t bismillah-border-gray-200 bismillah-px-4 bismillah-py-3 hover:bismillah-bg-gray-50">
    Item 1
  </li>
  <li class="first:bismillah-border-t-0 bismillah-border-t bismillah-border-gray-200 bismillah-px-4 bismillah-py-3 hover:bismillah-bg-gray-50">
    Item 2
  </li>
  <li class="first:bismillah-border-t-0 bismillah-border-t bismillah-border-gray-200 bismillah-px-4 bismillah-py-3 hover:bismillah-bg-gray-50">
    Item 3
  </li>
</ul>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Toggle Switch</h3>
              <CodeBlock language="html">
{`<label class="bismillah-flex bismillah-items-center bismillah-cursor-pointer">
  <input 
    type="checkbox"
    class="bismillah-sr-only checked:bismillah-peer"
  />
  <div class="
    bismillah-relative
    bismillah-h-6
    bismillah-w-11
    bismillah-bg-gray-300
    peer-checked:bismillah-bg-blue-600
    bismillah-rounded-full
    transition-colors
  "></div>
  <span class="bismillah-ml-3 bismillah-text-sm">Enable notifications</span>
</label>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Complete Variant Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Variant</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-left">CSS Pseudo-class</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-mono">hover:</td>
                  <td className="border p-2">Mouse hovers over element</td>
                  <td className="border p-2">:hover</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">focus:</td>
                  <td className="border p-2">Element receives focus</td>
                  <td className="border p-2">:focus</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">active:</td>
                  <td className="border p-2">Element is being clicked</td>
                  <td className="border p-2">:active</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">disabled:</td>
                  <td className="border p-2">Form element is disabled</td>
                  <td className="border p-2">:disabled</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">first:</td>
                  <td className="border p-2">First child element</td>
                  <td className="border p-2">:first-child</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">last:</td>
                  <td className="border p-2">Last child element</td>
                  <td className="border p-2">:last-child</td>
                </tr>
                <tr>
                  <td className="border p-2 font-mono">checked:</td>
                  <td className="border p-2">Checkbox/radio is checked</td>
                  <td className="border p-2">:checked</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2 font-mono">group-hover:</td>
                  <td className="border p-2">Parent is hovered</td>
                  <td className="border p-2">parent:hover element</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Tips & Best Practices</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Use transitions:</strong> Add `transition-colors` or `transition-all` to smooth pseudo-class changes.
            </li>
            <li>
              <strong>Combine variants:</strong> Stack multiple variants like `hover:active:bismillah-bg-color`.
            </li>
            <li>
              <strong>Focus states matter:</strong> Always provide clear focus styles for keyboard accessibility.
            </li>
            <li>
              <strong>Test disabled states:</strong> Make disabled elements visually distinct and non-interactive.
            </li>
            <li>
              <strong>Use group wisely:</strong> The `group` class helps manage related element interactions.
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
