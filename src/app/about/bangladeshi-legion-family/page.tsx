import { Metadata } from "next"
import { AboutBangladeshiLegionFamilyPage } from "@/views/AboutBangladeshiLegionFamilyPage"

export const metadata: Metadata = {
    title: "Legion Family | BAAFA",
    description: "Supporting the broader community of families and veterans",
}

export default function Page() {
    return <AboutBangladeshiLegionFamilyPage />
}
