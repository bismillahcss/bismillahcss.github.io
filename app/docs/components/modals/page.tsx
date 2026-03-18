import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ModalsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Modal Components</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Build accessible modal dialogs and overlays with BismillahCSS for user interactions and confirmations.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Basic Modal Structure</h2>

          <p className="text-muted-foreground mb-3">
            A modal typically consists of an overlay (backdrop) and a centered dialog box.
          </p>

          <CodeBlock language="html">
{`<!-- Modal overlay (backdrop) -->
<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center bismillah-z-50">
  
  <!-- Modal container -->
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md">
    
    <!-- Modal header -->
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-b bismillah-border-gray-200">
      <h2 class="bismillah-text-xl bismillah-font-bold bismillah-text-gray-900">Modal Title</h2>
    </div>
    
    <!-- Modal body -->
    <div class="bismillah-px-6 bismillah-py-4">
      <p class="bismillah-text-gray-600">Your modal content goes here.</p>
    </div>
    
    <!-- Modal footer -->
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-t bismillah-border-gray-200 bismillah-flex bismillah-gap-3 bismillah-justify-end">
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200 bismillah-text-gray-900 bismillah-rounded-lg hover:bismillah-bg-gray-300">
        Cancel
      </button>
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg hover:bismillah-bg-blue-700">
        Confirm
      </button>
    </div>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Modal Variants</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Alert Modal</h3>
              <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-sm">
    <div class="bismillah-p-6 bismillah-text-center">
      <div class="bismillah-text-4xl bismillah-mb-4">⚠️</div>
      <h2 class="bismillah-text-xl bismillah-font-bold bismillah-mb-2">Confirm Action</h2>
      <p class="bismillah-text-gray-600 bismillah-mb-6">Are you sure? This action cannot be undone.</p>
      <div class="bismillah-flex bismillah-gap-3 bismillah-justify-center">
        <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200 bismillah-rounded-lg">Cancel</button>
        <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-red-600 bismillah-text-white bismillah-rounded-lg">Delete</button>
      </div>
    </div>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Success Modal</h3>
              <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center">
  <div class="bismillah-bg-green-50 bismillah-border bismillah-border-green-200 bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-sm">
    <div class="bismillah-p-6 bismillah-text-center">
      <div class="bismillah-text-4xl bismillah-mb-4">✓</div>
      <h2 class="bismillah-text-xl bismillah-font-bold bismillah-text-green-900 bismillah-mb-2">Success!</h2>
      <p class="bismillah-text-green-700 bismillah-mb-6">Your action has been completed successfully.</p>
      <button class="bismillah-px-6 bismillah-py-2 bismillah-bg-green-600 bismillah-text-white bismillah-rounded-lg">
        Close
      </button>
    </div>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Error Modal</h3>
              <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center">
  <div class="bismillah-bg-red-50 bismillah-border bismillah-border-red-200 bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-sm">
    <div class="bismillah-p-6 bismillah-text-center">
      <div class="bismillah-text-4xl bismillah-mb-4">✕</div>
      <h2 class="bismillah-text-xl bismillah-font-bold bismillah-text-red-900 bismillah-mb-2">Error</h2>
      <p class="bismillah-text-red-700 bismillah-mb-6">Something went wrong. Please try again.</p>
      <button class="bismillah-px-6 bismillah-py-2 bismillah-bg-red-600 bismillah-text-white bismillah-rounded-lg">
        Retry
      </button>
    </div>
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Form Modal</h3>
              <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md">
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-b bismillah-border-gray-200">
      <h2 class="bismillah-text-xl bismillah-font-bold">Create Account</h2>
    </div>
    
    <div class="bismillah-px-6 bismillah-py-4">
      <form class="bismillah-space-y-4">
        <div>
          <label class="bismillah-block bismillah-text-sm bismillah-font-medium bismillah-mb-1">Name</label>
          <input type="text" class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg" />
        </div>
        <div>
          <label class="bismillah-block bismillah-text-sm bismillah-font-medium bismillah-mb-1">Email</label>
          <input type="email" class="bismillah-w-full bismillah-px-3 bismillah-py-2 bismillah-border bismillah-border-gray-300 bismillah-rounded-lg" />
        </div>
      </form>
    </div>
    
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-t bismillah-border-gray-200 bismillah-flex bismillah-gap-3 bismillah-justify-end">
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200 bismillah-rounded-lg">Cancel</button>
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">Create</button>
    </div>
  </div>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Modal Sizes</h2>

          <CodeBlock language="html">
{`<!-- Small modal -->
<div class="bismillah-max-w-xs">Small modal</div>

<!-- Medium modal (default) -->
<div class="bismillah-max-w-md">Medium modal</div>

<!-- Large modal -->
<div class="bismillah-max-w-lg">Large modal</div>

<!-- Extra large modal -->
<div class="bismillah-max-w-2xl">Extra large modal</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Scrollable Modal</h2>

          <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md bismillah-max-h-96 bismillah-flex bismillah-flex-col">
    
    <!-- Fixed header -->
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-b bismillah-border-gray-200">
      <h2 class="bismillah-text-xl bismillah-font-bold">Long Content</h2>
    </div>
    
    <!-- Scrollable body -->
    <div class="bismillah-px-6 bismillah-py-4 bismillah-overflow-y-auto bismillah-flex-1">
      <p>Long content that can scroll...</p>
      <!-- More content here -->
    </div>
    
    <!-- Fixed footer -->
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-t bismillah-border-gray-200 bismillah-flex bismillah-gap-3 bismillah-justify-end">
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200 bismillah-rounded-lg">Cancel</button>
      <button class="bismillah-px-4 bismillah-py-2 bismillah-bg-blue-600 bismillah-text-white bismillah-rounded-lg">OK</button>
    </div>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Stacked Modals</h2>

          <CodeBlock language="html">
{`<!-- Multiple modals stacked with increasing z-index -->
<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center bismillah-z-40">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md">
    First modal content
  </div>
</div>

<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center bismillah-z-50">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md">
    Second modal (on top)
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Dark Mode Modal</h2>

          <CodeBlock language="html">
{`<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black dark:bismillah-bg-opacity-80 bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center">
  <div class="bismillah-bg-white dark:bismillah-bg-gray-800 bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md">
    <div class="bismillah-px-6 bismillah-py-4 bismillah-border-b bismillah-border-gray-200 dark:bismillah-border-gray-700">
      <h2 class="bismillah-text-xl bismillah-font-bold bismillah-text-gray-900 dark:bismillah-text-white">Modal Title</h2>
    </div>
    <div class="bismillah-px-6 bismillah-py-4">
      <p class="bismillah-text-gray-600 dark:bismillah-text-gray-300">Modal content works in dark mode</p>
    </div>
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Animated Modal</h2>

          <CodeBlock language="html">
{`<!-- Modal with animation -->
<div class="bismillah-fixed bismillah-inset-0 bismillah-bg-black bismillah-bg-opacity-50 bismillah-flex bismillah-items-center bismillah-justify-center bismillah-animate-fadeIn">
  <div class="bismillah-bg-white bismillah-rounded-lg bismillah-shadow-xl bismillah-w-full bismillah-max-w-md bismillah-animate-scaleIn">
    <!-- Modal content -->
  </div>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Accessibility Guidelines</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use semantic HTML with <code className="bg-gray-100 px-2 py-1 rounded">&lt;dialog&gt;</code> or proper ARIA roles</li>
            <li>Trap keyboard focus inside the modal</li>
            <li>Provide a way to close the modal (ESC key, close button)</li>
            <li>Make the overlay dismissible (optional)</li>
            <li>Use appropriate ARIA labels and attributes</li>
            <li>Ensure sufficient color contrast</li>
            <li>Test with screen readers</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">JavaScript Tips</h2>

          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Show Modal</h3>
              <CodeBlock language="javascript">
{`const modal = document.getElementById('modal');
modal.classList.remove('bismillah-hidden');
modal.classList.add('bismillah-flex');`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Close Modal</h3>
              <CodeBlock language="javascript">
{`const modal = document.getElementById('modal');
modal.classList.add('bismillah-hidden');
modal.classList.remove('bismillah-flex');`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Close on Overlay Click</h3>
              <CodeBlock language="javascript">
{`overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    modal.classList.add('bismillah-hidden');
  }
});`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
