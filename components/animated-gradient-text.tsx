"use client"

import React from 'react'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedGradientText({ children, className, delay = 0 }: AnimatedGradientTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "bg-gradient-to-r from-primary via-blue-500 to-purple-600 dark:from-primary dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </motion.span>
  )
}

