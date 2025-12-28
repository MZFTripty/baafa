import { Metadata } from "next"
import { MembershipJoinTheBangladeshiLegionPage } from "@/views/MembershipJoinTheBangladeshiLegionPage"

export const metadata: Metadata = {
    title: "Join BAAFA",
    description: "Start your journey as a member",
}

export default function Page() {
    return <MembershipJoinTheBangladeshiLegionPage />
}
