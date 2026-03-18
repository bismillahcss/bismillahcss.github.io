<p align="center">
  <a href="https://bismillahcss.github.io/">
    <img src="https://bismillahcss.github.io/images/bismillah-logo.png" alt="BismillahCSS Logo" width="200" height="auto">
  </a>
</p>

<h1 align="center">BismillahCSS</h1>

<p align="center">
  <strong>A modern, high-performance, and utility-first CSS framework for rapid UI development.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/bismillahcss"><img src="https://img.shields.io/npm/v/bismillahcss.svg?style=flat-square" alt="NPM Version"></a>
  <a href="https://github.com/bismillahcss/bismillahcss/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License"></a>
  <a href="https://bismillahcss.github.io/"><img src="https://img.shields.io/badge/docs-v1.9.0-green.svg?style=flat-square" alt="Documentation"></a>
</p>

---

## Introduction

**BismillahCSS** is a utility-first CSS framework designed for speed, flexibility, and performance. Built with modern web development in mind, it provides a powerful set of low-level utility classes that allow you to build custom designs without ever leaving your HTML.

Developed by **Mubashir Ali** (Bioinformatician) as part of the **Code with Bismillah** initiative, it aims to simplify the bridge between complex data visualization and beautiful user interfaces.

## Key Features

- **Utility-First**: Rapidly build custom interfaces without writing a single line of custom CSS.
- **Fully Responsive**: Mobile-first grid system and responsive utilities for every screen size.
- **Deeply Customizable**: Easily extend the theme with custom colors, spacing, and fonts via `bismillah.config.js`.
- **Pre-built Components**: Access a collection of accessible, professional-grade UI components.
- **Performance Oriented**: Built with PostCSS for zero-runtime overhead and tiny bundle sizes.
- **Native Dark Mode**: Support for system-level and manual dark mode switching.

## Installation

### Using CDN (Quick Start)
Add the following to your `<head>` tag:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bismillahcss@latest/dist/bismillah.min.css">
```

### Using NPM (Recommended)
```bash
npm install bismillahcss
```

Then import it in your main CSS or JS file:
```javascript
// In your JS/TS file
import "bismillahcss/dist/bismillah.css";
```
or 
```css
/* In your CSS file */
@import "bismillahcss/dist/bismillah.css";
```

## Usage Example

Build a beautiful card in seconds:

```html
<div class="bismillah-container bismillah-mx-auto bismillah-p-10">
  <div class="bismillah-max-w-sm bismillah-rounded bismillah-overflow-hidden bismillah-shadow-lg bismillah-bg-white bismillah-p-6">
    <h2 class="bismillah-text-2xl bismillah-font-bold bismillah-mb-2 bismillah-text-primary">
      Hello BismillahCSS!
    </h2>
    <p class="bismillah-text-gray-700 bismillah-text-base">
      This is a simple card component built using BismillahCSS utility classes.
    </p>
    <button class="bismillah-mt-4 bismillah-bg-blue-600 bismillah-text-white bismillah-py-2 bismillah-px-4 bismillah-rounded bismillah-hover:bg-blue-700 bismillah-transition">
      Get Started
    </button>
  </div>
</div>
```

## Customization

Initialize your configuration file:
```bash
npx bismillahcss init
```

Customize your `bismillah.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#4F46E5',
        bio: '#10B981',
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}
```

## Quick Links

- [Official Documentation](https://bismillahcss.github.io/docs)
- [Component Showcase](https://bismillahcss.github.io/components)
- [Playground](https://bismillahcss.github.io/playground)
- [Blog](https://bismillahcss.github.io/blog)
- [Community](https://bismillahcss.github.io/community)

## Developed By

**Mubashir Ali**
*Bioinformatician & Data Scientist*
Founder of **Code with Bismillah**

- GitHub: [@mubashir-ali-bio](https://github.com/bismillahcss)
- Website: [codewithbismillah.online](https://codewithbismillah.online)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built by the BismillahCSS Community
</p>
