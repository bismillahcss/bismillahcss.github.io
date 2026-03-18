import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ThemingPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Theming & Customization</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Create custom design systems by extending colors, typography, spacing, and more.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Creating a Custom Theme</h2>

          <p className="text-muted-foreground mb-3">
            Create a custom theme by extending the default configuration in your config file.
          </p>

          <CodeBlock language="javascript">
{`// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        serif: ['Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Color Theme</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Using Semantic Colors</h3>
              <CodeBlock language="html">
{`<!-- Use custom semantic color names -->
<div class="bismillah-bg-primary bismillah-text-white bismillah-rounded-lg bismillah-p-4">
  Primary theme color
</div>

<div class="bismillah-bg-success bismillah-text-white bismillah-rounded-lg bismillah-p-4">
  Success message
</div>

<div class="bismillah-bg-error bismillah-text-white bismillah-rounded-lg bismillah-p-4">
  Error state
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Color Palette with Shades</h3>
              <CodeBlock language="javascript">
{`// config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#082f49',
        },
      },
    },
  },
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dark Mode Colors</h3>
              <CodeBlock language="javascript">
{`// config.js - Define both light and dark colors
export default {
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#ffffff',
          dark: '#1f2937',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
    },
  },
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Typography Theme</h2>

          <CodeBlock language="javascript">
{`// config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
        serif: ['Georgia', 'ui-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.625' }],
        xl: ['20px', { lineHeight: '1.75' }],
        '2xl': ['24px', { lineHeight: '2' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Spacing & Sizing Theme</h2>

          <CodeBlock language="javascript">
{`// config.js
export default {
  theme: {
    extend: {
      spacing: {
        xs: '0.25rem',  // 4px
        sm: '0.5rem',   // 8px
        md: '1rem',     // 16px
        lg: '1.5rem',   // 24px
        xl: '2rem',     // 32px
        '2xl': '3rem',  // 48px
        '3xl': '4rem',  // 64px
      },
      borderRadius: {
        xs: '0.25rem',   // 4px (sharp)
        sm: '0.375rem',  // 6px (subtle)
        base: '0.5rem',  // 8px (default)
        lg: '0.75rem',   // 12px (rounded)
        xl: '1rem',      // 16px (very rounded)
        full: '9999px',  // circles & pills
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Shadow & Effects Theme</h2>

          <CodeBlock language="javascript">
{`// config.js
export default {
  theme: {
    extend: {
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Component-Specific Themes</h2>

          <CodeBlock language="javascript">
{`// config.js
export default {
  theme: {
    extend: {
      // Button theme
      buttonColors: {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
      },
      // Card theme
      cardRadius: '0.75rem',
      cardShadow: 'shadow-md',
      // Input theme
      inputBorder: 'border-gray-300',
      inputFocus: 'focus:border-blue-500 focus:ring-blue-500',
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Theme Variants</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Light Theme</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-white bismillah-text-gray-900">
  Light theme content
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dark Theme</h3>
              <CodeBlock language="html">
{`<div class="dark:bismillah-bg-gray-900 dark:bismillah-text-white">
  Dark theme content
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">High Contrast Theme</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-black bismillah-text-white">
  High contrast theme
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Brand Color System</h2>

          <CodeBlock language="javascript">
{`// Brand-specific color palette
export default {
  theme: {
    extend: {
      colors: {
        // Brand primary
        brand: '#3b82f6',
        // Derived palette
        'brand-light': '#dbeafe',
        'brand-lighter': '#eff6ff',
        'brand-dark': '#1e40af',
        'brand-darker': '#1e3a8a',
        
        // Brand accent
        accent: '#ec4899',
        'accent-light': '#fbcfe8',
        'accent-dark': '#be185d',
        
        // Status colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">CSS Variables Theme</h2>

          <CodeBlock language="css">
{`:root {
  /* Brand colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Neutral palette */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-900: #111827;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Border radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}

.dark {
  --color-bg: #1f2937;
  --color-text: #f3f4f6;
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Theme Utilities</h2>

          <CodeBlock language="html">
{`<!-- Primary themed button -->
<button class="bismillah-bg-primary bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded-lg hover:bismillah-opacity-90">
  Primary Button
</button>

<!-- Success themed alert -->
<div class="bismillah-bg-success bismillah-bg-opacity-10 bismillah-text-success bismillah-px-4 bismillah-py-3 bismillah-rounded-lg">
  Success message
</div>

<!-- Interactive themed card -->
<div class="bismillah-bg-white dark:bismillah-bg-gray-800 bismillah-rounded-lg bismillah-shadow-md hover:bismillah-shadow-lg bismillah-transition">
  Themed card
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Multi-Theme Support</h2>

          <CodeBlock language="javascript">
{`// Define multiple themes
const themes = {
  light: {
    colors: {
      primary: '#3b82f6',
      background: '#ffffff',
      text: '#1f2937',
    },
  },
  dark: {
    colors: {
      primary: '#60a5fa',
      background: '#1f2937',
      text: '#f3f4f6',
    },
  },
  highContrast: {
    colors: {
      primary: '#000000',
      background: '#ffffff',
      text: '#000000',
    },
  },
};

// Apply theme via CSS class
function applyTheme(themeName) {
  const html = document.documentElement;
  html.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Best Practices</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use semantic color names for consistency</li>
            <li>Define color palettes with shade variations (50-900)</li>
            <li>Create a hierarchy of sizes and spacing</li>
            <li>Test themes in light and dark modes</li>
            <li>Use CSS variables for dynamic theme switching</li>
            <li>Document your theme configuration</li>
            <li>Maintain color contrast for accessibility</li>
            <li>Use consistent naming conventions</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
