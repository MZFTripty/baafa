"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export function AboutMediaToolkitPage() {
    const data = {
        title: "Media Toolkit",
        description: "OFFICIAL assets, brand guidelines, and press materials for BAAFA representatives and media partners.",
        image: "/images/about_media.png"
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








