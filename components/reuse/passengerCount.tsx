import { ChevronDown, ChevronUp, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function PassengerCount() {
    const [count, setCount] = useState(1)

    return (
        <div className="flex flex-col">
            <span className="font-nunito text-sm mb-1">PASSENGER</span>

            <div className="flex items-center border rounded-md gap-6 h-[50px]">
                <div className="flex items-center px-3 gap-3">
                    <User className="h-4 w-4" />
                    <span className="py-3 w-6 text-sm">{count}</span>
                </div>

                <div className="flex flex-col justify-center border-l h-full">
                    <Button
                        variant="ghost"
                        className="flex-1 px-2 h-5 rounded-none border-b"
                        onClick={() => setCount(count + 1)}
                    >
                    <ChevronUp className="w-3" />
                    </Button>

                    <Button
                        variant="ghost"
                        className="flex-1 h-5 px-2 rounded-none"
                        onClick={() => setCount(Math.max(1, count - 1))}
                    >
                    <ChevronDown className="w-3" />
                    </Button>
                </div>
            </div>
        </div> 
    )
}