import { Metadata } from "next"
import { AboutReportsPage } from "@/pages/AboutReportsPage"

export const metadata: Metadata = {
    title: "Reports | BAAFA",
    description: "Transparency through annual and financial reports",
}

export default function Page() {
    return <AboutReportsPage />
}
