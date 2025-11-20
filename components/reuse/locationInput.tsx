import { ReactNode, useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { locations } from "../data/locations";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface LocationInputProps {
    label: string
    icon: ReactNode
    placeholder: string
    value: string
    onChange: (value: string) => void
}

export default function LocationInput ({ label, icon, placeholder, value, onChange }: LocationInputProps) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")

    const filteredLocations = locations.filter((loc) =>
        loc.english_name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium font-nunito mb-1">{label}</span>
            </div>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>

                <Input
                    placeholder={placeholder}
                    value={query}
                    onFocus={() => setOpen(false)}
                    onChange={(e) => {
                        const val = e.target.value;
                        setQuery(val);
                        setOpen(true);
                    }}
                    className="pl-10 py-6 w-[200px] block truncate"
                />
                    </div>

            {open && (
                <div className="absolute mt-1 w-[200px] bg-white border rounded shadow max-h-60 overflow-y-auto z-10">
                {filteredLocations.length === 0 ? (
                    <div className="p-3 text-sm text-gray-500">No matches</div>
                ) : (
                    filteredLocations.map((loc) => (
                    <div
                        key={loc.short_code}
                        className="p-3 cursor-pointer hover:bg-gray-100 text-sm"
                        onClick={() => {
                        onChange(loc.english_name);
                        setQuery(loc.english_name);
                        setOpen(false);
                        }}
                    >
                        <div className="font-medium block w-full truncate">{loc.english_name}</div>
                        <div className="text-xs text-gray-500">{loc.code_state}</div>
                    </div>
                    ))
                )}
                </div>
            )}
        </div>
    )
}