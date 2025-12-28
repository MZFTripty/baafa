import { Metadata } from "next"
import { GetInvolvedCommunityProgramsPage } from "@/views/GetInvolvedCommunityProgramsPage"

export const metadata: Metadata = {
    title: "Community Programs | BAAFA",
    description: "Local service projects and patriotic observances",
}

export default function Page() {
    return <GetInvolvedCommunityProgramsPage />
}
