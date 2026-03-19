import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "License (MIT) | BismillahCSS",
    description: "BismillahCSS is licensed under the MIT License, which is a popular, permissive open-source license.",
};

export default function LicensePage() {
    return (
        <div className="container py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">MIT License</h1>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono border">
                {`Copyright (c) 2024-2025 Mubashir Ali (Bioinformatician) and BismillahCSS Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>

            <section className="mt-12 prose prose-invert max-w-none">
                <h2>What does this mean?</h2>
                <p>In short, the MIT License says that you can use BismillahCSS for anything you want, provided that the original copyright notice and permission notice are included. Here's what you can do with it:</p>
                <ul>
                    <li><strong>Personal/Commercial use:</strong> You can use it in both your own projects and those for clients.</li>
                    <li><strong>Modification:</strong> You're free to change the code as you see fit.</li>
                    <li><strong>Distribution:</strong> You can give the code to others or sell it as part of a larger project.</li>
                    <li><strong>Sublicensing:</strong> You can incorporate it into projects with different licenses.</li>
                </ul>
                <h3>What's the catch?</h3>
                <p>The only real stricture is that you must include the original copyright notice in any copies of the software.</p>
                <p>Also, because the library is provided free of charge, the authors and contributors cannot be held liable for any issues that may arise from using it. It's provided "as is."</p>
            </section>
        </div>
    );
}
