"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function NationalMeetingsPage() {
    return (
        <GenericSubPage
            title="National Meetings"
            description="Annual conventions and strategic planning sessions for the entire organization."
            parentHref="/get-involved"
            parentLabel="Get Involved"
        />
    )
}
