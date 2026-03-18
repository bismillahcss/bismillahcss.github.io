"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Info, AlertCircle, CheckCircle2, AlertTriangle, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function AlertsPage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Alerts & Feedback</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive set of feedback components to inform users about success, error, or system information.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Standard Variants</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Informative Alerts"
                                description="Neutral informational messages"
                                code={`<div class="bismillah-alert">...</div>`}
                            >
                                <div className="space-y-4">
                                    <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertTitle>Information</AlertTitle>
                                        <AlertDescription>
                                            This is an informational alert with neutral styling.
                                        </AlertDescription>
                                    </Alert>
                                    <Alert className="bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800">
                                        <Terminal className="h-4 w-4" />
                                        <AlertTitle>Terminal Access</AlertTitle>
                                        <AlertDescription>
                                            You can access the CLI from the command terminal now.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Success Alerts"
                                description="Positive outcome confirmation"
                                code={`<div class="bismillah-alert bismillah-alert-success">...</div>`}
                            >
                                <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <AlertTitle>Success</AlertTitle>
                                    <AlertDescription>
                                        Your changes have been saved successfully to the system.
                                    </AlertDescription>
                                </Alert>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Warning & Error States</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Warning Messages"
                                description="Cautionary system notifications"
                                code={`<div class="bismillah-alert bismillah-alert-warning">...</div>`}
                            >
                                <Alert className="bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800">
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertTitle>Warning</AlertTitle>
                                    <AlertDescription>
                                        Your account subscription will expire in 3 days.
                                    </AlertDescription>
                                </Alert>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Destructive Alerts"
                                description="Error or critical system messages"
                                code={`<div class="bismillah-alert bismillah-alert-danger">...</div>`}
                            >
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>
                                        There was a problem processing your request. Please try again.
                                    </AlertDescription>
                                </Alert>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Alert Layouts</h2>
                        <ComponentShowcase
                            title="Alert with Actions"
                            description="Informational alerts with interaction points"
                            code={`<div class="bismillah-alert-layout">...</div>`}
                        >
                            <Alert className="bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:border-purple-800">
                                <Info className="h-4 w-4" />
                                <AlertTitle>System Update Available</AlertTitle>
                                <AlertDescription className="flex items-center justify-between mt-2">
                                    <span>A newer version of the components library is ready to install.</span>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" className="border-purple-300 hover:bg-purple-100">Dismiss</Button>
                                        <Button size="sm" className="bg-purple-700 hover:bg-purple-800 text-white">Update Now</Button>
                                    </div>
                                </AlertDescription>
                            </Alert>
                        </ComponentShowcase>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
