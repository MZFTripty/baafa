import { Metadata } from "next"
import { InfoCenterBangladeshiLegionTrainingPage } from "@/pages/InfoCenterBangladeshiLegionTrainingPage"

export const metadata: Metadata = {
    title: "Training | BAAFA",
    description: "Online courses and orientation materials",
}

export default function Page() {
    return <InfoCenterBangladeshiLegionTrainingPage />
}
