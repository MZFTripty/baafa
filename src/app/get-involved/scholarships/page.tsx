import { Metadata } from "next"
import { GetInvolvedScholarshipsPage } from "@/pages/GetInvolvedScholarshipsPage"

export const metadata: Metadata = {
    title: "Scholarships | BAAFA",
    description: "Financial aid for children of members",
}

export default function Page() {
    return <GetInvolvedScholarshipsPage />
}
