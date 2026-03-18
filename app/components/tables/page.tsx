"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, User, Mail, Search, MessageSquare, Info, AlertCircle, CheckCircle2, MoreVertical, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PageTransition } from "@/components/page-transition"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { ComponentShowcase } from "@/components/component-showcase"

export default function TablesPage() {
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$450.00",
            paymentMethod: "Credit Card",
        },
    ]

    return (
        <PageTransition>
            <div className="container py-10">
                <div className="mb-10">
                    <Link href="/components" className="text-sm text-primary hover:underline flex items-center mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Components
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        <AnimatedGradientText>Tables</AnimatedGradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive set of table components for displaying structured data efficiently.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Standard Table</h2>
                        <ComponentShowcase
                            title="Data Grid"
                            description="Basic tabular data layout"
                            code={`<table class="bismillah-table">...</table>`}
                        >
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Invoice</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Method</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((invoice) => (
                                        <TableRow key={invoice.invoice}>
                                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                            <TableCell>
                                                <Badge variant={invoice.paymentStatus === 'Paid' ? 'default' : 'secondary'}>
                                                    {invoice.paymentStatus}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{invoice.paymentMethod}</TableCell>
                                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell className="text-right">$1,200.00</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </ComponentShowcase>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold">Complex Rows</h2>
                        <ComponentShowcase
                            title="Row with Actions"
                            description="Table rows with contextual interactive points"
                            code={`<tr class="bismillah-table-row">...</tr>`}
                        >
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Service</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <div className="flex items-center space-x-3">
                                                <User className="h-6 w-6 text-primary" />
                                                <div>
                                                    <div className="font-bold">John Doe</div>
                                                    <div className="text-xs text-muted-foreground">john@example.com</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>Enterprise Plan</TableCell>
                                        <TableCell>$12.50/mo</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </ComponentShowcase>
                    </section>
                </div>
            </div>
        </PageTransition>
    )
}
