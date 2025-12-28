import { Metadata } from "next"
import { AboutLeadershipPage } from "@/views/AboutLeadershipPage"

export const metadata: Metadata = {
    title: "Leadership | BAAFA",
    description: "Meet the dedicated officers and board members guiding BAAFA",
}

export default function Page() {
    return <AboutLeadershipPage />
}
