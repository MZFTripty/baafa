"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  Flag,
  Users,
  GraduationCap,
  Heart,
  Calendar,
  Newspaper,
  Activity,
  Star,
  Target,
  Trophy,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/shared/GlassCard"

export default function Home() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  if (!data) return <div className="flex h-screen items-center justify-center text-baafa-red bg-white font-black italic tracking-widest uppercase">Initializing BAAFA Experience...</div>

  return (
    <div className="flex flex-col">
      {/* 1.2 Hero Banner - Patriotic Design Refined */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-12">
        {/* Artistic Flag Background - Prominent & Patriotic */}
        <div className="absolute inset-0 -z-10 group">
          <div className="absolute inset-0 bg-flag-bd opacity-40 blur-sm scale-105 rotate-[-2deg] transition-transform duration-[10s] group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
        </div>

        {/* Floating Patriotic Blobs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-baafa-red/20 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-baafa-green/20 rounded-full blur-[70px]"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-baafa-red/30 bg-white/90 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-baafa-red shadow-lg"
            >
              <Star className="h-3 w-3 fill-baafa-red" /> Official Department
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-5xl font-[1000] tracking-tighter text-baafa-navy lg:text-7xl leading-[0.9] uppercase italic"
            >
              <span className="text-baafa-red">B</span>AAFA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="max-w-2xl text-xl lg:text-2xl font-black text-baafa-navy leading-tight uppercase tracking-tight italic"
            >
              Uniting Heritage with Patriotic Duty
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="h-14 bg-[#B22234] !bg-[#B22234] text-white hover:bg-[#B22234]/90 rounded-xl px-10 text-lg font-black tracking-widest transition-all hover:scale-105 shadow-xl mt-2 uppercase italic border-2 border-white/20"
              >
                JOIN THE LEGION
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-2 border-baafa-gold text-baafa-navy bg-white/80 backdrop-blur-md hover:bg-baafa-gold/10 rounded-xl px-10 text-lg font-black tracking-widest transition-all hover:scale-105 shadow-md mt-2 uppercase italic"
              >
                OUR MISSION
              </Button>
            </motion.div>

            {/* Hero Image Area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative w-full max-w-4xl mx-auto pt-12"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-baafa-red/30 via-baafa-gold/20 to-baafa-green/30 blur-3xl opacity-50" />
                <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl">
                  <Image
                    src="/baafa_army_hero_v3.png"
                    alt="BAAFA Official Banner"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.3 Our Impact - Highly Visible Cards */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4 text-left">
                <h2 className="text-5xl font-black text-baafa-navy uppercase tracking-tighter italic leading-none">
                  Our <span className="text-baafa-red underline decoration-baafa-gold/50 underline-offset-4">Impact</span>
                </h2>
                <p className="text-xl font-black text-baafa-navy/80 uppercase tracking-widest italic">Commitment to Excellence</p>
              </div>

              <div className="grid gap-6">
                {data.impact.organizationParts.map((part: any, i: number) => (
                  <GlassCard key={i} className="group p-8 border border-baafa-navy/10 bg-white/95 shadow-lg hover:border-baafa-red transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-baafa-navy text-baafa-gold shadow-md group-hover:bg-baafa-red group-hover:text-white transition-all duration-300">
                        <Target className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-black text-baafa-navy uppercase tracking-tighter group-hover:text-baafa-red transition-colors italic">{part.title}</h4>
                        <p className="text-base text-baafa-navy/90 font-bold leading-relaxed">{part.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] border-8 border-white shadow-xl">
                <Image
                  src="/founder.jpg"
                  alt={data.impact.founder.name}
                  fill
                  className="object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-baafa-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-0 right-0 px-10 text-center">
                  <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">{data.impact.founder.name}</h3>
                  <p className="text-baafa-gold text-sm font-black tracking-[0.4em] uppercase mt-1">{data.impact.founder.title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.4 Empowering America - High Contrast Cards */}
      <section className="relative py-24 bg-gradient-to-b from-blue-500 to-red-100 overflow-hidden shadow-[inset_0_0_120px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-flag-usa opacity-20 mix-blend-overlay scale-125 rotate-6" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-20 relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-[1000] text-white uppercase tracking-tighter italic">
              Empowering <span className="text-baafa-navy underline decoration-white decoration-8 underline-offset-12">America</span>
            </h2>
            <p className="mx-auto max-w-3xl text-2xl text-white font-black leading-relaxed uppercase tracking-tight italic bg-black/10 backdrop-blur-sm p-4 rounded-2xl">
              {data.empowerment.description}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {data.empowerment.resources.map((resource: any, i: number) => (
              <GlassCard key={resource.id} className="h-full flex flex-col items-center text-center p-12 gap-10 group border-2 border-white/30 hover:border-baafa-gold bg-white/95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-4">
                <div className="h-16 w-16 rounded-2xl bg-baafa-navy flex items-center justify-center text-baafa-gold shadow-2xl group-hover:bg-baafa-red group-hover:text-white transition-all duration-300 scale-110">
                  {resource.id === 'member' && <Users className="h-10 w-10" />}
                  {resource.id === 'education' && <GraduationCap className="h-10 w-10" />}
                  {resource.id === 'health' && <Heart className="h-10 w-10" />}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-[1000] text-baafa-navy group-hover:text-baafa-red uppercase tracking-tighter transition-colors italic">{resource.title}</h3>
                  <p className="text-lg text-baafa-navy/80 font-bold leading-relaxed transition-colors">{resource.description}</p>
                </div>
                <Button className="mt-auto bg-gradient-to-r from-baafa-navy to-baafa-red text-white hover:bg-baafa-red font-black tracking-[0.2em] rounded-xl h-14 w-full text-base shadow-xl uppercase italic transition-all duration-300">
                  SECURE ACCESS
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 1.5 Information Center */}
      <section className="relative py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center gap-24">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-black text-baafa-navy uppercase tracking-tighter italic">Info <span className="text-baafa-red">Center</span></h2>
              <div className="h-1.5 w-32 bg-baafa-gold mx-auto rounded-full shadow-md" />
            </div>

            <div className="grid w-full gap-8 md:grid-cols-3">
              {[
                { id: 'media', icon: Calendar, title: 'Media', desc: 'Capturing our proudest moments and appearances.', href: '/info-center/media' },
                { id: 'publications', icon: Newspaper, title: 'Publications', desc: 'Strategic insights and official journals.', href: '/info-center/publications' },
                { id: 'training', icon: Activity, title: 'Training', desc: 'Developing excellence through training.', href: '/info-center/training' }
              ].map((item, i) => (
                <GlassCard key={item.id} className="flex flex-col gap-6 p-10 border border-baafa-navy/5 hover:border-baafa-red shadow-lg group bg-white transition-all duration-300 hover:-translate-y-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-baafa-navy text-baafa-gold group-hover:bg-baafa-red group-hover:text-white transition-all duration-300 shadow-md">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-baafa-navy uppercase tracking-tighter group-hover:text-baafa-red transition-colors italic">{item.title}</h3>
                    <p className="text-lg text-baafa-navy/80 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                  <Link href={item.href} className="mt-4 inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.4em] text-baafa-red hover:translate-x-4 transition-all duration-300 group-hover:text-baafa-navy italic">
                    PROCEED <ArrowRight className="h-4 w-4" />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
