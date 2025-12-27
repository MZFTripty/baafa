import { Metadata } from "next"
import { AdvocacyPage } from "@/pages/AdvocacyPage"

export const metadata: Metadata = {
    title: "Advocacy | BAAFA - Fighting for Veterans Rights",
    description: "BAAFA advocacy initiatives including veteran suicide prevention, legislative action, national affairs engagement, and youth support programs.",
}

export default function Page() {
    return <AdvocacyPage />
}
