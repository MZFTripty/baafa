import { Metadata } from "next"
import { AdvocacyLegislativePage } from "@/views/AdvocacyLegislativePage"

export const metadata: Metadata = {
    title: "Legislative | BAAFA",
    description: "Tracking bills and advocating for veterans rights",
}

export default function Page() {
    return <AdvocacyLegislativePage />
}
