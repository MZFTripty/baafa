import { Metadata } from "next"
import { AdvocacyBeTheOnePage } from "@/views/AdvocacyBeTheOnePage"

export const metadata: Metadata = {
    title: "Be The One | BAAFA",
    description: "Veteran suicide prevention initiative",
}

export default function Page() {
    return <AdvocacyBeTheOnePage />
}
