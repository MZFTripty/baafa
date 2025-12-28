import { Metadata } from "next"
import { GetInvolvedScholarshipsPage } from "@/views/GetInvolvedScholarshipsPage"

export const metadata: Metadata = {
    title: "Scholarships | BAAFA",
    description: "Financial aid for children of members",
}

export default function Page() {
    return <GetInvolvedScholarshipsPage />
}
