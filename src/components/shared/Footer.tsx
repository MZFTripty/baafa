"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Send,
    ExternalLink,
    ShieldCheck,
    Star
} from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
    navigation: [
        { label: "About BAAFA", href: "/about" },
        { label: "Our Advocacy", href: "/advocacy" },
        { label: "Membership", href: "/membership" },
        { label: "Get Involved", href: "/get-involved" },
        { label: "Events & Events", href: "/info-center/media" },
    ],
    resources: [
        { label: "Media Center", href: "/info-center/media" },
        { label: "Publications", href: "/info-center/publications" },
        { label: "Training Modules", href: "/info-center/training" },
        { label: "Portal Login", href: "/portal" },
        { label: "Contact Us", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
    ]
}

export function Footer() {
    return (
        <footer className="relative mt-20 overflow-hidden bg-[#0A0D14] text-white">
            {/* Patriotic Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-baafa-red via-baafa-gold to-baafa-green" />

            {/* Decorative Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-baafa-red/10 blur-[100px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

                    {/* Column 1: Brand & Mission */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-4 group">
                            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border-2 border-baafa-gold/30 shadow-2xl transition-transform group-hover:scale-110">
                                <Image
                                    src="/logo.jpg"
                                    alt="BAAFA Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-[1000] tracking-tighter text-white italic">BAAFA</span>
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-baafa-gold">Established 2025</span>
                            </div>
                        </div>

                        <p className="max-w-xs text-lg font-bold leading-relaxed text-white/60 italic uppercase tracking-tight">
                            Uniting Heritage with Patriotic Duty. Dedicated to strengthening the bridge between Bangladeshi identity and American service.
                        </p>

                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-baafa-gold hover:border-baafa-gold/50 hover:bg-baafa-gold/5 transition-all"
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white">Association</h4>
                        <ul className="space-y-4">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-base font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-1 w-0 bg-baafa-red transition-all group-hover:w-3" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] text-white">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-base font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-1 w-0 bg-baafa-green transition-all group-hover:w-3" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-lg font-black uppercase tracking-tight text-white italic">Patriotic Updates</h4>
                                <p className="text-sm font-bold text-white/40">Stay informed on our latest missions and events.</p>
                            </div>

                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                    <input
                                        type="email"
                                        placeholder="Duty calls..."
                                        className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-baafa-gold transition-colors"
                                    />
                                </div>
                                <Button className="h-12 w-12 bg-baafa-red hover:bg-baafa-red/90 rounded-xl p-0">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/30 italic">
                                <ShieldCheck className="h-3 w-3" />
                                Encrypted & Secure Participation
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex flex-wrap justify-center gap-8">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/20 italic">
                        <span>&copy; {new Date().getFullYear()} BAAFA Organization</span>
                        <span className="mx-2 text-baafa-red">|</span>
                        <span>Made with Honor</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
