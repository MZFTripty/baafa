import { Metadata } from "next"
import { MembershipRenewMembershipPage } from "@/pages/MembershipRenewMembershipPage"

export const metadata: Metadata = {
    title: "Renew Membership | BAAFA",
    description: "Stay connected and continue your support",
}

export default function Page() {
    return <MembershipRenewMembershipPage />
}
