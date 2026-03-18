import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ConfigurationPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn how to configure BismillahCSS to match your project's needs. Customize colors, spacing, fonts, and much more.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📝 Configuration File</h2>

          <p className="text-muted-foreground">
            Create a <code className="bg-gray-100 px-2 py-1 rounded">bismillah.config.js</code> file in the root of your project:
          </p>

          <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    colors: {
      // Define custom colors
    },
    spacing: {
      // Define custom spacing scale
    },
    fontSize: {
      // Define custom font sizes
    },
    extend: {
      // Extend without overriding defaults
    }
  },
  variants: {
    // Configure which variants are generated
  },
  plugins: [
    // Add plugins
  ]
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🎨 Theme Configuration</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Colors</h3>
              <p className="text-muted-foreground">
                Define your color palette:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      primary: '#4F46E5',
      secondary: '#10B981',
      danger: '#EF4444',
      warning: '#F59E0B',
      success: '#10B981',
      info: '#3B82F6',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
      }
    }
  }
}`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Spacing Scale</h3>
              <p className="text-muted-foreground">
                Customize the spacing scale for margins, padding, gaps, and widths:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    spacing: {
      '0': '0',
      '1': '0.25rem',    // 4px
      '2': '0.5rem',     // 8px
      '3': '0.75rem',    // 12px
      '4': '1rem',       // 16px
      '5': '1.25rem',    // 20px
      '6': '1.5rem',     // 24px
      '8': '2rem',       // 32px
      '10': '2.5rem',    // 40px
      '12': '3rem',      // 48px
      '16': '4rem',      // 64px
      '20': '5rem',      // 80px
      '24': '6rem',      // 96px
      '32': '8rem'       // 128px
    }
  }
}`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Font Sizes</h3>
              <p className="text-muted-foreground">
                Define your typography scale:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    fontSize: {
      'xs': ['0.75rem', '1rem'],
      'sm': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1']
    }
  }
}`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Font Family</h3>
              <p className="text-muted-foreground">
                Configure font families for your project:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    fontFamily: {
      sans: ['system-ui', 'system-ui-rounded', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Menlo', 'Courier New', 'monospace']
    }
  }
}`}
              </CodeBlock>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Border Radius</h3>
              <p className="text-muted-foreground">
                Set border radius values:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'base': '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px'
    }
  }
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🔄 Extend vs Override</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Using <code className="bg-gray-100 px-2 py-1 rounded">extend</code></h3>
              <p className="text-muted-foreground">
                Keep the default values and add new ones:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4F46E5',
        'brand-green': '#10B981'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    }
  }
}`}
              </CodeBlock>
              <p className="text-sm text-green-600">
                ✅ Use this approach: Preserves all default values and adds your custom ones
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Direct Override</h3>
              <p className="text-muted-foreground">
                Completely replace the default theme values:
              </p>
              <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    colors: {
      'brand-blue': '#4F46E5',
      'brand-green': '#10B981'
      // All default colors are now removed
    }
  }
}`}
              </CodeBlock>
              <p className="text-sm text-red-600">
                ❌ Avoid this: You need to manually add every color you want to use
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🎯 Variants Configuration</h2>

          <p className="text-muted-foreground mb-3">
            Control which variants (responsive, hover, focus, etc.) are generated for each utility:
          </p>

          <CodeBlock language="javascript">
{`module.exports = {
  variants: {
    extend: {
      // Generate hover, focus, and active variants for backgroundColor
      backgroundColor: ['hover', 'focus', 'active', 'disabled'],
      // Generate dark mode variants for textColor
      textColor: ['dark', 'dark-hover'],
      // Add variants for border color
      borderColor: ['hover', 'focus', 'group-hover']
    }
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            Common variants available:
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="text-sm text-muted-foreground">• hover</div>
            <div className="text-sm text-muted-foreground">• focus</div>
            <div className="text-sm text-muted-foreground">• active</div>
            <div className="text-sm text-muted-foreground">• disabled</div>
            <div className="text-sm text-muted-foreground">• group-hover</div>
            <div className="text-sm text-muted-foreground">• first-child</div>
            <div className="text-sm text-muted-foreground">• last-child</div>
            <div className="text-sm text-muted-foreground">• dark</div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">🔌 Plugins</h2>

          <p className="text-muted-foreground mb-3">
            Add plugins to extend BismillahCSS functionality:
          </p>

          <CodeBlock language="javascript">
{`module.exports = {
  plugins: [
    require('@bismillah/typography'),
    require('@bismillah/forms'),
    require('@bismillah/line-clamp'),
    require('custom-plugin')
  ]
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4">
            You can also create custom plugins:
          </p>

          <CodeBlock language="javascript">
{`const plugin = require('@bismillahcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.outlined': {
          outline: '2px solid currentColor'
        },
        '.custom-shadow': {
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }
      }
      addUtilities(newUtilities)
    })
  ]
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📄 Complete Example Configuration</h2>

          <CodeBlock language="javascript">
{`module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      primary: '#4F46E5',
      secondary: '#10B981',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        500: '#6B7280',
        900: '#111827'
      }
    },
    spacing: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '4': '1rem',
      '8': '2rem',
      '16': '4rem'
    },
    fontSize: {
      'sm': ['0.875rem', '1.25rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.25rem', '1.75rem']
    },
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
      mono: ['Menlo', 'monospace']
    },
    extend: {
      colors: {
        'brand-blue': '#0066FF'
      },
      spacing: {
        '128': '32rem'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus']
    }
  },
  plugins: []
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">💡 Tips & Best Practices</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Use extend:</strong> Most of the time you want to extend the default theme rather than override it.
            </li>
            <li>
              <strong>Organize colors:</strong> Structure your colors logically with semantic names (primary, secondary, danger, etc.).
            </li>
            <li>
              <strong>Consistent spacing:</strong> Use a consistent spacing scale throughout your project.
            </li>
            <li>
              <strong>Typography first:</strong> Define your font families and sizes early in your configuration.
            </li>
            <li>
              <strong>Test variants:</strong> Only include variants you actually use to reduce CSS output size.
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
