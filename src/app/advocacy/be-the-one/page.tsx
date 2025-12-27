"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function BeTheOnePage() {
    const data = {
        title: "Be The One",
        description: "We are on a mission to end veteran suicide. 'Be The One' to save one veteran.",
        image: "" // Placeholder for future asset
    }

    return (
        <GenericSubPage
            title={data.title}
            description={data.description}
            image={data.image}
            parentHref="/advocacy"
            parentLabel="Advocacy"
        >
            <div className="space-y-6 text-baafa-navy/80 leading-relaxed">
                <p>
                    Every day, we lose veterans to suicide. This is a tragedy that we can and must prevent. BAAFA is committed to destigmatizing mental health issues and providing a supportive network for our brothers and sisters in arms.
                </p>
                <p>
                    <strong>How you can help:</strong> Ask veterans in your life how they are doing. Listen without judgment. Be the one who makes a difference.
                </p>
            </div>
        </GenericSubPage>
    )
}
