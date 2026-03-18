"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Mail, Search, MessageSquare, Info, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function ModalsPage() {
    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Modals & Overlays</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive set of overlay components for focused actions, notifications, and context.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Dialogs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Standard Dialog"
                                description="Prompt for user interaction"
                                code={`<div class="bismillah-modal">...</div>`}
                            >
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline">Edit Profile</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Edit profile</DialogTitle>
                                            <DialogDescription>
                                                Make changes to your profile here. Click save when you're done.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="name" className="text-right">
                                                    Name
                                                </Label>
                                                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="username" className="text-right">
                                                    Username
                                                </Label>
                                                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit">Save changes</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Alert Dialog"
                                description="Interruptive modal for critical actions"
                                code={`<div class="bismillah-alert-dialog">...</div>`}
                            >
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive">Delete Account</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your
                                                account and remove your data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </ComponentShowcase>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Sheets & Sidebars</h2>
                        <ComponentShowcase
                            title="Side Drawer"
                            description="Overlay pane for additional context or navigation"
                            code={`<div class="bismillah-sheet">...</div>`}
                        >
                            <div className="flex gap-4">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline">Open Right</Button>
                                    </SheetTrigger>
                                    <SheetContent side="right">
                                        <SheetHeader>
                                            <SheetTitle>Navigation Content</SheetTitle>
                                            <SheetDescription>
                                                Access your navigation settings and profile here.
                                            </SheetDescription>
                                        </SheetHeader>
                                        <div className="grid gap-4 py-4">
                                            <Button variant="ghost" className="justify-start w-full">Home</Button>
                                            <Button variant="ghost" className="justify-start w-full">Settings</Button>
                                            <Button variant="ghost" className="justify-start w-full">Profile</Button>
                                        </div>
                                        <SheetFooter>
                                            <Button className="w-full">Logout</Button>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline">Open Top</Button>
                                    </SheetTrigger>
                                    <SheetContent side="top">
                                        <SheetHeader>
                                            <SheetTitle>Global Settings</SheetTitle>
                                        </SheetHeader>
                                        <p className="py-4">Configure global application settings and themes.</p>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Contextual Overlays</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ComponentShowcase
                                title="Popovers"
                                description="Small overlay pane for interactive content"
                                code={`<div class="bismillah-popover">...</div>`}
                            >
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline">Open Popover</Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className="grid gap-4">
                                            <div className="space-y-2">
                                                <h4 className="font-medium leading-none">Dimensions</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Set the dimensions for the layer.
                                                </p>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </ComponentShowcase>

                            <ComponentShowcase
                                title="Tooltips"
                                description="Contextual information on hover"
                                code={`<span class="bismillah-tooltip">...</span>`}
                            >
                                <TooltipProvider>
                                    <div className="flex gap-4 items-center">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="outline" size="icon"><Info className="h-4 w-4" /></Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Detailed information about this feature.</p>
                                            </TooltipContent>
                                        </Tooltip>
                                        <span>Hover icon for info</span>
                                    </div>
                                </TooltipProvider>
                            </ComponentShowcase>
                        </div>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
