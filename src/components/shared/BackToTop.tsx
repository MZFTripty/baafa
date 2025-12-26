"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="h-12 w-12 rounded-full bg-baafa-gold text-baafa-navy shadow-2xl hover:bg-white hover:scale-110 transition-all border border-white/20"
                    >
                        <ChevronUp className="h-6 w-6" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
