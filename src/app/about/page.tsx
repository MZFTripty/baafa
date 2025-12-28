import { Metadata } from "next"
import { AboutPage } from "@/views/AboutPage"

export const metadata: Metadata = {
    title: "About BAAFA - Our Mission & Leadership",
    description: "Learn about the Bangladeshi American Armed Forces Association mission, organizational structure, leadership team, and commitment to supporting service members and veterans.",
}

export default function Page() {
    return <AboutPage />
}
