import { Metadata } from "next"
import { InfoCenterPage } from "@/views/InfoCenterPage"

export const metadata: Metadata = {
    title: "Information Center | BAAFA Resources & Training",
    description: "Access BAAFA event calendar, training materials, and honor & remembrance archives.",
}

export default function Page() {
    return <InfoCenterPage />
}
