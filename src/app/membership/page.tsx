import { Metadata } from "next"
import { MembershipPage } from "@/pages/MembershipPage"

export const metadata: Metadata = {
    title: "Membership & Services | BAAFA",
    description: "Join BAAFA to access exclusive member benefits, discounts, resources, and comprehensive veterans services.",
}

export default function Page() {
    return <MembershipPage />
}
