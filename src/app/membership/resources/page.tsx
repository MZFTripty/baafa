import { Metadata } from "next"
import { MembershipResourcesPage } from "@/pages/MembershipResourcesPage"

export const metadata: Metadata = {
    title: "Resources | BAAFA",
    description: "Tools and handbooks for members",
}

export default function Page() {
    return <MembershipResourcesPage />
}
