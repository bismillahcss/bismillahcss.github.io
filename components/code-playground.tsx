"use client"
import React from 'react'
import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export function CodePlayground() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const htmlCode = `<!-- Example button with BismillahCSS classes -->
<button class="b-btn b-btn-primary b-rounded b-px-4 b-py-2 b-text-white b-font-medium b-shadow-sm hover:b-shadow-md transition-all">
Button Example
</button>

<!-- Card component with BismillahCSS -->
<div class="b-card b-p-6 b-rounded-lg b-border b-shadow-sm hover:b-shadow-md transition-all">
<h3 class="b-text-lg b-font-semibold">Card Title</h3>
<p class="b-text-muted b-mt-2">This is a card built with BismillahCSS utility classes.</p>
<div class="b-mt-4 b-flex b-gap-2">
  <button class="b-btn b-btn-primary b-rounded b-px-3 b-py-1 b-text-sm">
    Action
  </button>
  <button class="b-btn b-btn-outline b-rounded b-px-3 b-py-1 b-text-sm">
    Cancel
  </button>
</div>
</div>`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg border shadow-sm overflow-hidden bg-background/80 backdrop-blur-sm"
    >
      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between border-b px-2 sm:px-4">
          <TabsList className="ml-auto mr-auto">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(htmlCode)} className="mr-1 sm:mr-2">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </Button>
        </div>

        <TabsContent value="preview" className="p-2 sm:p-4">
          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.div whileHover={{ y: -2 }}>
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium shadow-sm hover:shadow-md transition-all">
                Button Example
              </button>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              className="p-4 sm:p-6 rounded-lg border shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="text-muted-foreground mt-2">This is a card built with BismillahCSS utility classes.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">Action</button>
                <button className="rounded-md border px-3 py-1 text-sm">Cancel</button>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="p-0">
          <pre className="overflow-x-auto p-2 sm:p-4 text-sm">
            <code>{htmlCode}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

