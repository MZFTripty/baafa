"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
    { name: "About", href: "/about" },
    { name: "Advocacy", href: "/advocacy" },
    { name: "Membership & services", href: "/membership" },
    { name: "Get involved", href: "/get-involved" },
    { name: "Information center", href: "/info-center" },
]

const topActions = [
    { name: "Join", href: "/membership/join-the-bangladeshi-legion", variant: "default" as const },
    { name: "Renew", href: "/membership/renew-membership", variant: "outline" as const },
    { name: "Donate", href: "/donate", variant: "glass" as const },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.overscrollBehavior = "none"
        } else {
            document.body.style.overflow = "unset"
            document.body.style.overscrollBehavior = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
            document.body.style.overscrollBehavior = "unset"
        }
    }, [isOpen])

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/"
        return pathname.startsWith(path)
    }

    return (
        <nav className="fixed top-0 z-50 w-full shadow-2xl">
            {/* Top Level Nav - Signature Red */}
            <div className="bg-[#B22234] border-b border-white/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-xl transition-transform group-hover:scale-105">
                                <Image
                                    src="/logo.jpg"
                                    alt="BAAFA Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col -space-y-1">
                                <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                                    BAAFA
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                                    Official
                                </span>
                            </div>
                        </Link>

                        <div className="hidden items-center gap-4 md:flex">
                            {topActions.map((action) => (
                                <Button
                                    key={action.name}
                                    variant={action.variant}
                                    size="sm"
                                    className={cn(
                                        "text-xs font-black uppercase tracking-widest px-6 h-9 rounded-full transition-all hover:scale-105",
                                        action.name === "Join" && "bg-white text-[#B22234] hover:bg-white/90 shadow-lg",
                                        action.name === "Renew" && "bg-baafa-gold text-white border-2 border-baafa-gold hover:bg-baafa-gold/90",
                                        action.name === "Donate" && "bg-baafa-navy text-white border-2 border-baafa-navy hover:bg-baafa-navy/90"
                                    )}
                                    asChild
                                >
                                    <Link href={action.href}>{action.name}</Link>
                                </Button>
                            ))}
                        </div>

                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-white/80 transition-colors"
                            >
                                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Categories Nav - Light Overlay */}
            <div className="hidden bg-white/95 backdrop-blur-md border-b border-baafa-navy/10 md:block">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-12 items-center justify-center gap-10">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative py-1 text-xs font-black uppercase tracking-[0.2em] transition-all hover:text-baafa-red",
                                    isActive(item.href)
                                        ? "text-baafa-red"
                                        : "text-baafa-navy/60"
                                )}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute -bottom-[2px] left-0 h-[3px] w-full bg-baafa-red rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] md:hidden bg-[#B22234] flex flex-col overflow-hidden"
                        style={{ height: "100dvh" }}
                    >
                        {/* Header - Fixed */}
                        <div className="flex items-center justify-between px-6 py-6 shrink-0 border-b border-white/10">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <div className="h-8 w-8 relative overflow-hidden rounded-full border border-white/40">
                                    <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                                </div>
                                <span className="text-lg font-black tracking-tighter text-white uppercase italic">BAAFA</span>
                            </Link>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Scroll Container - Full Width Scrollbar */}
                        <div className="flex-1 overflow-y-scroll overscroll-contain sidebar-scrollbar touch-pan-y pt-6 pb-24">
                            <div className="px-8 space-y-12">
                                {/* Top Buttons */}
                                <div className="flex flex-col gap-4">
                                    {topActions.map((action) => (
                                        <Button key={action.name} variant={action.variant} className={cn(
                                            "w-full h-14 text-sm font-black uppercase tracking-widest rounded-xl transition-transform active:scale-95 shadow-xl",
                                            action.name === "Join" ? "bg-white text-[#B22234] hover:bg-white/90" : "bg-white/10 text-white border-white border hover:bg-white/20"
                                        )} asChild>
                                            <Link href={action.href} onClick={() => setIsOpen(false)}>{action.name}</Link>
                                        </Button>
                                    ))}
                                </div>

                                {/* Main Links */}
                                <div className="flex flex-col items-center">
                                    <div className="w-full h-px bg-white/20 mb-8" />
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "w-full text-center py-5 text-xl font-black uppercase tracking-[0.4em] transition-all rounded-xl",
                                                isActive(item.href)
                                                    ? "text-baafa-gold bg-white/5"
                                                    : "text-white hover:text-baafa-gold hover:bg-white/10"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
