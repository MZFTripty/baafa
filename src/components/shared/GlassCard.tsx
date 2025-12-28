"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: React.ReactNode
    className?: string
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Reduced spring config for better performance (less oscillation = less calc)
    const springConfig = { damping: 20, stiffness: 90, mass: 0.5 }
    const mouseXSpring = useSpring(x, springConfig)
    const mouseYSpring = useSpring(y, springConfig)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // Debounce or simplification: only calc if desktop? 
        // For now, optimize the React logic.
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)

        e.currentTarget.style.setProperty("--mouse-x", `${mouseX}px`)
        e.currentTarget.style.setProperty("--mouse-y", `${mouseY}px`)
    }

    const handleMouseLeave = () => {
        x.set(0) // Reset smoothly
        y.set(0)
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/[0.08] hover:border-baafa-gold/40 group overflow-hidden will-change-transform",
                "transform-gpu", // Hardware acceleration
                className
            )}
        >
            <div
                style={{
                    transform: "translateZ(50px)", // Reduced depth for less paint cost
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10"
            >
                {children}
            </div>
            {/* Optimized radial gradient (using simpler opacity transition) */}
            <div
                className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none will-change-[opacity]"
                style={{
                    background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(197, 160, 102, 0.1), transparent 80%)",
                }}
            />
        </motion.div>
    )
}
