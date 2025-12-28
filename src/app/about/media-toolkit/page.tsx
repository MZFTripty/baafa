import { Metadata } from "next"
import { AboutMediaToolkitPage } from "@/views/AboutMediaToolkitPage"

export const metadata: Metadata = {
    title: "Media Toolkit | BAAFA",
    description: "Official brand assets and press materials",
}

export default function Page() {
    return <AboutMediaToolkitPage />
}
