"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function LeadershipPage() {
    const data = {
        title: "Leadership",
        description: "Meet the dedicated officers and board members guiding our association towards a brighter future for all veterans.",
        image: "/images/about_lead.png"
    }

    return (
        <GenericSubPage
            title={data.title}
            description={data.description}
            image={data.image}
            parentHref="/about"
            parentLabel="About"
        >
            <div className="space-y-6 text-baafa-navy/80 leading-relaxed">
                <p>
                    Strong leadership is the cornerstone of BAAFA. Our officers are veterans and active duty members who have demonstrated exceptional capability and commitment to service.
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-baafa-red">
                    <li><strong>Executive Board:</strong> Responsible for strategic direction.</li>
                    <li><strong>Operational Commanders:</strong> Oversee day-to-day activities.</li>
                    <li><strong>Committee Chairs:</strong> Lead specific initiatives like Education and Health.</li>
                </ul>
            </div>
        </GenericSubPage>
    )
}
