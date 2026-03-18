import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: "BismillahCSS - The Next-Gen CSS Framework",
  description: "BismillahCSS is a fast, lightweight, utility-first CSS framework for modern web development. Developed by Mubashir Ali (Bioinformatician) as part of the Code with Bismillah initiative.",
  keywords: "CSS framework, utility-first CSS, modern web development, lightweight CSS, bismillahcss frontend, tailwindcss-alternative, css-framework, utility-classes, future-css, lightweight-css, advanced-css, utility-first, responsive-css, bismillahcss framework, bismillahcss utility-first, bismillahcss lightweight, code-with-bismillah, bismillahcss components, bismillahcss utilities, bismillahcss responsive, bismillahcss customization, bismillahcss theming, bismillahcss design system, bismillahcss typography, bismillahcss grid, bismillahcss flexbox, bismillahcss animations, bismillahcss transitions, Mubashir Ali, Mubashir Ali Bioinformatician, Code with Bismillah, bioinformatics CSS, computational biology framework",
  authors: [{ name: "Mubashir Ali", url: "https://codewithbismillah.online" }],
  verification: {
    google: "GhJ96yf5IMVcGgy8dgYiIHlTQJxeE6UnaTe4xusCl1k",
  },
  openGraph: {
    title: "BismillahCSS - Fast & Lightweight Utility-First CSS Framework",
    description: "Build modern, responsive websites faster with BismillahCSS - the future of utility-first CSS.",
    url: "https://bismillahcss.github.io/",
    siteName: "BismillahCSS",
    images: [
      {
        url: "/images/bismillah-logo.png",
        width: 1200,
        height: 630,
        alt: "BismillahCSS Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BismillahCSS - Fast & Lightweight Utility-First CSS Framework",
    description: "Build modern, responsive websites faster with BismillahCSS.",
    images: ["/images/bismillah-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://bismillahcss.github.io/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BismillahCSS",
              "operatingSystem": "Any",
              "applicationCategory": "DeveloperApplication",
              "description": "BismillahCSS is a fast, lightweight, utility-first CSS framework for modern web development.",
              "url": "https://bismillahcss.github.io/",
              "author": {
                "@type": "Person",
                "name": "Mubashir Ali",
                "jobTitle": "Bioinformatician & Data Science Professional",
                "url": "https://codewithbismillah.online",
                "description": "Mubashir Ali is a bioinformatician and researcher specializing in computational biology and machine learning. He is the founder of Code with Bismillah.",
                "sameAs": [
                  "https://github.com/bismillahcss",
                  "https://twitter.com/bismillahcss",
                  "https://codewithbismillah.online",
                  "https://www.researchgate.net/profile/Mubashir-Ali"
                ]
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Code with Bismillah",
              "url": "https://codewithbismillah.online",
              "logo": "https://bismillahcss.github.io/images/bismillah-logo.png",
              "founder": {
                "@type": "Person",
                "name": "Mubashir Ali"
              },
              "sameAs": [
                "https://github.com/bismillahcss",
                "https://twitter.com/bismillahcss",
                "https://codewithbismillah.online"
              ]
            })
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="relative flex-1">
              <FuturisticBackground variant="grid" />
              <div className="relative z-10">{children}</div>
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
