import { Metadata } from "next"
import { InfoCenterCalendarPage } from "@/views/InfoCenterCalendarPage"

export const metadata: Metadata = {
    title: "Calendar | BAAFA",
    description: "Upcoming events and ceremonies",
}

export default function Page() {
    return <InfoCenterCalendarPage />
}
