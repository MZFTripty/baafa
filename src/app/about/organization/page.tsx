import { Metadata } from "next"
import { AboutOrganizationPage } from "@/pages/AboutOrganizationPage"

export const metadata: Metadata = {
    title: "Organization | BAAFA",
    description: "Learn about BAAFA organizational structure, mission, and history",
}

export default function Page() {
    return <AboutOrganizationPage />
}
