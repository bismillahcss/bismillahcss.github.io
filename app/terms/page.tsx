import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Terms & Conditions | BismillahCSS",
    description: "Terms and conditions for using the BismillahCSS framework and website.",
};

export default function TermsPage() {
    return (
        <div className="container py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-6">Last updated: March 19, 2024</p>

            <section className="mb-8 prose prose-invert max-w-none">
                <h2>Acceptance of Terms</h2>
                <p>
                    By accessing or using BismillahCSS, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services or framework.
                </p>

                <h2>License to Use</h2>
                <p>
                    BismillahCSS is licensed under the MIT License. You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software as long as the license terms (copyright notice and permission notice) are included in all copies or substantial portions of the software.
                </p>

                <h2>User Responsibilities</h2>
                <p>
                    You are responsible for any code you write using our framework. We do not guarantee that our framework is suitable for every purpose or that it will be error-free.
                </p>

                <h2>Restrictions</h2>
                <p>
                    You may not use BismillahCSS for any illegal activities or to create malicious software. You agree not to attempt to interfere with the operation of our website or reverse-engineer its proprietary components.
                </p>

                <h2>Disclaimer</h2>
                <p>
                    BISMILLAHCSS IS PROVIDED "AS IS" AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>

                <h2>Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction where the authors reside, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
            </section>
        </div>
    );
}
