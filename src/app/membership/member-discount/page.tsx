"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"

export default function MemberDiscountPage() {
    return (
        <GenericSubPage
            title="Member Discount"
            description="Exclusive savings and benefits from our corporate partners and sponsors."
            parentHref="/membership"
            parentLabel="Membership"
        />
    )
}
