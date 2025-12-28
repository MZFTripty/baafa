import { Metadata } from "next"
import { GetInvolvedPage } from "@/views/GetInvolvedPage"

export const metadata: Metadata = {
    title: "Get Involved | BAAFA Community Programs",
    description: "Participate in BAAFA youth programs, community initiatives, national meetings, and scholarship opportunities.",
}

export default function Page() {
    return <GetInvolvedPage />
}
