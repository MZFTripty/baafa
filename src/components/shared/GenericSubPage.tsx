"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Star } from "lucide-react"

interface GenericSubPageProps {
    title: string
    description: string
    image?: string
    parentHref: string
    parentLabel: string
    children?: React.ReactNode
}

export function GenericSubPage({ title, description, image, parentHref, parentLabel, children }: GenericSubPageProps) {
    return (
        <div className="min-h-screen bg-white pt-4 sm:pt-8 lg:pt-28 pb-16">
            {/* Navigation Breadcrumb */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-baafa-red text-baafa-navy/50 transition-colors">
                    <Link href={parentHref} className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                        <ArrowLeft className="h-4 w-4" /> Back to {parentLabel}
                    </Link>
                </Button>
            </div>

            {/* Header */}
            <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 text-baafa-red">
                            <Star className="h-5 w-5 fill-baafa-red" />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Sub-Department</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[1000] text-baafa-navy uppercase italic tracking-tighter leading-[0.9]">
                            {title}
                        </h1>

                        <div className="h-1 w-20 bg-baafa-gold rounded-full" />

                        <p className="text-lg sm:text-xl text-baafa-navy/70 font-medium leading-relaxed">
                            {description}
                        </p>
                    </motion.div>

                    {image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-baafa-navy/5"
                        >
                            <img src={image} alt={title} className="w-full h-full object-contain bg-baafa-navy/5 p-8" />
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Content Area */}
            <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {children}
                {/* Placeholder for content if none provided */}
                {!children && (
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="lead text-2xl text-baafa-navy/80 font-serif italic">
                            "Content acts as the voice of our {title.toLowerCase()} mission, providing depth and clarity to our objectives."
                        </p>
                        <br />
                        <p>
                            Detailed information regarding the <strong>{title}</strong> sector will be populated here. This section is designed to host comprehensive reports, leadership bios, organizational charts, or media assets depending on the specific context of the sub-page.
                        </p>
                        <div className="not-prose mt-12 p-8 bg-baafa-navy/5 rounded-2xl border border-baafa-navy/10">
                            <h3 className="text-baafa-navy font-black uppercase tracking-wider mb-4 flex items-center gap-3">
                                <Star className="h-4 w-4" /> System Status
                            </h3>
                            <p className="text-baafa-navy/60 font-mono text-sm">
                                Module initialized. Content injection ready. Waiting for CMS integration or static update.
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}
