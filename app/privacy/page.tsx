import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Privacy Policy | BismillahCSS",
    description: "Our commitment to protecting your privacy and personal data at BismillahCSS.",
};

export default function PrivacyPage() {
    return (
        <div className="container py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: March 19, 2024</p>

            <section className="mb-8 prose prose-invert max-w-none">
                <h2>Introduction</h2>
                <p>
                    At BismillahCSS, we take your privacy seriously. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our framework.
                </p>

                <h2>Information Collection</h2>
                <p>
                    We do not collect personal identification information from our users. Our website may collect non-personal information such as browser type, operating system, and IP address for analytics purposes to improve our services.
                </p>

                <h2>Use of Cookies</h2>
                <p>
                    We use essential cookies to ensure the website functions correctly and to remember your theme preferences (dark/light mode). We also use analytics cookies (e.g., Vercel Analytics) to understand how users interact with our site.
                </p>

                <h2>Third-Party Services</h2>
                <p>
                    We may use third-party services like GitHub for hosting and Vercel for deployment and analytics. These services have their own privacy policies.
                </p>

                <h2>Data Security</h2>
                <p>
                    We implement appropriate security measures to protect against unauthorized access, alteration, or disclosure of non-personal data.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at bismillahcss@gmail.com or via our GitHub repository.
                </p>
            </section>
        </div>
    );
}
