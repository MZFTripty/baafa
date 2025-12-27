import { Metadata } from "next"
import { GetInvolvedNationalMeetingsPage } from "@/pages/GetInvolvedNationalMeetingsPage"

export const metadata: Metadata = {
    title: "National Meetings | BAAFA",
    description: "Annual conventions and strategic planning",
}

export default function Page() {
    return <GetInvolvedNationalMeetingsPage />
}
