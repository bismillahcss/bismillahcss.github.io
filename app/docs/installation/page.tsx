import type { Metadata } from "next"
import React from 'react'
import { CodeBlock } from "@/components/code-block"
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
  title: "Installation - BismillahCSS",
  description: "Learn how to install BismillahCSS via CDN, NPM, or PostCSS. Quick and easy setup for any project.",
}


export default function InstallationPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">BismillahCSS Installation Guide</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to BismillahCSS!  This guide will help you install and set up BismillahCSS for your project. Whether
          you're using it via CDN, NPM, or custom builds, we’ve got you covered.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📌 1. Installation Methods</h2>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 A. Using CDN (Quick Setup)</h3>
            <p className="text-muted-foreground">
              If you want a simple way to use BismillahCSS without installing anything, you can link it using a CDN.
              Just add the following &lt;link&gt; tag inside your HTML &lt;head&gt;:
            </p>
            <CodeBlock language="html">
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My BismillahCSS Project</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bismillahcss@latest/dist/bismillah.min.css">
</head>
<body>
    <h1 class="bismillah-text-3xl bismillah-text-blue-500">Hello, BismillahCSS!</h1>
</body>
</html>`}
            </CodeBlock>
            <div className="flex gap-4">
              <p className="text-green-500">✅ Pros: Fast, No installation required</p>
              <p className="text-red-500">❌ Cons: Less customization</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 B. Using NPM (Recommended for Developers)</h3>
            <p className="text-muted-foreground">
              For better control and customization, install BismillahCSS via NPM/Yarn.
            </p>
            <p>
              <strong>Step 1:</strong> Initialize Your Project (if not already done)
            </p>
            <p className="text-muted-foreground">
              Run the following command to create a package.json file if you don’t have one:
            </p>
            <CodeBlock language="sh">npm init -y</CodeBlock>
            <p>
              <strong>Step 2:</strong> Install BismillahCSS
            </p>
            <p className="text-muted-foreground">Now, install BismillahCSS:</p>
            <CodeBlock language="sh">npm install bismillahcss</CodeBlock>
            <p>
              <strong>Step 3:</strong> Import BismillahCSS in Your CSS File
            </p>
            <p className="text-muted-foreground">Create a styles.css file and import BismillahCSS:</p>
            <CodeBlock language="css">@import "bismillahcss/dist/bismillah.css";</CodeBlock>
            <p className="text-muted-foreground">Or import it directly in your JavaScript file:</p>
            <CodeBlock language="js">import "bismillahcss/dist/bismillah.css";</CodeBlock>
            <p>
              <strong>Step 4:</strong> Use It in Your HTML
            </p>
            <p className="text-muted-foreground">Now, use the utility classes in your HTML file:</p>
            <CodeBlock language="html">
              {`<button class="bismillah-bg-blue-600 bismillah-text-white bismillah-py-2 bismillah-px-4 bismillah-rounded">
    Click Me
</button>`}
            </CodeBlock>
            <div className="flex gap-4">
              <p className="text-green-500">✅ Pros: Customizable, easy to update</p>
              <p className="text-red-500">❌ Cons: Requires Node.js</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 C. Using BismillahCSS with PostCSS (Advanced Customization)</h3>
            <p className="text-muted-foreground">
              If you want full control over BismillahCSS, you can integrate it with PostCSS.
            </p>
            <p>
              <strong>Step 1:</strong> Install Required Packages
            </p>
            <p className="text-muted-foreground">Run the following command:</p>
            <CodeBlock language="sh">npm install postcss postcss-cli autoprefixer bismillahcss</CodeBlock>
            <p>
              <strong>Step 2:</strong> Create a postcss.config.js File
            </p>
            <p className="text-muted-foreground">Inside your project root, create a postcss.config.js file:</p>
            <CodeBlock language="js">
              {`module.exports = {
    plugins: [
        require("bismillahcss"),
        require("autoprefixer")
    ]
};`}
            </CodeBlock>
            <p>
              <strong>Step 3:</strong> Build Your CSS
            </p>
            <p className="text-muted-foreground">Run the following command to compile your CSS:</p>
            <CodeBlock language="sh">npx postcss styles.css -o output.css</CodeBlock>
            <p className="text-muted-foreground">Now, link output.css in your HTML file.</p>
            <div className="flex gap-4">
              <p className="text-green-500">✅ Pros: Best for large projects</p>
              <p className="text-red-500">❌ Cons: Requires extra configuration</p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📌 2. Customization (Config File)</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 A. Create a Config File</h3>
            <p className="text-muted-foreground">Run the following command:</p>
            <CodeBlock language="sh">npx bismillahcss init</CodeBlock>
            <p className="text-muted-foreground">This will generate a bismillah.config.js file like this:</p>
            <CodeBlock language="js">
              {`module.exports = {
    theme: {
        colors: {
            primary: "#4F46E5",
            secondary: "#10B981",
            danger: "#EF4444"
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem'
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ["hover", "focus"],
            textColor: ["hover", "focus"]
        }
    },
    plugins: []
};`}
            </CodeBlock>
            <p className="text-muted-foreground">Modify this file to add custom themes, colors, and utilities.</p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📌 3. Using BismillahCSS in Different Environments</h2>
          <p className="text-muted-foreground">BismillahCSS works everywhere, including:</p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 A. Using with React.js</h3>
            <p className="text-muted-foreground">In a React.js project, install BismillahCSS using NPM:</p>
            <CodeBlock language="sh">npm install bismillahcss</CodeBlock>
            <p className="text-muted-foreground">Then, import it in index.js or App.js:</p>
            <CodeBlock language="js">import "bismillahcss/dist/bismillah.css";</CodeBlock>
            <p className="text-muted-foreground">Now, use the classes in your JSX:</p>
            <CodeBlock language="jsx">
              {`<button className="bismillah-bg-blue-500 bismillah-text-white bismillah-px-4 bismillah-py-2">
    React Button
