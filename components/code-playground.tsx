"use client"
import React from 'react'
import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

import { BismillahIsolated } from "./bismillah-isolated"

export function CodePlayground() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const htmlCode = `<!-- Button Example -->
<button class="bismillah-btn bismillah-btn-primary bismillah-rounded bismillah-px-4 bismillah-py-2 bismillah-text-white bismillah-font-medium bismillah-shadow-sm hover:bismillah-shadow-md transition-all">
  Button Example
</button>

<!-- Card component -->
<div class="bismillah-card bismillah-p-6 bismillah-rounded-lg bismillah-border bismillah-shadow-sm hover:bismillah-shadow-md transition-all">
  <h3 class="bismillah-text-lg bismillah-font-semibold">Card Title</h3>
  <p class="bismillah-text-secondary bismillah-mt-2">This is a card built with BismillahCSS utility classes.</p>
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
          <BismillahIsolated>
            <div className="bismillah-flex bismillah-flex-col bismillah-gap-6 bismillah-p-4 bismillah-w-100">
              <button className="bismillah-btn bismillah-btn-primary bismillah-rounded bismillah-px-4 bismillah-py-2 bismillah-text-white bismillah-font-medium bismillah-shadow-sm hover:bismillah-shadow-md transition-all">
                Button Example
              </button>

              <div className="bismillah-card bismillah-p-6 bismillah-rounded-lg bismillah-border bismillah-shadow-sm hover:bismillah-shadow-md transition-all">
                <h3 className="bismillah-text-lg bismillah-font-semibold">Card Title</h3>
                <p className="bismillah-text-secondary bismillah-mt-2">This is a card built with BismillahCSS utility classes.</p>
              </div>
            </div>
          </BismillahIsolated>
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

