import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function ExtendingPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Extending the Framework</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn advanced techniques to extend and enhance BismillahCSS for your project needs.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Custom Utilities</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Simple Custom Utilities</h3>
              <CodeBlock language="javascript">
{`// tailwind.config.js
export default {
  theme: {
    extend: {
      // Add custom utilities via theme
      customUtilities: {
        'frosted-glass': {
          'backdrop-filter': 'blur(10px)',
          'background-color': 'rgba(255, 255, 255, 0.1)',
        },
        'smooth-shadow': {
          'box-shadow': '0 10px 40px rgba(0, 0, 0, 0.1)',
          'transition': 'box-shadow 0.3s ease',
        },
      },
    },
  },
  plugins: [
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'frosted': (value) => ({
            ...value,
          }),
        },
        {
          values: theme('customUtilities'),
        }
      );
    },
  ],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Parameterized Utilities</h3>
              <CodeBlock language="javascript">
{`// Create utilities with values
function customPlugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      // Create blur-[value] utilities
      'blur': (value) => ({
        'filter': \`blur(\${value})\`,
      }),
      // Create hue-rotate-[value] utilities
      'hue-rotate': (value) => ({
        'filter': \`hue-rotate(\${value}deg)\`,
      }),
    },
    {
      values: {
        1: '1px',
        5: '5px',
        10: '10px',
        20: '20px',
      },
    }
  );
}

export default {
  plugins: [customPlugin],
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Dynamic Utilities from Theme</h3>
              <CodeBlock language="javascript">
{`function dynamicPlugin({ matchUtilities, theme }) {
  matchUtilities(
    {
      'text': (value) => ({
        color: value,
      }),
    },
    {
      values: theme('colors'),
    }
  );
}

export default {
  plugins: [dynamicPlugin],
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Creating a Design System</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Component Library Structure</h3>
              <CodeBlock language="bash">
{`my-design-system/
├── components/
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── modal.tsx
│   └── index.ts
├── tokens/
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   └── index.ts
├── styles/
│   ├── globals.css
│   └── components.css
├── tailwind.config.ts
└── package.json`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Token Definitions</h3>
              <CodeBlock language="typescript">
{`// tokens/colors.ts
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    900: '#082f49',
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
};

// tokens/spacing.ts
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Sync Tokens to Config</h3>
              <CodeBlock language="typescript">
{`// tailwind.config.ts
import { colors, spacing } from './tokens';

export default {
  theme: {
    extend: {
      colors,
      spacing,
    },
  },
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Component Variants</h3>
              <CodeBlock language="typescript">
{`// components/button.tsx
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantClasses = {
  primary: 'bismillah-bg-primary-600 bismillah-text-white hover:bismillah-bg-primary-700',
  secondary: 'bismillah-bg-gray-200 bismillah-text-gray-900 hover:bismillah-bg-gray-300',
  outline: 'bismillah-border bismillah-border-gray-300 bismillah-text-gray-900',
};

const sizeClasses = {
  sm: 'bismillah-px-3 bismillah-py-1 bismillah-text-sm',
  md: 'bismillah-px-4 bismillah-py-2 bismillah-text-base',
  lg: 'bismillah-px-6 bismillah-py-3 bismillah-text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
}: ButtonProps) {
  return (
    <button
      className={\`
        bismillah-rounded-lg
        bismillah-font-semibold
        bismillah-transition
        \${variantClasses[variant]}
        \${sizeClasses[size]}
      \`}
    >
      {children}
    </button>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Integrating with Component Libraries</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Headless UI Integration</h3>
              <CodeBlock language="typescript">
{`// components/dropdown.tsx
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export function Dropdown() {
  return (
    <div class="bismillah-w-56 bismillah-text-right">
      <Menu as="div" class="bismillah-relative bismillah-inline-block bismillah-text-left">
        <Menu.Button class="bismillah-inline-flex bismillah-w-full bismillah-justify-center bismillah-rounded-md bismillah-bg-white bismillah-px-4 bismillah-py-2 bismillah-text-sm bismillah-font-medium bismillah-text-gray-700">
          Options
          <ChevronDownIcon />
        </Menu.Button>
        
        <Menu.Items class="bismillah-absolute bismillah-right-0 bismillah-z-10 bismillah-mt-2 bismillah-w-56 bismillah-origin-top-right bismillah-rounded-md bismillah-bg-white">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                class={bismillah-block bismillah-px-4 bismillah-py-2 \${
                  active ? 'bismillah-bg-blue-500 bismillah-text-white' : 'bismillah-text-gray-700'
                }}
              >
                Edit
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Radix UI Integration</h3>
              <CodeBlock language="typescript">
{`// components/select.tsx
import * as Select from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';

export function SelectComponent() {
  return (
    <Select.Root>
      <Select.Trigger class="bismillah-inline-flex bismillah-items-center bismillah-justify-between bismillah-px-4 bismillah-py-2 bismillah-rounded-lg bismillah-border">
        <Select.Value placeholder="Select..." />
      </Select.Trigger>
      
      <Select.Content class="bismillah-rounded-lg bismillah-shadow-lg">
        <Select.Group>
          <Select.Item value="option1" class="bismillah-px-4 bismillah-py-2">
            <Select.ItemText>Option 1</Select.ItemText>
            <Select.ItemIndicator>
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Advanced Responsive Patterns</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Container Queries</h3>
              <CodeBlock language="html">
{`<!-- Modern responsive pattern -->
<div class="@container">
  <div class="@sm:bismillah-flex @md:bismillah-grid @md:bismillah-grid-cols-2">
    <!-- Responds to container size, not viewport -->
  </div>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Aspect Ratio Patterns</h3>
              <CodeBlock language="html">
{`<!-- Multiple aspect ratios -->
<div class="bismillah-aspect-video">
  <!-- 16:9 aspect ratio -->
</div>

<div class="md:bismillah-aspect-square lg:bismillah-aspect-video">
  <!-- Changes aspect ratio at different breakpoints -->
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Grid Responsive Patterns</h3>
              <CodeBlock language="html">
{`<!-- Auto-responsive grid -->
<div class="bismillah-grid bismillah-grid-cols-1 sm:bismillah-grid-cols-2 md:bismillah-grid-cols-3 lg:bismillah-grid-cols-4 bismillah-gap-4">
  <!-- Automatically adjusts columns based on viewport -->
</div>

<!-- Auto-fit pattern -->
<div class="bismillah-grid bismillah-grid-cols-[repeat(auto-fit,minmax(300px,1fr))] bismillah-gap-4">
  <!-- Fills available space with cards minimum 300px wide -->
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Animation Extensions</h2>

          <CodeBlock language="javascript">
{`// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'bounce-alt': {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'none' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-in',
        'slide-in': 'slide-in 0.4s ease-out',
        'bounce-alt': 'bounce-alt 1s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
}`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">CSS-in-JS Integration</h2>

          <CodeBlock language="typescript">
{`// With Emotion
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const CardStyles = styled.div\`
  @apply bismillah-bg-white bismillah-rounded-lg bismillah-shadow-md bismillah-p-6;
  
  &:hover {
    @apply bismillah-shadow-lg bismillah-transition;
  }
\`;

// With styled-components
import styled from 'styled-components';

const Button = styled.button\`
  @apply bismillah-px-4 bismillah-py-2 bismillah-rounded-lg bismillah-bg-blue-600 bismillah-text-white;
  
  &:hover {
    @apply bismillah-bg-blue-700;
  }
\`; `}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Best Practices for Extensions</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Keep custom utilities focused and reusable</li>
            <li>Use theme values for consistency</li>
            <li>Document all custom extensions</li>
            <li>Maintain design system tokens separately</li>
            <li>Test responsive behavior across breakpoints</li>
            <li>Consider accessibility implications</li>
            <li>Use TypeScript for type safety</li>
            <li>Extract repeated patterns into components</li>
            <li>Monitor CSS file size growth</li>
            <li>Version control design system changes</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Extension Patterns</h2>

          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Data Attribute Selectors</h3>
              <CodeBlock language="javascript">
{`// Extend with data attribute utilities
export default {
  plugins: [
    function({ addVariant }) {
      addVariant('data-active', '&[data-active]');
      addVariant('data-disabled', '&[data-disabled]');
      addVariant('data-state-open', '&[data-state="open"]');
    },
  ],
}`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">CSS Variables with Utilities</h3>
              <CodeBlock language="html">
{`<!-- Use CSS variables with BismillahCSS utilities -->
<style>
  :root {
    --primary-color: #3b82f6;
    --primary-dark: #1e40af;
  }
</style>

<button class="bismillah-bg-[var(--primary-color)] hover:bismillah-bg-[var(--primary-dark)]">
  Dynamic Color Button
</button>`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Performance Optimization</h3>
              <CodeBlock language="javascript">
{`// Optimize by limiting scope
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Don't include node_modules
  ],
  safelist: {
    // Keep essential classes
    pattern: /^(bismillah-)/,
    variants: ['sm', 'md', 'lg', 'dark'],
  },
}`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
