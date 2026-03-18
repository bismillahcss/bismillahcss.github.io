"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, User, Mail, Search, Lock, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function FormsPage() {
    const [progress, setProgress] = useState(45)

    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Forms & Inputs</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive set of input elements and form components for building user data entry interfaces.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Standard Inputs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Input Fields"
                                description="Basic text and password inputs"
                                code={`<input class="bismillah-input" type="email" />
<input class="bismillah-input" type="password" />`}
                            >
                                <div className="space-y-4">
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input type="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" placeholder="Password" />
                                    </div>
                                </div>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Input with Icons"
                                description="Inputs with visual context cues"
                                code={`<div class="bismillah-input-wrapper">
  <i class="icon-search"></i>
  <input class="bismillah-input" type="text" />
</div>`}
                            >
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="text" placeholder="Search components..." className="pl-8" />
                                    </div>
                                    <div className="relative">
                                        <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input type="text" placeholder="Username" className="pl-8" />
                                    </div>
                                </div>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Selection Controls</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ComponentShowcase
                                title="Checkbox"
                                description="Multiple selection option"
                                code={`<input type="checkbox" />`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <Label htmlFor="terms">Accept terms</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="newsletter" defaultChecked />
                                        <Label htmlFor="newsletter">Subscribe</Label>
                                    </div>
                                </div>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Radio & Toggle"
                                description="Single selection controls"
                                code={`<input type="radio" />`}
                            >
                                <RadioGroup defaultValue="one">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="one" id="one" />
                                        <Label htmlFor="one">Option One</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="two" id="two" />
                                        <Label htmlFor="two">Option Two</Label>
                                    </div>
                                </RadioGroup>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Switch Controls"
                                description="Binary state toggles"
                                code={`<input type="checkbox" class="bismillah-switch" />`}
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="wifi">Wireless FI</Label>
                                        <Switch id="wifi" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="airplane">Airplane Mode</Label>
                                        <Switch id="airplane" />
                                    </div>
                                </div>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Advanced Selectors</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Select Menus"
                                description="Floating dropdown selection"
                                code={`<select class="bismillah-select">...</select>`}
                            >
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selection Choose" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="next">Next.js</SelectItem>
                                        <SelectItem value="react">React</SelectItem>
                                        <SelectItem value="vue">Vue</SelectItem>
                                        <SelectItem value="angular">Angular</SelectItem>
                                    </SelectContent>
                                </Select>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Range Sliders"
                                description="Linear value selection"
                                code={`<input type="range" />`}
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <Label>Intensity: {progress}%</Label>
                                    </div>
                                    <Slider
                                        defaultValue={[45]}
                                        max={100}
                                        step={1}
                                        onValueChange={(value) => setProgress(value[0])}
                                    />
                                </div>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Form Layouts</h2>
                        <ComponentShowcase
                            title="Full Form Example"
                            description="Complete contact form implementation"
                            code={`<form class="bismillah-form">...</form>`}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Support</CardTitle>
                                    <CardDescription>Tell us about your questions or issues.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="fname">First Name</Label>
                                            <Input id="fname" placeholder="First Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lname">Last Name</Label>
                                            <Input id="lname" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cemail">Email</Label>
                                        <Input id="cemail" type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cmessage">Message</Label>
                                        <Textarea id="cmessage" placeholder="How can we help?" />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Submit Ticket</Button>
                                </CardFooter>
                            </Card>
                        </ComponentShowcase>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
