import { Metadata } from "next"
import { HomePage } from "@/pages/HomePage"

export const metadata: Metadata = {
  title: "BAAFA - Bangladeshi American Armed Forces Association",
  description: "Building a legacy of service, community, and leadership for Bangladeshi American service members and veterans. Join us in supporting those who serve.",
  keywords: ["BAAFA", "Bangladeshi American", "Armed Forces", "Veterans", "Military Association", "Community Service"],
  openGraph: {
    title: "BAAFA - Bangladeshi American Armed Forces Association",
    description: "Supporting Bangladeshi American service members, veterans, and their families through advocacy, education, and community programs.",
    type: "website",
  }
}

export default function Page() {
  return <HomePage />
}
