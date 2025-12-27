"use client"

import React from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
import { Button } from "@/components/ui/button"
import { Star, Heart, Shield, Users, CheckCircle2, ArrowRight } from "lucide-react"

const donationTiers = [
    {
        name: "Supporter",
        amount: 25,
        icon: Heart,
        benefits: [
            "Official BAAFA supporter recognition",
            "Quarterly newsletter updates",
            "Digital membership certificate"
        ]
    },
    {
        name: "Advocate",
        amount: 100,
        icon: Shield,
        benefits: [
            "All Supporter benefits",
            "Exclusive BAAFA merchandise",
            "Invitation to annual virtual town hall",
            "Name listed on donor wall"
        ],
        featured: true
    },
    {
        name: "Champion",
        amount: 250,
        icon: Star,
        benefits: [
            "All Advocate benefits",
            "VIP access to national meetings",
            "Direct consultation with leadership",
            "Premium BAAFA commemorative item"
        ]
    },
    {
        name: "Patron",
        amount: 500,
        icon: Users,
        benefits: [
            "All Champion benefits",
            "Lifetime recognition plaque",
            "Annual private briefing session",
            "Legacy donor status"
        ]
    }
]

export function DonatePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-baafa-navy/5 via-baafa-red/5 to-baafa-gold/5" />
                <div className="absolute inset-0 -z-10 bg-flag-usa opacity-[0.02] scale-150" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-8 max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-3 text-baafa-red">
                            <Heart className="h-8 w-8 fill-baafa-red" />
                            <span className="text-sm font-black uppercase tracking-[0.5em]">Support Our Mission</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-[1000] text-baafa-navy uppercase italic tracking-tighter leading-[0.85]">
                            Invest in Our Heroes
                        </h1>

                        <p className="text-2xl text-baafa-navy/70 font-bold leading-relaxed max-w-3xl mx-auto">
                            Your contribution directly supports Bangladeshi American service members, veterans, and their families through advocacy, education, and community programs.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center pt-4">
                            <div className="flex items-center gap-3 px-6 py-3 bg-baafa-navy/5 rounded-full border border-baafa-navy/10">
                                <CheckCircle2 className="h-5 w-5 text-baafa-green" />
                                <span className="font-bold text-baafa-navy">Tax Deductible</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-3 bg-baafa-navy/5 rounded-full border border-baafa-navy/10">
                                <Shield className="h-5 w-5 text-baafa-navy" />
                                <span className="font-bold text-baafa-navy">Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-3 bg-baafa-navy/5 rounded-full border border-baafa-navy/10">
                                <Heart className="h-5 w-5 text-baafa-red" />
                                <span className="font-bold text-baafa-navy">100% Impact</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Donation Tiers */}
            <section className="py-24 bg-gradient-to-b from-white to-baafa-navy/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-baafa-navy uppercase tracking-tight mb-4">
                            Choose Your Impact Level
                        </h2>
                        <p className="text-xl text-baafa-navy/60 font-medium">
                            Every contribution makes a difference in the lives of our service members
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {donationTiers.map((tier, index) => {
                            const Icon = tier.icon
                            return (
                                <motion.div
                                    key={tier.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <GlassCard className={`relative h-full flex flex-col p-8 ${tier.featured
                                            ? 'border-4 border-baafa-red bg-white shadow-2xl scale-105'
                                            : 'border-2 border-baafa-navy/10 bg-white shadow-xl'
                                        }`}>
                                        {tier.featured && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-baafa-red text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                                                Most Popular
                                            </div>
                                        )}

                                        <div className="flex flex-col items-center text-center space-y-6">
                                            <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${tier.featured ? 'bg-baafa-red' : 'bg-baafa-navy'
                                                }`}>
                                                <Icon className="h-8 w-8 text-white" />
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-black text-baafa-navy uppercase tracking-tight mb-2">
                                                    {tier.name}
                                                </h3>
                                                <div className="flex items-baseline justify-center gap-1">
                                                    <span className="text-5xl font-[1000] text-baafa-navy">
                                                        ${tier.amount}
                                                    </span>
                                                    <span className="text-baafa-navy/50 font-bold">/month</span>
                                                </div>
                                            </div>

                                            <div className="w-full h-px bg-baafa-navy/10" />

                                            <ul className="space-y-3 flex-1 w-full text-left">
                                                {tier.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle2 className="h-5 w-5 text-baafa-green shrink-0 mt-0.5" />
                                                        <span className="text-sm text-baafa-navy/70 font-medium leading-tight">
                                                            {benefit}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Button
                                                className={`w-full font-black uppercase tracking-wider ${tier.featured
                                                        ? 'bg-baafa-red hover:bg-baafa-red/90 text-white'
                                                        : 'bg-baafa-navy hover:bg-baafa-navy/90 text-white'
                                                    }`}
                                            >
                                                Donate ${tier.amount}
                                            </Button>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-baafa-navy/60 font-medium mb-4">
                            Prefer a one-time donation or custom amount?
                        </p>
                        <Button variant="outline" className="border-2 border-baafa-navy text-baafa-navy hover:bg-baafa-navy hover:text-white font-black uppercase tracking-wider">
                            Custom Donation Amount
                        </Button>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-baafa-navy text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-4">
                            Your Impact in Action
                        </h2>
                        <p className="text-xl text-white/70 font-medium max-w-3xl mx-auto">
                            See how your contributions directly support our community
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                stat: "500+",
                                label: "Veterans Supported",
                                description: "Direct assistance with VA claims and benefits"
                            },
                            {
                                stat: "$250K",
                                label: "Scholarships Awarded",
                                description: "Educational support for military families"
                            },
                            {
                                stat: "50+",
                                label: "Community Events",
                                description: "Annual programs strengthening our network"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4"
                            >
                                <div className="text-6xl font-[1000] text-baafa-gold">
                                    {item.stat}
                                </div>
                                <div className="text-2xl font-black uppercase tracking-tight">
                                    {item.label}
                                </div>
                                <p className="text-white/60 font-medium">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-baafa-red to-baafa-red/80 text-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
                    <h2 className="text-5xl font-[1000] uppercase tracking-tighter leading-tight">
                        Join Us in Building a Stronger Community
                    </h2>
                    <p className="text-2xl font-medium text-white/90 leading-relaxed">
                        Every donation, no matter the size, helps us continue our mission of supporting Bangladeshi American service members and their families.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-baafa-red hover:bg-white/90 font-black uppercase tracking-wider text-lg px-12 py-6 h-auto shadow-2xl"
                    >
                        Make Your Donation Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    )
}







