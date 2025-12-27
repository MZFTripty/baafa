"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function RenewMembershipPage() {
    return (
        <GenericSubPage
            title="Renew Membership"
            description="Stay connected and continue your support for our shared mission."
            parentHref="/membership"
            parentLabel="Membership"
        />
    )
}
