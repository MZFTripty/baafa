"use client"

import * as React from "react"
import { CategoryPage } from "@/components/shared/CategoryPage"

export function AboutPage() {
    const [data, setData] = React.useState<any>(null)

    React.useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((d) => setData(d.about))
    }, [])

    if (!data) return <div className="flex h-screen items-center justify-center text-baafa-gold">Loading...</div>

    return (
        <CategoryPage
            title="About BAAFA"
            summary={data.summary}
            sections={data.sections}
            heroImage={data.heroImage}
        />
    )
}







