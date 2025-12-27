"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function NationalAffairsPage() {
    return (
        <GenericSubPage
            title="National Affairs"
            description="Engagement with national security, foreign relations, and civil defense."
            parentHref="/advocacy"
            parentLabel="Advocacy"
        />
    )
}
