"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SubPageItem {
    id: string
    title: string
    description?: string
    href: string
    image?: string
}

interface SubPageSelectorProps {
    items: SubPageItem[]
}

export function SubPageSelector({ items }: SubPageSelectorProps) {
    if (!items || items.length === 0) return null

    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Link href={item.href} className="block h-full">
                        <GlassCard className="group relative h-full flex flex-col p-10 gap-6 border-2 border-baafa-navy/10 hover:border-baafa-red bg-white hover:bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                            {/* Decorative Elements or Image */}
                            {item.image ? (
                                <div className="absolute top-0 right-0 w-40 h-40 opacity-30 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 -translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-0 rotate-12 grayscale group-hover:grayscale-0">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain drop-shadow-2xl" />
                                </div>
                            ) : (
                                <>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-baafa-navy/5 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:bg-baafa-red/10" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-baafa-gold/10 rounded-tr-[100px] -ml-8 -mb-8 transition-all group-hover:bg-baafa-gold/20" />
                                </>
                            )}

                            <div className="relative z-10 flex-1 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="h-12 w-12 rounded-xl bg-baafa-navy flex items-center justify-center text-white shadow-lg group-hover:bg-baafa-red group-hover:scale-110 transition-all duration-300">
                                        <ChevronRight className="h-6 w-6" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-baafa-navy/40 group-hover:text-baafa-red transition-colors">Explorer</span>
                                </div>

                                <h3 className="text-3xl font-[1000] text-baafa-navy group-hover:text-baafa-red uppercase tracking-tighter transition-colors italic leading-none pr-8">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p className="text-lg text-baafa-navy/70 font-bold leading-relaxed group-hover:text-baafa-navy/90 transition-colors pr-4">
                                        {item.description}
                                    </p>
                                )}
                            </div>

                            <div className="relative z-10 mt-auto pt-6 border-t border-baafa-navy/10 group-hover:border-baafa-red/20 transition-colors">
                                <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-baafa-red group-hover:text-baafa-navy transition-colors group-hover:gap-4">
                                    Navigate <ArrowRight className="h-4 w-4" />
                                </span>
                            </div>
                        </GlassCard>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}
