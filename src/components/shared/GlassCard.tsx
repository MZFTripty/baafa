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

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)

        // Update CSS variables for radial gradient follow
        e.currentTarget.style.setProperty("--mouse-x", `${mouseX}px`)
        e.currentTarget.style.setProperty("--mouse-y", `${mouseY}px`)
    }

    const handleMouseLeave = () => {
        x.set(0)
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
                "relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white/[0.08] hover:border-baafa-gold/40 hover:shadow-baafa-gold/10 group overflow-hidden",
                "before:absolute before:inset-0 before:rounded-[2rem] before:bg-gradient-to-br before:from-baafa-gold/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
                className
            )}
        >
            <div
                style={{
                    transform: "translateZ(100px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10"
            >
                {children}
            </div>
            <div
                className="absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{
                    background: "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(197, 160, 102, 0.15), transparent 80%)",
                }}
            />
        </motion.div>
    )
}
