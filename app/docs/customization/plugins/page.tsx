import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function PluginsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Plugins & Extensions</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Create custom plugins to extend BismillahCSS with new utilities and components.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Creating a Basic Plugin</h2>

          <CodeBlock language="javascript">
{`// tailwind.config.js
export default {
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewX(-10deg)',
        },
        '.skew-20deg': {
          transform: 'skewX(-20deg)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Plugin Types</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Utilities Plugin</h3>
              <CodeBlock language="javascript">
{`// Add custom utilities
function spinPlugin({ addUtilities }) {
  const utilities = {
    '.spin-slow': {
      animation: 'spin 3s linear infinite',
    },
    '.spin-fast': {
      animation: 'spin 0.5s linear infinite',
    },
  };
  
  addUtilities(utilities);
}

export default {
  plugins: [spinPlugin],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Component Plugin</h3>
              <CodeBlock language="javascript">
{`// Add component classes
function buttonPlugin({ addComponents }) {
  const buttons = {
    '.btn': {
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s',
      '&:hover': {
        opacity: '0.9',
      },
    },
    '.btn-primary': {
      '@apply bg-blue-600 text-white': {},
    },
    '.btn-secondary': {
      '@apply bg-gray-200 text-gray-900': {},
    },
  };
  
  addComponents(buttons);
}

export default {
  plugins: [buttonPlugin],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Variants Plugin</h3>
              <CodeBlock language="javascript">
{`// Add custom variants
function groupVariantPlugin({ addVariant, e }) {
  addVariant('group-hover', ({ modifySelectors }) => {
    modifySelectors(({ selector }) => {
      return selector.replace(/^\./, '.group:hover .');
    });
  });
}

export default {
  plugins: [groupVariantPlugin],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Theme Plugin</h3>
              <CodeBlock language="javascript">
{`// Extend theme
function customThemePlugin({ theme }) {
  return {
    theme: {
      extend: {
        colors: theme('colors', {}),
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
      },
    },
  };
}

export default {
  plugins: [customThemePlugin],
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Advanced Plugin Features</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Responsive Utilities Plugin</h3>
              <CodeBlock language="javascript">
{`function responsiveUtilitiesPlugin({ addUtilities, e, theme }) {
  const utilities = {};
  const breakpoints = theme('screens');
  
  ['xs', 'sm', 'md', 'lg'].forEach((size) => {
    utilities['.container-' + size] = {
      maxWidth: theme('width.' + size),
    };
  });
  
  addUtilities(utilities, {
    variants: ['responsive', 'hover'],
  });
}

export default {
  plugins: [responsiveUtilitiesPlugin],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dynamic Plugin with Options</h3>
              <CodeBlock language="javascript">
{`function customPlugin(options = {}) {
  return function({ addUtilities, theme }) {
    const {
      variants = [],
      responsive = true,
    } = options;
    
    const utilities = {
      '.custom-utility': {
        color: theme('colors.primary', 'blue'),
      },
    };
    
    addUtilities(utilities, {
      variants: responsive ? ['responsive', ...variants] : variants,
    });
  };
}

export default {
  plugins: [
    customPlugin({
      variants: ['hover', 'focus'],
      responsive: true,
    }),
  ],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Multiple Variants Plugin</h3>
              <CodeBlock language="javascript">
{`function multiVariantPlugin({ addVariant }) {
  // Custom state variant
  addVariant('aria-busy', '&[aria-busy="true"]');
  // Custom attribute variant
  addVariant('data-invalid', '&[data-invalid]');
  // Custom combination
  addVariant('group-aria-selected', ':merge(.group)[aria-selected] &');
}

export default {
  plugins: [multiVariantPlugin],
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Complete Plugin Example</h2>

          <CodeBlock language="javascript">
{`// Custom aspect-ratio plugin
function aspectRatioPlugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      aspect: (value) => ({
        aspectRatio: value,
      }),
    },
    {
      values: theme('aspectRatio'),
    }
  );
}

export default {
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
    },
  },
  plugins: [aspectRatioPlugin],
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">UI Component Plugin</h2>

          <CodeBlock language="javascript">
{`// Create a comprehensive UI plugin
function uiComponentPlugin({ addComponents, theme }) {
  const components = {
    // Card component
    '.card': {
      backgroundColor: theme('colors.white'),
      borderRadius: theme('borderRadius.lg'),
      boxShadow: theme('boxShadow.md'),
      padding: theme('spacing.6'),
    },
    '.card-header': {
      borderBottomWidth: '1px',
      borderBottomColor: theme('colors.gray.200'),
      marginBottom: theme('spacing.4'),
      paddingBottom: theme('spacing.4'),
    },
    '.card-body': {
      paddingY: theme('spacing.4'),
    },
    '.card-footer': {
      borderTopWidth: '1px',
      borderTopColor: theme('colors.gray.200'),
      marginTop: theme('spacing.4'),
      paddingTop: theme('spacing.4'),
    },
    
    // Badge component
    '.badge': {
      display: 'inline-block',
      padding: theme('spacing.1') + ' ' + theme('spacing.2'),
      borderRadius: theme('borderRadius.full'),
      fontSize: theme('fontSize.xs'),
      fontWeight: theme('fontWeight.semibold'),
    },
    '.badge-outline': {
      borderWidth: '1px',
    },
    
    // Alert component
    '.alert': {
      padding: theme('spacing.4'),
      borderRadius: theme('borderRadius.md'),
      borderLeftWidth: '4px',
    },
    '.alert-success': {
      backgroundColor: theme('colors.green.50'),
      borderLeftColor: theme('colors.green.500'),
      color: theme('colors.green.900'),
    },
    '.alert-error': {
      backgroundColor: theme('colors.red.50'),
      borderLeftColor: theme('colors.red.500'),
      color: theme('colors.red.900'),
    },
  };
  
  addComponents(components);
}

export default {
  plugins: [uiComponentPlugin],
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Publishing a Plugin</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Package Structure</h3>
              <CodeBlock language="bash">
{`bismillah-plugin-custom/
├── package.json
├── index.js
├── README.md
└── examples/
    └── usage.html`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Package JSON</h3>
              <CodeBlock language="json">
{`{
  "name": "@bismillahcss/plugin-custom",
  "version": "1.0.0",
  "description": "Custom plugin for BismillahCSS",
  "main": "index.js",
  "keywords": ["bismillahcss", "plugin", "utilities"],
  "author": "Your Name",
  "license": "MIT",
  "peerDependencies": {
    "tailwindcss": "^3.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourname/bismillah-plugin-custom"
  }
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Index File</h3>
              <CodeBlock language="javascript">
{`// index.js
module.exports = function customPlugin(options = {}) {
  return function({ addUtilities, theme }) {
    const utilities = {
      '.custom-class': {
        /* styles */
      },
    };
    
    addUtilities(utilities);
  };
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Install and Use</h3>
              <CodeBlock language="bash">
{`# Install from npm
npm install @bismillahcss/plugin-custom

# Use in config
export default {
  plugins: [require('@bismillahcss/plugin-custom')()],
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Built-in Plugins to Use</h2>

          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Forms Plugin</h3>
              <CodeBlock language="bash">
{`npm install @tailwindcss/forms`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Typography Plugin</h3>
              <CodeBlock language="bash">
{`npm install @tailwindcss/typography`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Aspect Ratio Plugin</h3>
              <CodeBlock language="bash">
{`npm install @tailwindcss/aspect-ratio`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Container Queries Plugin</h3>
              <CodeBlock language="bash">
{`npm install @tailwindcss/container-queries`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Plugin Best Practices</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Keep plugins focused on a single concern</li>
            <li>Accept options for flexibility</li>
            <li>Use theme values for consistency</li>
            <li>Support responsive and state variants</li>
            <li>Document usage with examples</li>
            <li>Provide TypeScript definitions if using TS</li>
            <li>Test on various Tailwind versions</li>
            <li>Use semantic naming for utilities</li>
            <li>Provide clear README documentation</li>
            <li>Follow npm publishing best practices</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
