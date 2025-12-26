"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
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
}

export function CategoryPage({ title, summary, sections, accentColor = "baafa-gold" }: CategoryPageProps) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section - Patriotic Light Design */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                {/* Subtle Flag BG */}
                <div className="absolute inset-0 -z-10 bg-flag-bd opacity-[0.03] scale-150 rotate-[-10deg]" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-10"
                    >
                        <div className="flex items-center gap-4 text-baafa-red">
                            <Star className="h-6 w-6 fill-baafa-red" />
                            <span className="text-sm font-black uppercase tracking-[0.5em]">Official Department</span>
                        </div>

                        <h1 className="text-8xl font-[1000] tracking-tighter text-baafa-navy uppercase italic lg:text-[10rem] leading-[0.8]">
                            {title}
                        </h1>

                        <div className="max-w-4xl relative">
                            <div className="absolute -left-8 top-0 bottom-0 w-2 bg-baafa-red" />
                            <p className="text-3xl text-baafa-navy/70 font-bold leading-tight pl-8 uppercase tracking-tight">
                                {summary}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sections Area - Clean White Grid */}
            <section className="relative py-32 flex-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="h-full group p-14 border-baafa-navy/5 hover:border-baafa-red hover:bg-baafa-red/[0.02] transition-all cursor-pointer relative overflow-hidden bg-white shadow-2xl">
                                    <div className="absolute top-0 right-0 p-10 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-all group-hover:translate-x-0 group-hover:translate-y-0">
                                        <Star className="h-32 w-32 text-baafa-navy" />
                                    </div>

                                    <div className="space-y-10">
                                        <div className="inline-block px-6 py-2 bg-baafa-navy text-white text-[12px] font-black uppercase tracking-[0.4em] rounded-xl shadow-lg group-hover:bg-baafa-red transition-colors">
                                            SEC-RANK {i + 1}
                                        </div>
                                        <h3 className="text-5xl font-black text-baafa-navy uppercase tracking-tighter leading-none group-hover:text-baafa-red transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-xl text-baafa-navy/60 leading-relaxed font-bold">
                                            Access official strategic insights and professional standards relative to the {section.title.toLowerCase()} division.
                                        </p>
                                        <Button variant="link" className="p-0 text-baafa-red font-black text-sm uppercase tracking-[0.4em] hover:text-baafa-navy group-hover:translate-x-4 transition-all" asChild>
                                            <Link href={section.href} className="flex items-center gap-4">
                                                INITIALIZE PORTAL <ArrowRight className="h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
