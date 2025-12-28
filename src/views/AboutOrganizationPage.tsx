"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export function AboutOrganizationPage() {
    // Single Responsibility: Fetch/Define data specific to Organization
    const data = {
        title: "Organization",
        description: "Learn about our structure, mission, and the history of BAAFA. We are structured to provide maximum support to our members while maintaining strict adherence to military values.",
        image: "/images/about_org.png"
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
                    The Bangladeshi American Armed Forces Association (BAAFA) is organized into distinct chapters and operational divisions, each tasked with specific objectives to further our collective mission.
                </p>
                <p>
                    Our organizational structure is designed to be agile, responsive, and transparent, ensuring that every member's voice is heard and every initiative is executed with precision.
                </p>
            </div>
        </GenericSubPage>
    )
}








