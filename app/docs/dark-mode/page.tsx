import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export default function DarkModePage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Dark Mode</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Implement dark mode easily in your BismillahCSS projects. Support system preferences and user toggling.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Understanding Dark Mode</h2>

          <p className="text-muted-foreground">
            Dark mode provides an alternative color scheme for your application, improving accessibility and reducing eye strain for users in low-light environments. BismillahCSS makes it simple to implement with the `dark:` variant.
          </p>

          <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-purple-900 font-semibold">💡 In BismillahCSS</p>
            <p className="text-purple-800 text-sm mt-2">
              Use the `dark:` prefix to apply styles that only activate when dark mode is enabled on the parent element.
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Dark Mode Strategies</h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">① CSS Media Query</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Automatically follow the system's dark mode preference using `prefers-color-scheme`
              </p>
              <CodeBlock language="html">
{`<!-- Add dark class when system prefers dark mode -->
<html class="dark">
  <!-- Your content -->
</html>`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground mt-2">
                ✅ Best for: Sites that should follow system preferences
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">② Class-based (Recommended)</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Manually toggle a class to control dark mode
              </p>
              <CodeBlock language="html">
{`<!-- Light mode -->
<html>
  <!-- Your content -->
</html>

<!-- Dark mode -->
<html class="dark">
  <!-- Your content -->
</html>`}
              </CodeBlock>
              <p className="text-sm text-muted-foreground mt-2">
                ✅ Best for: Full user control over theme preference
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">③ LocalStorage Persistence</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Save the user's preference and apply it on page load
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                ✅ Best for: Remembering user's theme choice across visits
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Basic Dark Mode Usage</h2>

          <p className="text-muted-foreground mb-4">
            Use the `dark:` variant to specify dark mode styles:
          </p>

          <CodeBlock language="html">
{`<!-- Light mode background, dark mode background -->
<div class="bismillah-bg-white dark:bismillah-bg-gray-900">
  <!-- Light mode text, dark mode text -->
  <h1 class="bismillah-text-gray-900 dark:bismillah-text-white">
    Welcome
  </h1>
  
  <!-- Light mode paragraph text, dark mode lighter text -->
  <p class="bismillah-text-gray-600 dark:bismillah-text-gray-300">
    This is a responsive dark mode example
  </p>
</div>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Complete Dark Mode Example</h2>

          <CodeBlock language="html">
{`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bismillahcss@latest/dist/bismillah.min.css">
</head>
<body class="bismillah-bg-white dark:bismillah-bg-gray-900 bismillah-text-gray-900 dark:bismillah-text-white transition-colors">
  
  <!-- Navigation -->
  <nav class="bismillah-bg-gray-100 dark:bismillah-bg-gray-800 bismillah-p-4 bismillah-shadow">
    <div class="bismillah-flex bismillah-items-center bismillah-justify-between">
      <h1 class="bismillah-text-xl bismillah-font-bold">Logo</h1>
      <button onclick="toggleDarkMode()" class="bismillah-px-4 bismillah-py-2 bismillah-bg-gray-200 dark:bismillah-bg-gray-700 bismillah-rounded">
        🌙 Toggle Theme
      </button>
    </div>
  </nav>

  <!-- Content -->
  <main class="bismillah-container bismillah-mx-auto bismillah-px-4 bismillah-py-8">
    <h2 class="bismillah-text-3xl bismillah-font-bold bismillah-mb-4">Dark Mode Example</h2>
    
    <div class="bismillah-grid bismillah-grid-cols-1 md:bismillah-grid-cols-2 bismillah-gap-6">
      <!-- Card 1 -->
      <div class="bismillah-bg-gray-50 dark:bismillah-bg-gray-800 bismillah-rounded-lg bismillah-p-6 bismillah-shadow">
        <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card One</h3>
        <p class="bismillah-text-gray-600 dark:bismillah-text-gray-300 bismillah-mb-4">
          This card automatically adapts to dark mode
        </p>
        <button class="bismillah-bg-blue-600 dark:bismillah-bg-blue-500 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded hover:bismillah-bg-blue-700 dark:hover:bismillah-bg-blue-600">
          Learn More
        </button>
      </div>

      <!-- Card 2 -->
      <div class="bismillah-bg-gray-50 dark:bismillah-bg-gray-800 bismillah-rounded-lg bismillah-p-6 bismillah-shadow">
        <h3 class="bismillah-text-lg bismillah-font-bold bismillah-mb-2">Card Two</h3>
        <p class="bismillah-text-gray-600 dark:bismillah-text-gray-300 bismillah-mb-4">
          All styles respond to the dark: prefix
        </p>
        <button class="bismillah-bg-green-600 dark:bismillah-bg-green-500 bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded hover:bismillah-bg-green-700 dark:hover:bismillah-bg-green-600">
          Explore
        </button>
      </div>
    </div>
  </main>

  <script>
    function toggleDarkMode() {
      const html = document.documentElement;
      html.classList.toggle('dark');
      // Save preference
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    }

    // Apply saved theme on load
    window.addEventListener('load', () => {
      const saved = localStorage.getItem('theme');
      const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    });
  </script>

</body>
</html>`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Implementing Theme Toggle</h2>

          <p className="text-muted-foreground mb-4">
            Here's a complete theme toggle component:
          </p>

          <CodeBlock language="javascript">
{`// JavaScript to handle theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  
  // Toggle the class
  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Initialize theme on page load
function initializeTheme() {
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  
  if (saved === 'dark') {
    html.classList.add('dark');
  } else if (saved === 'light') {
    html.classList.remove('dark');
  } else {
    // Follow system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      html.classList.add('dark');
    }
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initializeTheme);`}
          </CodeBlock>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Dark Mode Color Guide</h2>

          <p className="text-muted-foreground mb-4">
            Recommended color mappings for light and dark modes:
          </p>

          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Backgrounds</h3>
              <CodeBlock language="html">
{`<!-- Light: white, Dark: gray-900 -->
<div class="bismillah-bg-white dark:bismillah-bg-gray-900"></div>

<!-- Light: gray-50, Dark: gray-800 -->
<div class="bismillah-bg-gray-50 dark:bismillah-bg-gray-800"></div>

<!-- Light: gray-100, Dark: gray-700 -->
<div class="bismillah-bg-gray-100 dark:bismillah-bg-gray-700"></div>`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Text Colors</h3>
              <CodeBlock language="html">
{`<!-- Primary text: gray-900 light, white dark -->
<p class="bismillah-text-gray-900 dark:bismillah-text-white"></p>

<!-- Secondary text: gray-600 light, gray-300 dark -->
<p class="bismillah-text-gray-600 dark:bismillah-text-gray-300"></p>

<!-- Tertiary text: gray-500 light, gray-400 dark -->
<p class="bismillah-text-gray-500 dark:bismillah-text-gray-400"></p>`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Borders</h3>
              <CodeBlock language="html">
{`<!-- Light: gray-200, Dark: gray-700 -->
<div class="bismillah-border bismillah-border-gray-200 dark:bismillah-border-gray-700"></div>`}
              </CodeBlock>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Accent Colors</h3>
              <CodeBlock language="html">
{`<!-- Use the same color in both modes, optionally adjust shades -->
<button class="bismillah-bg-blue-600 dark:bismillah-bg-blue-500"></button>
<button class="bismillah-bg-green-600 dark:bismillah-bg-green-500"></button>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Real-World Examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Card Component</h3>
              <CodeBlock language="html">
{`<div class="bismillah-bg-white dark:bismillah-bg-gray-800 bismillah-rounded-lg bismillah-shadow-lg dark:bismillah-shadow-xl bismillah-p-6">
  <h2 class="bismillah-text-xl bismillah-font-bold bismillah-text-gray-900 dark:bismillah-text-white bismillah-mb-2">
    Card Title
  </h2>
  <p class="bismillah-text-gray-600 dark:bismillah-text-gray-300 bismillah-mb-4">
    This is a card that adapts to dark mode automatically
  </p>
  <button class="bismillah-w-full bismillah-bg-blue-600 dark:bismillah-bg-blue-500 bismillah-text-white bismillah-py-2 bismillah-rounded bismillah-font-semibold hover:bismillah-bg-blue-700 dark:hover:bismillah-bg-blue-600 transition-colors">
    Action Button
  </button>
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Form Input</h3>
              <CodeBlock language="html">
{`<input 
  type="text"
  placeholder="Enter text"
  class="
    bismillah-w-full
    bismillah-px-4
    bismillah-py-2
    bismillah-border 
    bismillah-border-gray-300
    dark:bismillah-border-gray-600
    bismillah-bg-white
    dark:bismillah-bg-gray-700
    bismillah-text-gray-900
    dark:bismillah-text-white
    placeholder:bismillah-text-gray-400
    dark:placeholder:bismillah-text-gray-500
    focus:bismillah-ring-2
    focus:bismillah-ring-blue-500
    focus:dark:bismillah-ring-blue-400
    bismillah-rounded
  "
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Navigation Bar</h3>
              <CodeBlock language="html">
{`<nav class="bismillah-bg-gray-100 dark:bismillah-bg-gray-800 bismillah-border-b bismillah-border-gray-200 dark:bismillah-border-gray-700">
  <div class="bismillah-container bismillah-mx-auto bismillah-px-4">
    <div class="bismillah-flex bismillah-items-center bismillah-justify-between bismillah-py-4">
      <h1 class="bismillah-text-xl bismillah-font-bold bismillah-text-gray-900 dark:bismillah-text-white">
        Logo
      </h1>
      <div class="bismillah-flex bismillah-gap-4">
        <a href="#" class="bismillah-text-gray-600 dark:bismillah-text-gray-300 hover:bismillah-text-gray-900 dark:hover:bismillah-text-white">
          Home
        </a>
        <a href="#" class="bismillah-text-gray-600 dark:bismillah-text-gray-300 hover:bismillah-text-gray-900 dark:hover:bismillah-text-white">
          About
        </a>
      </div>
      <button onclick="toggleTheme()" class="bismillah-bg-gray-200 dark:bismillah-bg-gray-700 bismillah-text-gray-900 dark:bismillah-text-white bismillah-px-4 bismillah-py-2 bismillah-rounded">
        🌙
      </button>
    </div>
  </div>
</nav>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Configuration</h2>

          <p className="text-muted-foreground mb-4">
            Configure dark mode in your BismillahCSS config:
          </p>

          <CodeBlock language="javascript">
{`module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      // Your custom theme  
    }
  }
}`}
          </CodeBlock>

          <p className="text-muted-foreground mt-4 mb-2">
            <strong>Options:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li><code className="bg-gray-100 px-2 py-1 rounded">class</code>: Toggle using a class on the document element</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">media</code>: Follow system color scheme preference</li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Accessibility Considerations</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Sufficient contrast:</strong> Ensure text has enough contrast in both light and dark modes.
            </li>
            <li>
              <strong>Respect preferences:</strong> Check system color scheme preferences on first load.
            </li>
            <li>
              <strong>Provide toggle:</strong> Allow users to manually override their system preference.
            </li>
            <li>
              <strong>Use semantic colors:</strong> Maintain consistent meaning of colors across both modes.
            </li>
            <li>
              <strong>Test thoroughly:</strong> Test your design in both light and dark modes.
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Common Tips</h2>

          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Start with backgrounds:</strong> Define background colors first, then text colors.
            </li>
            <li>
              <strong>Use gray scales:</strong> Maintain consistent gray shades across the design.
            </li>
            <li>
              <strong>Keep accent colors consistent:</strong> Brand colors usually stay the same in both modes.
            </li>
            <li>
              <strong>Test with actual users:</strong> Get feedback from users who prefer dark mode.
            </li>
            <li>
              <strong>Animate transitions:</strong> Use transitions to smoothly switch between themes.
            </li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}
