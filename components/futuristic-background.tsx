"use client"
import React from 'react'
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FuturisticBackgroundProps {
  className?: string
  variant?: "grid" | "dots" | "waves"
  intensity?: "light" | "medium" | "strong"
  animated?: boolean
}

export function FuturisticBackground({
  className,
  variant = "grid",
  intensity = "medium",
  animated = true,
}: FuturisticBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  // Intensity classes
  const intensityClasses = {
    light: "opacity-[0.03] dark:opacity-[0.07]",
    medium: "opacity-[0.05] dark:opacity-[0.15]",
    strong: "opacity-[0.08] dark:opacity-[0.2]",
  }

  // Variant specific rendering
  const renderVariant = () => {
    switch (variant) {
      case "grid":
        return (
          <div
            className={cn(
              "absolute inset-0 z-0 bg-grid-pattern bg-[length:50px_50px] pointer-events-none",
              intensityClasses[intensity],
              className,
            )}
          />
        )
      case "dots":
        return (
          <div
            className={cn(
              "absolute inset-0 z-0 bg-dots-pattern bg-[length:20px_20px] pointer-events-none",
              intensityClasses[intensity],
              className,
            )}
          />
        )
      case "waves":
        return (
          <motion.div
            className={cn(
              "absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none",
              className,
            )}
            initial={animated ? { backgroundPosition: "0% 0%" } : false}
            animate={
              animated
                ? {
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }
                : false
            }
            transition={
              animated
                ? {
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }
                : undefined
            }
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      {renderVariant()}
      {/* Add a subtle gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none",
          className,
        )}
      />
    </>
  )
}

