import { Metadata } from "next"
import { AdvocacyNationalAffairsPage } from "@/pages/AdvocacyNationalAffairsPage"

export const metadata: Metadata = {
    title: "National Affairs | BAAFA",
    description: "Engagement with national security and foreign relations",
}

export default function Page() {
    return <AdvocacyNationalAffairsPage />
}
