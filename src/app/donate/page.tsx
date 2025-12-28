import { Metadata } from "next"
import { DonatePage } from "@/views/DonatePage"

export const metadata: Metadata = {
    title: "Donate | BAAFA - Support Our Heroes",
    description: "Support Bangladeshi American service members, veterans, and their families through your generous donation.",
}

export default function Page() {
    return <DonatePage />
}
