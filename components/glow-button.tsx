"use client"
import React from 'react'
import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlowButtonProps extends ButtonProps {
  glowColor?: string
  glowIntensity?: "light" | "medium" | "strong"
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, glowColor, glowIntensity = "medium", children, ...props }, ref) => {
    // Intensity classes
    const intensityClasses = {
      light: "before:opacity-30 hover:before:opacity-40",
      medium: "before:opacity-40 hover:before:opacity-60",
      strong: "before:opacity-50 hover:before:opacity-70",
    }

    // Default glow color based on variant
    const defaultGlowColor =
      props.variant === "default" ? "from-primary/50 to-primary/10" : "from-foreground/20 to-foreground/5"
    const glowColorClass = glowColor || defaultGlowColor

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
        <Button
          ref={ref}
          className={cn(
            "relative z-10 overflow-hidden transition-all",
            "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-r",
            "before:blur-xl before:transition-all hover:before:blur-2xl",
            intensityClasses[glowIntensity],
            `before:${glowColorClass}`,
            className,
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  },
)

GlowButton.displayName = "GlowButton"

