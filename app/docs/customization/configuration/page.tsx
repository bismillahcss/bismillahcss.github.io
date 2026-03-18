import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ConfigurationPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Advanced Configuration</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Fine-tune BismillahCSS with advanced build and runtime configurations.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Complete Configuration File</h2>

          <CodeBlock language="javascript">
{`// tailwind.config.js - Complete configuration
export default {
  // Content scanning for template files
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  
  // Enable/disable dark mode
  darkMode: 'class', // or 'media'
  
  // Theme customization
  theme: {
    extend: {
      colors: {},
      spacing: {},
      fontFamily: {},
    },
  },
  
  // Plugins
  plugins: [],
  
  // JIT mode
  corePlugins: {},
  
  // Separator customization
  separator: ':',
  
  // Important modifier
  important: false,
  
  // Prefix for all utilities
  prefix: 'bismillah-',
  
  // Extend/override corePlugins
  corePlugins: {
    preflight: true,
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Content Configuration</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Static Content Paths</h3>
              <CodeBlock language="javascript">
{`export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dynamic Content Scanning</h3>
              <CodeBlock language="javascript">
{`export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Include safelist for dynamically generated classes
    { raw: 'w-1/2 h-full', extension: 'html' },
  ],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
  ],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Ignored Paths</h3>
              <CodeBlock language="javascript">
{`export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    {
      raw: '<button class="bg-red-500">Click me</button>',
      extension: 'html',
    },
  ],
  // Exclude patterns
  corePlugins: {
    preflight: false, // disable base styles
  },
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Dark Mode Configuration</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Class Strategy</h3>
              <CodeBlock language="javascript">
{`export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#ffffff',
          dark: '#1f2937',
        },
      },
    },
  },
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Media Query Strategy</h3>
              <CodeBlock language="javascript">
{`export default {
  darkMode: 'media', // Uses prefers-color-scheme
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Custom Dark Mode Selector</h3>
              <CodeBlock language="javascript">
{`export default {
  darkMode: ['class', '[data-theme="dark"]'],
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Build Optimization</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">PurgeCSS Configuration</h3>
              <CodeBlock language="javascript">
{`// postcss.config.js
export default {
  plugins: [
    {
      'postcss-import': {},
      'tailwindcss': {
        content: [
          './app/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
        ],
        safelist: [
          // Classes to always include in production
          'dark',
          'active',
          'disabled',
        ],
      },
      'autoprefixer': {},
    },
  ],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Production Build</h3>
              <CodeBlock language="bash">
{`# Build CSS for production
NODE_ENV=production npm run build

# The CSS will be minified and unused styles removed`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Development Mode</h3>
              <CodeBlock language="bash">
{`# Watch for changes during development
npm run dev

# Faster build times, not optimized`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Prefix Configuration</h2>

          <CodeBlock language="javascript">
{`export default {
  // Add prefix to all utilities
  prefix: 'bismillah-',
  
  // Usage
  // bismillah-flex, bismillah-grid, bismillah-hidden, etc.
  
  // Or customize prefix
  prefix: 'tw-',    // Results in tw-flex, tw-grid
  prefix: '.my-',   // Results in .my-flex, .my-grid
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Important Modifier</h2>

          <CodeBlock language="javascript">
{`export default {
  // Enable !important on all utilities
  important: true,
  // Results in: .bg-red-500 { background-color: red !important; }
  
  // Or use selector
  important: '#app',
  // Only applies to #app scope
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Separator Configuration</h2>

          <CodeBlock language="javascript">
{`export default {
  // Customize the separator (default: ':')
  separator: '_',
  
  // Usage: md_flex, dark_bg-red-500
  // Instead of: md:flex, dark:bg-red-500
  
  // Other options
  separator: '__',   // md__flex
  separator: '-',    // md-flex
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Core Plugins Configuration</h2>

          <CodeBlock language="javascript">
{`export default {
  // Disable specific core plugins
  corePlugins: {
    preflight: false,      // Don't reset base styles
    container: false,      // Don't include container
    space: false,          // Don't include spacing
    padding: false,        // Don't include padding
    margin: false,         // Don't include margins
    backgroundColor: true, // Keep background color
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Performance Optimization</h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Limit Utilities</h3>
              <CodeBlock language="javascript">
{`export default {
  theme: {
    extend: {
      // Only include specific colors instead of full palette
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        success: '#10b981',
      },
      // Limit spacing scale
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        4: '1rem',
      },
    },
  },
}`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Enable JIT (Just-In-Time)</h3>
              <CodeBlock language="javascript">
{`export default {
  // Modern Tailwind comes with JIT enabled by default
  // This allows arbitrary values
  // Example: w-[35rem], bg-[rgb(217,119,6)]
}`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">CSS File Size Optimization</h3>
              <CodeBlock language="css">
{`/* Base level - only what you need */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Remove preflight for smaller bundle */
/* @layer base { /* custom base styles */ }`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Environment-Specific Configuration</h2>

          <CodeBlock language="javascript">
{`// tailwind.config.js
const isProduction = process.env.NODE_ENV === 'production';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      colors: isProduction ? {
        // Limit colors in production
        primary: '#3b82f6',
      } : {
        // Full palette in development
        alias: '#any-color',
      },
    },
  },
  
  // Disable warnings in production
  plugins: isProduction ? [] : [],
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Extending Configuration</h2>

          <CodeBlock language="javascript">
{`export default {
  // Override vs Extend
  
  // OVERRIDE - Replace entire theme
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    },
  },
  
  // EXTEND - Add to existing theme
  theme: {
    extend: {
      colors: {
        custom: '#xyz',
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Variants Configuration</h2>

          <CodeBlock language="javascript">
{`export default {
  variants: {
    extend: {
      // Add custom variants
      backgroundColor: ['group-hover', 'focus-within'],
      textColor: ['group-focus'],
      opacity: ['disabled'],
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Configuration Best Practices</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Keep content paths specific for faster builds</li>
            <li>Use safelist for dynamically generated classes</li>
            <li>Disable unused core plugins to reduce CSS size</li>
            <li>Use environment variables for different configs</li>
            <li>Set appropriate dark mode strategy</li>
            <li>Document custom configuration choices</li>
            <li>Test production builds before deployment</li>
            <li>Monitor CSS file size in production</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
