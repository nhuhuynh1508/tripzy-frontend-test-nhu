import { ChevronDown, ChevronUp, User } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function PassengerCount() {
    const [count, setCount] = useState(1)

    return (
        <div className="flex flex-col">
            <span className="font-nunito">PASSENGER</span>

            <div className="flex items-center border rounded-xl gap-6">
                <div className="flex items-center px-3 gap-2">
                    <User className="h-4 w-4" />
                    <span className="py-3 text-md">{count}</span>
                </div>

                <div className="flex flex-col justify-center border-l h-full">
                    <Button
                        variant="ghost"
                        className="h-4 px-2 rounded-none border-b"
                        onClick={() => setCount(count + 1)}
                    >
                    <ChevronUp className="h-3 w-3" />
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-4 px-2 rounded-none"
                        onClick={() => setCount(Math.max(1, count - 1))}
                    >
                    <ChevronDown className="h-3 w-3" />
                    </Button>
                </div>
            </div>
        </div> 
    )
}