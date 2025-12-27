import { Metadata } from "next"
import { MembershipMemberDiscountPage } from "@/pages/MembershipMemberDiscountPage"

export const metadata: Metadata = {
    title: "Member Discounts | BAAFA",
    description: "Exclusive savings and benefits",
}

export default function Page() {
    return <MembershipMemberDiscountPage />
}
