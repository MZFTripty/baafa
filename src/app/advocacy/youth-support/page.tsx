import { Metadata } from "next"
import { AdvocacyYouthSupportPage } from "@/pages/AdvocacyYouthSupportPage"

export const metadata: Metadata = {
    title: "Youth Support | BAAFA",
    description: "Empowering the next generation with patriotic values",
}

export default function Page() {
    return <AdvocacyYouthSupportPage />
}
