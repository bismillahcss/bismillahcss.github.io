import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function FormsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Form Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Build accessible and beautiful forms with BismillahCSS utilities for inputs, labels, validation, and more.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Basic Input</h2>

          <p className="text-muted-foreground mb-3">A simple text input field:</p>
          <CodeBlock language="html">
{`<div>
  <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
    Email
  </label>
  <input 
    type="email"
    class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg focus:bismillah-outline-none focus:bismillah-ring-2 focus:bismillah-ring-blue-500"
    placeholder="you@example.com"
  />
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Form Controls</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Text Input</h3>
              <CodeBlock language="html">
{`<input 
  type="text"
  placeholder="Enter text"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Textarea</h3>
              <CodeBlock language="html">
{`<textarea 
  placeholder="Enter message"
  rows="4"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg focus:bismillah-ring-2 focus:bismillah-ring-blue-500"
></textarea>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Select</h3>
              <CodeBlock language="html">
{`<select class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg focus:bismillah-ring-2 focus:bismillah-ring-blue-500">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Checkbox</h3>
              <CodeBlock language="html">
{`<label class="bismillah-flex bismillah-items-center">
  <input 
    type="checkbox"
    class="bismillah-w-4 bismillah-h-4 bismillah-border bismillah-border-gray-300 bismillah-rounded"
  />
  <span class="bismillah-ml-2 bismillah-text-sm bismillah-text-gray-700">Remember me</span>
</label>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Radio Button</h3>
              <CodeBlock language="html">
{`<fieldset class="bismillah-space-y-2">
  <label class="bismillah-flex bismillah-items-center">
    <input 
      type="radio"
      name="option"
      class="bismillah-w-4 bismillah-h-4"
    />
    <span class="bismillah-ml-2 bismillah-text-sm">Option 1</span>
  </label>
  <label class="bismillah-flex bismillah-items-center">
    <input 
      type="radio"
      name="option"
      class="bismillah-w-4 bismillah-h-4"
    />
    <span class="bismillah-ml-2 bismillah-text-sm">Option 2</span>
  </label>
</fieldset>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Form States</h2>

          <CodeBlock language="html">
{`<!-- Normal state -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
  placeholder="Normal"
/>

<!-- Focus state -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-blue-500 bismillah-rounded-lg bismillah-ring-2 bismillah-ring-blue-200"
  placeholder="Focused"
/>

<!-- Valid state -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-green-500 bismillah-rounded-lg"
  placeholder="Valid"
/>

<!-- Error state -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-red-500 bismillah-rounded-lg"
  placeholder="Error"
/>

<!-- Disabled state -->
<input
  type="text"
  disabled
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg bismillah-bg-gray-100 bismillah-cursor-not-allowed"
  placeholder="Disabled"
/>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Form Layout</h2>

          <CodeBlock language="html">
{`<form class="bismillah-space-y-6 bismillah-max-w-md">
  <!-- Name field -->
  <div>
    <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
      Full Name
    </label>
    <input 
      type="text"
      class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
      placeholder="John Doe"
    />
  </div>

  <!-- Email field -->
  <div>
    <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
      Email
    </label>
    <input 
      type="email"
      class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
      placeholder="john@example.com"
    />
  </div>

  <!-- Message field -->
  <div>
    <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
      Message
    </label>
    <textarea 
      class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
      rows="4"
      placeholder="Your message"
    ></textarea>
  </div>

  <!-- Checkbox -->
  <label class="bismillah-flex bismillah-items-center">
    <input 
      type="checkbox"
      class="bismillah-w-4 bismillah-h-4"
    />
    <span class="bismillah-ml-2 bismillah-text-sm bismillah-text-gray-700">I agree to the terms</span>
  </label>

  <!-- Submit button -->
  <button 
    type="submit"
    class="bismillah-w-full bismillah-bg-blue-600 bismillah-text-white bismillah-py-2 bismillah-rounded-lg bismillah-font-semibold hover:bismillah-bg-blue-700 transition-colors"
  >
    Submit
  </button>
</form>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Form with Validation</h2>

          <CodeBlock language="html">
{`<!-- Field with error message -->
<div class="bismillah-mb-4">
  <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
    Email
  </label>
  <input 
    type="email"
    class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-red-500 bismillah-rounded-lg focus:bismillah-ring-2 focus:bismillah-ring-red-200"
    placeholder="you@example.com"
  />
  <p class="bismillah-text-red-600 bismillah-text-sm bismillah-mt-1">Please enter a valid email</p>
</div>

<!-- Field with success message -->
<div class="bismillah-mb-4">
  <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
    Password
  </label>
  <input 
    type="password"
    class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-green-500 bismillah-rounded-lg"
    placeholder="••••••••"
  />
  <p class="bismillah-text-green-600 bismillah-text-sm bismillah-mt-1">✓ Strong password</p>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Floating Label Input</h2>

          <CodeBlock language="html">
{`<div class="bismillah-relative">
  <input 
    type="text"
    id="floating_input"
    class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-pt-4 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg focus:bismillah-ring-2 focus:bismillah-ring-blue-500 peer"
    placeholder=" "
  />
  <label 
    for="floating_input"
    class="bismillah-absolute bismillah-top-2 bismillah-left-3 bismillah-text-xs bismillah-text-gray-600 peer-placeholder-shown:bismillah-top-3 peer-placeholder-shown:bismillah-text-base peer-focus:bismillah-top-2 peer-focus:bismillah-text-xs transition-all"
  >
    Email address
  </label>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Dark Mode Forms</h2>

          <CodeBlock language="html">
{`<div>
  <label class="bismillah-block bismillah-mb-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700 dark:bismillah-text-gray-300">
    Email
  </label>
  <input 
    type="email"
    class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 dark:bismillah-border-gray-600 bismillah-bg-white dark:bismillah-bg-gray-700 bismillah-text-gray-900 dark:bismillah-text-white bismillah-rounded-lg focus:bismillah-ring-2 focus:bismillah-ring-blue-500"
    placeholder="you@example.com"
  />
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Input Sizes</h2>

          <CodeBlock language="html">
{`<!-- Small -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-2 bismillah-py-1 bismillah-text-sm bismillah-border bismillah-border-gray-300 bismillah-rounded"
  placeholder="Small input"
/>

<!-- Medium (default) -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
  placeholder="Medium input"
/>

<!-- Large -->
<input 
  type="text"
  class="bismillah-w-full bismillah-px-4 bismillah-py-3 bismillah-text-lg bismillah-border bismillah-border-gray-300 bismillah-rounded-lg"
  placeholder="Large input"
/>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Accessibility Tips</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Always use <code className="bg-gray-100 px-2 py-1 rounded">&lt;label&gt;</code> elements with <code className="bg-gray-100 px-2 py-1 rounded">for</code> attribute</li>
            <li>Use semantic HTML elements (input, textarea, select, etc.)</li>
            <li>Provide clear error messages and validation feedback</li>
            <li>Make forms keyboard navigable</li>
            <li>Use ARIA attributes when necessary</li>
            <li>Ensure sufficient color contrast in all input states</li>
            <li>Group related form fields with fieldset/legend</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
