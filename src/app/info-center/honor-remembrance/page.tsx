import { Metadata } from "next"
import { InfoCenterHonorRemembrancePage } from "@/views/InfoCenterHonorRemembrancePage"

export const metadata: Metadata = {
    title: "Honor & Remembrance | BAAFA",
    description: "Archiving service and sacrifice",
}

export default function Page() {
    return <InfoCenterHonorRemembrancePage />
}
