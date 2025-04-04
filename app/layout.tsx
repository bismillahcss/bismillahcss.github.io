import React from 'react';
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FuturisticBackground } from "@/components/futuristic-background";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BismillahCSS - The Next-Gen CSS Framework",
  description: "Fast, lightweight, utility-first CSS framework for modern web development",
  keywords: "CSS framework, utility-first CSS, modern web development, lightweight CSS bismillahcss frontend, tailwindcss-alternative, css-framework, utility-classes, future-css, lightweight-css, advanced-cssutility, firstresponsive-css, framework, bismillahcss, bismillah, css, bismillahcss framework, bismillahcss utility-first, bismillahcss lightweight, code-with-bismillah, bismillahcss components, bismillahcss utilities, bismillahcss responsive, bismillahcss customization, bismillahcss theming, bismillahcss design system, bismillahcss typography, bismillahcss grid, bismillahcss flexbox, bismillahcss animations, bismillahcss transitions",
  author: "BismillahCSS - Mubashir Ali ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bismillahcss.com" />
        <meta property="og:image" content="./" />
        <link rel="icon" href="./images/bismillah-logo.png" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="relative flex-1">
              <FuturisticBackground variant="grid" />
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
