"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function CalendarPage() {
    return (
        <GenericSubPage
            title="Calendar"
            description="Upcoming events, drills, conventions, and community ceremonies."
            parentHref="/info-center"
            parentLabel="Info Center"
        />
    )
}
