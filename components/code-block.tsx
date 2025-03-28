import React from 'react'
import SyntaxHighlighter from "react-syntax-highlighter"
import dracula from "react-syntax-highlighter/dist/esm/styles/hljs/dracula"

interface CodeBlockProps {
  language: string
  children: string
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <SyntaxHighlighter language={language} style={dracula} className="rounded-md">
      {children}
    </SyntaxHighlighter>
  )
}

