import { Bus } from "lucide-react"
import { Hotel } from "lucide-react"
import { Plane } from "lucide-react"

export default function Tab () {
    return (
        <>
        <div className="flex flex-col md:flex-row rounded-xl bg-white max-w-5xl mx-auto p-2 md:p-4 gap-2 md:gap-4 shadow-md">
            <div className="flex rounded-md flex-1 md:px-5 px-3 py-2 gap-6 items-center justify-left hover:bg-[#EBF9FF]">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D3F3FF] flex items-center justify-center">
                    <Bus className="text-[#19C0FF]"/>
                </div>
                Bus & Shuttle
            </div>

            <div className="flex rounded-md flex-1 md:px-5 px-3 py-2 gap-6 items-center justify-left hover:bg-[#F4FFEB]">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8FBCC] flex items-center justify-center">
                    <Hotel className="text-[#447A11]" />
                </div>
                Hotel & Accommodation
            </div>

            <div className="flex rounded-md flex-1 md:px-5 px-3 py-2 gap-6 items-center justify-left hover:bg-[#EBF4FF]">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E1EDFE] flex items-center justify-center">
                    <Plane className="text-[#5664E1]" />
                </div>
                Flight
            </div>
        </div>
        </>
    )
}