"use client"

import * as React from "react"
import { CategoryPage } from "@/components/shared/CategoryPage"

export default function MembershipPage() {
    const [data, setData] = React.useState<any>(null)

    React.useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((d) => setData(d.membership))
    }, [])

    if (!data) return <div className="flex h-screen items-center justify-center text-baafa-gold">Loading...</div>

    return (
        <CategoryPage
            title="Membership & Services"
            summary={data.summary}
            sections={data.sections}
        />
    )
}
