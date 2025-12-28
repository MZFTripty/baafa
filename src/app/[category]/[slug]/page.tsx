"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Shield, Info, ExternalLink } from "lucide-react"

import { siteData } from "@/data/siteData"

export default function SubPage({ params }: { params: { category: string, slug: string } }) {
    // We can directly access data based on params. 
    // In a real server component we would await params, but this seems to be a client component ("use client").
    // Actually, in Next.js 15+, params is a Promise even in client components if used in specific ways, 
    // but here we can just use React.use() or unwrapping. 
    // The previous code used useEffect to unwrap params. Let's keep that pattern for safety if on latest Next.js,
    // OR considering we want "optimistic/instant", we might assume params are available or use the unwrap.

    // However, to make it truly instant/optimistic, we want to avoid "Loading..." spinner.
    // Let's use the unwrapped params if already available, or just render. 
    // But since `resolvedParams` was a state, it caused a re-render.

    // Simplification: We will try to read params directly if possible, or use the hook.
    // If we must unwrap, we can't be 100% synchronous first render unless we use `use(params)`.
    // Let's assume standard behavior for now but speed up the data fetch part.

    const [resolvedParams, setResolvedParams] = React.useState<any>(null)

    React.useEffect(() => {
        Promise.resolve(params).then(p => setResolvedParams(p))
    }, [params])

    if (!resolvedParams) return null // Minimal flash, or better: performant shell

    const catId = resolvedParams.category as keyof typeof siteData
    const cat = siteData[catId] as any
    const section = cat?.sections?.find((s: any) => s.id === resolvedParams.slug)

    const data = { category: catId, section }

    if (!data.section) return (
        <div className="flex h-screen items-center justify-center text-white">Section not found</div>
    )

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-baafa-navy to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 space-y-16">
                <Link href={`/${data.category}`} className="group inline-flex items-center gap-3 text-white/40 hover:text-baafa-gold transition-colors font-black text-xs uppercase tracking-[0.3em]">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" /> Back to Dashboard
                </Link>

                <div className="flex flex-col gap-12 lg:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-baafa-green/10 border border-baafa-green/30 text-baafa-green text-xs font-bold uppercase tracking-widest">
                            <Shield className="h-4 w-4" /> Secure Archive
                        </div>
                        <h1 className="text-6xl font-[950] text-white uppercase tracking-tighter lg:text-8xl leading-none">
                            {data.section.title}
                        </h1>
                        <p className="text-2xl text-white/50 font-light leading-relaxed max-w-2xl italic">
                            Strategic overview and deep documentation regarding {data.section.title.toLowerCase()} for the Bangladeshi American Armed Forces community.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        className="w-full lg:w-[400px] aspect-square relative"
                    >
                        <div className="absolute inset-0 bg-baafa-gold blur-3xl opacity-10" />
                        <div className="relative h-full w-full rounded-[3rem] border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-3xl">
                            <Info className="h-32 w-32 text-baafa-gold/20" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-10">
                        <GlassCard className="p-12 space-y-8 border-white/5">
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Core Objectives</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                {[
                                    "Standardized implementation of professional military ethics.",
                                    "Direct communication channels with association leaders.",
                                    "Comprehensive archival of historical contributions.",
                                    "Future-readiness through advanced training modules."
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4 items-start group">
                                        <CheckCircle2 className="h-6 w-6 text-baafa-green shrink-0 group-hover:scale-125 transition-transform" />
                                        <p className="text-white/60 font-light leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <div className="grid gap-6 md:grid-cols-2">
                            <GlassCard className="border-baafa-navy/50 bg-baafa-navy/20">
                                <h4 className="text-baafa-gold font-black uppercase text-sm mb-4">Latest Report</h4>
                                <p className="text-white/40 text-sm mb-6 uppercase tracking-widest">Q4 2025 Performance Review</p>
                                <Button variant="outline" className="w-full border-white/10 text-white">Download PDF</Button>
                            </GlassCard>
                            <GlassCard className="border-baafa-navy/50 bg-baafa-navy/20">
                                <h4 className="text-baafa-gold font-black uppercase text-sm mb-4">Related Docs</h4>
                                <p className="text-white/40 text-sm mb-6 uppercase tracking-widest">Standard Operating Procedures</p>
                                <Button variant="outline" className="w-full border-white/10 text-white">View Online</Button>
                            </GlassCard>
                        </div>
                    </div>

                    <div className="space-y-10">
                        <GlassCard className="bg-baafa-red/5 border-baafa-red/20 space-y-6">
                            <h3 className="text-baafa-red font-black uppercase tracking-widest text-lg">Action Required</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Members are required to acknowledge the updated guidelines for {data.section.title.toLowerCase()} by the end of the fiscal year.
                            </p>
                            <Button className="w-full bg-baafa-red hover:bg-baafa-red/90 text-white flex items-center gap-2">
                                Submit Acknowledgment <ExternalLink className="h-4 w-4" />
                            </Button>
                        </GlassCard>

                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 group">
                            <Image src="/logo.jpg" alt="Context" fill className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-baafa-navy via-transparent to-transparent flex flex-col justify-end p-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-baafa-gold mb-2">Heritage Flash</span>
                                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">Unified Strength</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
