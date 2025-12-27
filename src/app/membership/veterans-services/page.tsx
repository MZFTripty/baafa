import { Metadata } from "next"
import { MembershipVeteransServicesPage } from "@/pages/MembershipVeteransServicesPage"

export const metadata: Metadata = {
    title: "Veterans Services | BAAFA",
    description: "Direct assistance for VA claims and benefits",
}

export default function Page() {
    return <MembershipVeteransServicesPage />
}
