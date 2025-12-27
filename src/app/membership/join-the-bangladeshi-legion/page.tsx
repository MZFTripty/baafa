"use client"

import React from "react"
import { GenericSubPage } from "@/components/shared/GenericSubPage"
import { Button } from "@/components/ui/button"

export default function JoinLegionPage() {
    return (
        <GenericSubPage
            title="Join the Bangladeshi Legion"
            description="Start your journey as a member of America's premier association for Bangladeshi American patriots."
            parentHref="/membership"
            parentLabel="Membership"
        >
            <div className="flex flex-col items-start gap-6">
                <p className="text-xl text-baafa-navy/80">
                    Your service matters. Your heritage matters. Join a community that honors both.
                </p>
                <Button className="bg-baafa-red hover:bg-baafa-red/90 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                    Apply Now
                </Button>
            </div>
        </GenericSubPage>
    )
}
