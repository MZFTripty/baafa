"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
import { SubPageSelector } from "@/components/shared/SubPageSelector"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

interface Section {
    id: string
    title: string
    description?: string
    href: string
}

interface CategoryPageProps {
    title: string
    summary: string
    sections: Section[]
    accentColor?: string
    heroImage?: string
}

export function CategoryPage({ title, summary, sections, accentColor = "baafa-gold", heroImage }: CategoryPageProps) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section - Patriotic Light Design */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Subtle Flag BG */}
                <div className="absolute inset-0 -z-10 bg-flag-bd opacity-[0.03] scale-150 rotate-[-10deg]" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-4 text-baafa-red">
                                <Star className="h-6 w-6 fill-baafa-red" />
                                <span className="text-sm font-black uppercase tracking-[0.5em]">Official Department</span>
                            </div>

                            <h1 className="text-5xl font-[1000] tracking-tighter text-baafa-navy uppercase italic lg:text-7xl leading-[0.8]">
                                {title}
                            </h1>

                            <div className="max-w-2xl relative">
                                <div className="absolute -left-8 top-0 bottom-0 w-2 bg-baafa-red" />
                                <p className="text-xl text-baafa-navy/70 font-bold leading-tight pl-8 uppercase tracking-tight">
                                    {summary}
                                </p>
                            </div>
                        </motion.div>

                        {/* Optional Hero Image */}
                        {heroImage && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="relative mt-12 lg:mt-0"
                            >
                                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-baafa-navy/20 mix-blend-multiply z-10" />
                                    <img
                                        src={heroImage}
                                        alt={title}
                                        className="h-full w-full object-cover scale-110"
                                    />
                                    {/* Glass Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-baafa-navy/90 to-transparent z-20">
                                        <div className="flex items-center gap-4">
                                            <div className="h-2 w-12 bg-baafa-red rounded-full" />
                                            <span className="text-white font-black tracking-widest uppercase text-sm">Est. 2025</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative Blobs */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-baafa-gold/30 rounded-full blur-3xl -z-10" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-baafa-red/20 rounded-full blur-3xl -z-10" />
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Sections Area - Clean White Grid */}
            <section className="relative py-32 flex-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <SubPageSelector items={sections} />
                </div>
            </section>
        </div>
    )
}
