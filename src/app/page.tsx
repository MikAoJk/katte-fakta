import {CatFacts} from "@/components/CatFacts";
import React from "react";

export default function Home() {
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-between">
                <div className="z- items-center justify-between font-mono text-sm flex">
                    <CatFacts/>
                </div>
            </div>
        </main>
    )
}
