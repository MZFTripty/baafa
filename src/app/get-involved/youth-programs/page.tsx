import { Metadata } from "next"
import { GetInvolvedYouthProgramsPage } from "@/pages/GetInvolvedYouthProgramsPage"

export const metadata: Metadata = {
    title: "Youth Programs | BAAFA",
    description: "Boys State, Girls State, and leadership development",
}

export default function Page() {
    return <GetInvolvedYouthProgramsPage />
}
