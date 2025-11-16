import { Asterisk } from "lucide-react";

export default function Logo () {
    return (
        <div className="flex flex-row gap-1 items-center font-nunito p-10">
            <Asterisk color="#19C0FF" size={40} strokeWidth={3} />
            <h1 className="text-2xl font-semibold text-[#19C0FF]">Tripzy</h1>
        </div>
    )
}