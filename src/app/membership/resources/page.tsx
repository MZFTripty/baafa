"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function ResourcesPage() {
    return (
        <GenericSubPage
            title="Resources"
            description="Tools, handbooks, and kits designed to help members succeed in and out of uniform."
            parentHref="/membership"
            parentLabel="Membership"
        />
    )
}
