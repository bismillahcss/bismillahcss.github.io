"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Mail, Search, MessageSquare, Info, AlertCircle, CheckCircle2, Layout, Sliders, Settings, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { PageTransition } from "@/components/page-transition"

export default function SubmitProjectPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <PageTransition>
                <div className="container py-20 text-center max-w-2xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-12 w-12 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-4">Project Submitted!</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        Thank you for sharing your work with the community. We'll review your project and list it in the showcase soon.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button asChild>
                            <Link href="/community/showcase">View Showcase</Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/community">Back to Community</Link>
                        </Button>
                    </div>
                </div>
            </PageTransition>
        )
    }

    return (
        <PageTransition>
            <div className="container py-10 max-w-3xl mx-auto">
                <div className="mb-10">
                    <Link href="/community" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Community
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Submit Your Project</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Share what you've built with BismillahCSS and inspire others in the community.
                    </p>
                </div>

                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardHeader>
                            <CardTitle>Project Information</CardTitle>
                            <CardDescription>
                                Provide details about your project to help us showcase it better.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Project Title</Label>
                                    <Input id="title" placeholder="My Awesome Project" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category</Label>
                                    <Select required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="template">Template</SelectItem>
                                            <SelectItem value="dashboard">Dashboard</SelectItem>
                                            <SelectItem value="webapp">Web App</SelectItem>
                                            <SelectItem value="landing">Landing Page</SelectItem>
                                            <SelectItem value="mobile">Mobile Web</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Short Description</Label>
                                <Textarea id="description" placeholder="Describe what makes your project unique..." className="h-24" required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="live-url">Live URL (Optional)</Label>
                                    <div className="relative">
                                        <ExternalLink className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input id="live-url" placeholder="https://example.com" className="pl-8" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="repo-url">Repository URL</Label>
                                    <div className="relative">
                                        <Github className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input id="repo-url" placeholder="https://github.com/user/repo" className="pl-8" required />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Open Source</Label>
                                    <p className="text-sm text-muted-foreground italic">Project is publicly accessible for everyone.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="creator">Creator Name</Label>
                                <Input id="creator" placeholder="Your Name or Alias" required />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-4 border-t pt-6">
                            <Button variant="outline" type="reset">Reset Form</Button>
                            <Button type="submit">Submit for Review</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </PageTransition>
    )
}
