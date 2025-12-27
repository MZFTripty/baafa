"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export function AboutBangladeshiLegionFamilyPage() {
    const data = {
        title: "Legion Family", // Adjusted title for cleaner display
        description: "Supporting the broader community of families and veterans across the nation. We are more than an organization; we are a family.",
        image: "/images/about_family.png"
    }

    return (
        <GenericSubPage
            title={data.title}
            description={data.description}
            image={data.image}
            parentHref="/about"
            parentLabel="About"
        />
    )
}








