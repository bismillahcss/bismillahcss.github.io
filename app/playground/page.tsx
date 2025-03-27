"use client"

import { useState } from "react"
import { GlowButton } from "@/components/glow-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Copy, Download, RefreshCw } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { FuturisticBackground } from "@/components/futuristic-background"

export default function PlaygroundPage() {
  const [htmlCode, setHtmlCode] = useState(`<div class="b-container b-mx-auto b-p-4">
<h1 class="b-text-3xl b-font-bold b-mb-4">BismillahCSS Playground</h1>

<div class="b-flex b-flex-col b-gap-4 md:b-flex-row">
  <div class="b-card b-p-6 b-rounded-lg b-border b-shadow-md b-flex-1">
    <h2 class="b-text-xl b-font-semibold b-mb-2">Card Example</h2>
    <p class="b-text-muted">
      This is a simple card component built with BismillahCSS utility classes.
    </p>
    <div class="b-mt-4">
      <button class="b-btn b-btn-primary b-rounded b-px-4 b-py-2">
        Click me
      </button>
    </div>
  </div>
  
  <div class="b-card b-p-6 b-rounded-lg b-border b-shadow-md b-flex-1">
    <h2 class="b-text-xl b-font-semibold b-mb-2">Try it yourself</h2>
    <p class="b-text-muted">
      Edit the code on the left to see changes reflected in the preview.
    </p>
    <div class="b-mt-4 b-flex b-gap-2">
      <button class="b-btn b-btn-outline b-rounded b-px-4 b-py-2">
        Cancel
      </button>
      <button class="b-btn b-btn-primary b-rounded b-px-4 b-py-2">
        Save
      </button>
    </div>
  </div>
</div>
</div>`)

  const [compiledCode, setCompiledCode] = useState("")

  const resetCode = () => {
    setHtmlCode(`<div class="b-container b-mx-auto b-p-4">
<h1 class="b-text-3xl b-font-bold b-mb-4">BismillahCSS Playground</h1>

<div class="b-flex b-flex-col b-gap-4 md:b-flex-row">
  <div class="b-card b-p-6 b-rounded-lg b-border b-shadow-md b-flex-1">
    <h2 class="b-text-xl b-font-semibold b-mb-2">Card Example</h2>
    <p class="b-text-muted">
      This is a simple card component built with BismillahCSS utility classes.
    </p>
    <div class="b-mt-4">
      <button class="b-btn b-btn-primary b-rounded b-px-4 b-py-2">
        Click me
      </button>
    </div>
  </div>
  
  <div class="b-card b-p-6 b-rounded-lg b-border b-shadow-md b-flex-1">
    <h2 class="b-text-xl b-font-semibold b-mb-2">Try it yourself</h2>
    <p class="b-text-muted">
      Edit the code on the left to see changes reflected in the preview.
    </p>
    <div class="b-mt-4 b-flex b-gap-2">
      <button class="b-btn b-btn-outline b-rounded b-px-4 b-py-2">
        Cancel
      </button>
      <button class="b-btn b-btn-primary b-rounded b-px-4 b-py-2">
        Save
      </button>
    </div>
  </div>
</div>
</div>`)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode)
  }

  // For the preview, we'll render a simplified version using regular Tailwind classes
  // In a real implementation, this would be properly transpiled by a BismillahCSS compiler
  const renderedPreview = htmlCode
    .replace(/b-container/g, "container")
    .replace(/b-mx-auto/g, "mx-auto")
    .replace(/b-p-4/g, "p-4")
    .replace(/b-text-3xl/g, "text-3xl")
    .replace(/b-font-bold/g, "font-bold")
    .replace(/b-mb-4/g, "mb-4")
    .replace(/b-mb-2/g, "mb-2")
    .replace(/b-flex/g, "flex")
    .replace(/b-flex-col/g, "flex-col")
    .replace(/b-flex-1/g, "flex-1")
    .replace(/b-gap-4/g, "gap-4")
    .replace(/b-gap-2/g, "gap-2")
    .replace(/md:b-flex-row/g, "md:flex-row")
    .replace(/b-card/g, "rounded-lg border p-6")
    .replace(/b-rounded-lg/g, "rounded-lg")
    .replace(/b-border/g, "border")
    .replace(/b-shadow-md/g, "shadow-md")
    .replace(/b-text-xl/g, "text-xl")
    .replace(/b-font-semibold/g, "font-semibold")
    .replace(/b-text-muted/g, "text-muted-foreground")
    .replace(/b-mt-4/g, "mt-4")
    .replace(/b-btn b-btn-primary/g, "rounded-md bg-primary text-primary-foreground")
    .replace(/b-btn b-btn-outline/g, "rounded-md border")
    .replace(/b-rounded/g, "rounded-md")
    .replace(/b-px-4/g, "px-4")
    .replace(/b-py-2/g, "py-2")

  return (
    <PageTransition>
      <div className="container py-6 relative">
        <FuturisticBackground variant="grid" intensity="light" />
        <div className="relative z-10">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Playground</h1>
              <p className="text-muted-foreground mt-2">
                Test BismillahCSS components and utility classes in real-time
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GlowButton variant="outline" size="sm" onClick={resetCode}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Reset
                </GlowButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GlowButton variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </GlowButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <GlowButton variant="outline" size="sm">
                      Export
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </GlowButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Export as HTML
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Export as Component
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[400px] md:h-[600px] rounded-lg border bg-background/80 backdrop-blur-sm"
            >
              <div className="border-b p-4">
                <h2 className="text-sm font-medium">HTML Editor</h2>
              </div>
              <div className="p-4">
                <textarea
                  value={htmlCode}
                  onChange={(e) => setHtmlCode(e.target.value)}
                  className="h-[350px] md:h-[500px] w-full resize-none font-mono text-sm bg-transparent"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-lg border bg-background/80 backdrop-blur-sm"
            >
              <Tabs defaultValue="preview" className="h-full">
                <div className="border-b">
                  <TabsList className="ml-4 mt-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Generated Code</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="preview" className="p-4 h-[350px] md:h-[550px] overflow-auto">
                  <div dangerouslySetInnerHTML={{ __html: renderedPreview }} />
                </TabsContent>
                <TabsContent value="code" className="p-4 h-[350px] md:h-[550px] overflow-auto">
                  <pre className="text-sm font-mono">{renderedPreview}</pre>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

