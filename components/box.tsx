import { Bus, CalendarIcon, ChevronDown, ChevronUp, User } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import PassengerInput from "./passengerInput";

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

export default function BoxContent () {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(
        new Date("2025-06-01")
    )
    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState(formatDate(date))
    const [count, setCount] = useState(1)

    return (
        <>
        <div className="flex flex-row gap-6">
            <div>
                <div className="flex items-center gap-2">
                    <span>FROM</span>
                </div>

                <div className="relative">
                    <Bus className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="pl-10 py-6 w-full"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2">
                    <span>TO</span>
                </div>

                <div className="relative">
                    <Bus className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="pl-10 py-6 w-full"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2">
                    <span>DEPARTURE DATE</span>
                </div>

                <div className="relative">
                    <div className="relative flex gap-2">
                        <Input
                            id="date"
                            value={value}
                            placeholder="June 01, 2025"
                            className="bg-background pr-10 py-6"
                            onChange={(e) => {
                                const date = new Date(e.target.value)
                                setValue(e.target.value)
                                if (isValidDate(date)) {
                                setDate(date)
                                setMonth(date)
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowDown") {
                                e.preventDefault()
                                setOpen(true)
                                }
                            }}
                        />
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date-picker"
                                    variant="ghost"
                                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                    >
                                    <CalendarIcon className="size-3.5" />
                                    <span className="sr-only">Select date</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto overflow-hidden p-0"
                                align="end"
                                alignOffset={-8}
                                sideOffset={10}
                            >
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    captionLayout="dropdown"
                                    month={month}
                                    onMonthChange={setMonth}
                                    onSelect={(date) => {
                                        setDate(date)
                                        setValue(formatDate(date))
                                        setOpen(false)
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2">
                    <Checkbox id="trip" />
                    <span>ROUND TRIP</span>
                </div>

                <div className="relative">
                    <div className="relative flex gap-2">
                        <Input
                            id="date"
                            value={value}
                            placeholder="June 01, 2025"
                            className="bg-background pr-10 py-6"
                            onChange={(e) => {
                                const date = new Date(e.target.value)
                                setValue(e.target.value)
                                if (isValidDate(date)) {
                                setDate(date)
                                setMonth(date)
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowDown") {
                                e.preventDefault()
                                setOpen(true)
                                }
                            }}
                        />
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date-picker"
                                    variant="ghost"
                                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                                    >
                                    <CalendarIcon className="size-3.5" />
                                    <span className="sr-only">Select date</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto overflow-hidden p-0"
                                align="end"
                                alignOffset={-8}
                                sideOffset={10}
                            >
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    captionLayout="dropdown"
                                    month={month}
                                    onMonthChange={setMonth}
                                    onSelect={(date) => {
                                        setDate(date)
                                        setValue(formatDate(date))
                                        setOpen(false)
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>

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
        </div>
        </>
    )
}