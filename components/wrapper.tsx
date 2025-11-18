"use client"

import { useState } from "react";
import Tab from "./tab";
import BoxContent from "./box";
import Blank from "./blank";

export default function Wrapper() {
    const [activeTab, setActiveTab] = useState("bus");

    return (
        <div className="bg-white max-w-5xl mx-auto rounded-xl shadow-md mt-4 w-full">
            <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="mt-4">
                {activeTab === "bus" && <BoxContent />}
                {activeTab === "hotel" && <Blank />}
                {activeTab === "flight" && <Blank />}
            </div>

        </div>
    )
}