</button>`}
            </CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 B. Using with Next.js</h3>
            <p className="text-muted-foreground">For a Next.js project, install BismillahCSS:</p>
            <CodeBlock language="sh">npm install bismillahcss</CodeBlock>
            <p className="text-muted-foreground">Import it in _app.js:</p>
            <CodeBlock language="js">import "bismillahcss/dist/bismillah.css";</CodeBlock>
            <p className="text-muted-foreground">Now, use the classes inside Next.js components.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">🔹 C. Using with Vue.js</h3>
            <p className="text-muted-foreground">For a Vue.js project, install BismillahCSS:</p>
            <CodeBlock language="sh">npm install bismillahcss</CodeBlock>
            <p className="text-muted-foreground">Import it in main.js:</p>
            <CodeBlock language="js">import "bismillahcss/dist/bismillah.css";</CodeBlock>
            <p className="text-muted-foreground">Use the classes inside Vue templates:</p>
            <CodeBlock language="html">
              {`<template>
    <button class="bismillah-bg-green-500 bismillah-text-white bismillah-py-2 bismillah-px-4">
        Vue Button
    </button>
</template>`}
            </CodeBlock>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📌 4. BismillahCSS CDN vs. NPM vs. PostCSS (Comparison)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="border p-2">Method</th>
                  <th className="border p-2">Pros</th>
                  <th className="border p-2">Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">CDN</td>
                  <td className="border p-2">Fast, No setup required</td>
                  <td className="border p-2">No customization</td>
                </tr>
                <tr>
                  <td className="border p-2">NPM</td>
                  <td className="border p-2">Customizable, Best for large projects</td>
                  <td className="border p-2">Requires Node.js</td>
                </tr>
                <tr>
                  <td className="border p-2">PostCSS</td>
                  <td className="border p-2">Full control, Best for production</td>
                  <td className="border p-2">Requires extra setup</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📌 5. FAQs (Frequently Asked Questions)</h2>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">❓ 1. How do I update BismillahCSS?</h3>
            <p className="text-muted-foreground">Run the following command to update:</p>
            <CodeBlock language="sh">npm update bismillahcss</CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">❓ 2. Does BismillahCSS support dark mode?</h3>
            <p className="text-muted-foreground">Yes! Use bismillah-dark mode classes.</p>
            <p className="text-muted-foreground">Example:</p>
            <CodeBlock language="html">
              {`<div class="bismillah-dark bismillah-bg-gray-900 bismillah-text-white">
    Dark Mode Example
</div>`}
            </CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">❓ 3. How do I add custom colors?</h3>
            <p className="text-muted-foreground">Modify bismillah.config.js like this:</p>
            <CodeBlock language="js">
              {`module.exports = {
    theme: {
        extend: {
            colors: {
                mycustomcolor: "#FF5733"
            }
        }
    }
};`}
            </CodeBlock>
            <p className="text-muted-foreground">Now, use it:</p>
            <CodeBlock language="html">
              {`<p class="bismillah-text-mycustomcolor">This is a custom color!</p>`}
            </CodeBlock>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">❓ 4. Can I use BismillahCSS with Bootstrap or Tailwind?</h3>
            <p className="text-muted-foreground">
              Yes, but it’s recommended to use only one framework to avoid conflicts.
            </p>
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">📌 6. Conclusion</h2>
          <p className="text-lg text-muted-foreground">
            Now you know how to install, customize, and use BismillahCSS! 🚀
          </p>
          <ul className="list-disc pl-5 text-lg text-muted-foreground">
            <li>🔹 Quick Setup: Use the CDN</li>
            <li>🔹 Recommended: Use NPM for customization</li>
            <li>🔹 Advanced: Use PostCSS for full control</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  )
}

