"use client"
import React from 'react'
import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface ComponentShowcaseProps {
  title: string
  description: string
  code: string
  children: React.ReactNode
}

export function ComponentShowcase({ title, description, code, children }: ComponentShowcaseProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg border shadow-sm overflow-hidden bg-background/80 backdrop-blur-sm"
    >
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>

      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between border-b px-4">
          <TabsList className="ml-auto mr-auto">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="icon" onClick={copyToClipboard} className="mr-2">
            {copied ? <span className="text-green-500 text-xs">Copied!</span> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </Button>
        </div>

        <TabsContent value="preview" className="p-6">
          {children}
        </TabsContent>

        <TabsContent value="code" className="p-0">
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="language-html">{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

