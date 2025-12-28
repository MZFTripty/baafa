import { Metadata } from "next"
import { InfoCenterBangladeshiLegionTrainingPage } from "@/views/InfoCenterBangladeshiLegionTrainingPage"

export const metadata: Metadata = {
    title: "Training | BAAFA",
    description: "Online courses and orientation materials",
}

export default function Page() {
    return <InfoCenterBangladeshiLegionTrainingPage />
}
