"use client"

import { ReactNode } from "react";
import { Input } from "../ui/input";

interface LocationInputProps {
    label: string
    icon: ReactNode
    placeholder: string
}

export default function LocationInput ({ label, icon, placeholder }: LocationInputProps) {
    return (
        <div>
                <div className="flex items-center gap-2">
                    <span>{label}</span>
                </div>

                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">{icon}</span>

                    <Input
                        id="email"
                        type="email"
                        placeholder={placeholder}
                        required
                        className="pl-10 py-6 w-full"
                    />
                </div>
            </div>
    )
}