import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

interface DateInputProps {
  label: string
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return ""
  }
  return date.toLocaleDateString("en-GB", {
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

export default function DateInput ({label} : DateInputProps) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(
        new Date("17-11-2025")
    )
    const [month, setMonth] = useState<Date | undefined>(date)
    const [value, setValue] = useState(formatDate(date))

    return (
        <div>
            <div className="flex items-center gap-2">
                <span>{label}</span>
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
    )
}