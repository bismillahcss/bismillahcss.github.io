"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, User, Mail, Search, MessageSquare, Info, AlertCircle, CheckCircle2, Layout, Sliders, Settings, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function TabsPage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Tabs</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A diverse collection of tab components for organizing content into separate views or sections.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Standard Tabs</h2>
                        <ComponentShowcase
                            title="Content Sections"
                            description="Basic horizontal tab navigation"
                            code={`<div class="bismillah-tabs">
  <ul>
    <li>Account</li>
    <li>Password</li>
    <li>Settings</li>
  </ul>
</div>`}
                        >
                            <Tabs defaultValue="account" className="w-[400px]">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="account">Account</TabsTrigger>
                                    <TabsTrigger value="password">Password</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account" className="p-4 border rounded-b-lg">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold">Account Settings</h3>
                                        <p className="text-sm text-muted-foreground">Update your account information and preferences here.</p>
                                    </div>
                                </TabsContent>
                                <TabsContent value="password" className="p-4 border rounded-b-lg">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold">Password Security</h3>
                                        <p className="text-sm text-muted-foreground">Change your password and manage your security settings.</p>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Icon Tabs</h2>
                        <ComponentShowcase
                            title="Visual Navigation"
                            description="Tabs with icons for clearer context"
                            code={`<div class="bismillah-tabs-icons">...</div>`}
                        >
                            <Tabs defaultValue="profile" className="w-full">
                                <TabsList className="p-1 bg-muted rounded-lg flex space-x-2 w-fit">
                                    <TabsTrigger value="profile" className="px-4 py-2 flex items-center gap-2">
                                        <User className="h-4 w-4" /> Profile
                                    </TabsTrigger>
                                    <TabsTrigger value="settings" className="px-4 py-2 flex items-center gap-2">
                                        <Settings className="h-4 w-4" /> Settings
                                    </TabsTrigger>
                                    <TabsTrigger value="notifications" className="px-4 py-2 flex items-center gap-2">
                                        <Bell className="h-4 w-4" /> Activity <Badge variant="secondary" className="ml-1 px-1">2</Badge>
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="profile" className="mt-4">
                                    <div className="p-6 bg-card border rounded-lg">Profile content panel details here.</div>
                                </TabsContent>
                            </Tabs>
                        </ComponentShowcase>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
