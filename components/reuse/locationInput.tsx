import { ReactNode } from "react";
import { Input } from "../ui/input";

interface LocationInputProps {
    label: string
    icon: ReactNode
    placeholder: string
    value: string
    onChange: (value: string) => void
}

export default function LocationInput ({ label, icon, placeholder, value, onChange }: LocationInputProps) {
    return (
        <div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium font-nunito mb-1">{label}</span>
                </div>

                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>

                    <Input
                        placeholder={placeholder}
                        value={value}
                        required
                        onChange={(e) => onChange(e.target.value)}
                        className="pl-10 py-6 w-[200px]"
                    />
                </div>
            </div>
    )
}