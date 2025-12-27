"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function ReportsPage() {
    const data = {
        title: "Reports",
        description: "Transparency and accountability through our annual and financial reports. We believe in open access to our operational metrics.",
        image: "/images/about_reports.png"
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
