"use client"

import Logo from "@/components/logo"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { connection } from 'next/server'

export default async function Search () {
    await connection()
    const searchParams = useSearchParams()

    const from = searchParams.get("from")
    const to = searchParams.get("to")
    const departureDate = searchParams.get("departureDate")
    const arrivalDate = searchParams.get("arrivalDate")
    const passengerCount = searchParams.get("passengerCount")

    return (
        <div 
            className="w-full h-screen flex items-center justify-center"
            style={{
                background: "linear-gradient(to top, white 50%, #cdeffcff 50%, #d6e0e7ff 100%)",
            }}
        >
            <div className="absolute top-5 left-5">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex flex-col bg-white shadow rounded-2xl w-[1000px] h-[600px] mt-10 items-start gap-10 px-20 py-20 font-nunito font-semibold">

                <p>From: {from}</p>
                <p>To: {to}</p>
                <p>Departure: {departureDate}</p>
                <p>Arrival: {arrivalDate ? arrivalDate : "No arrival date"}</p>
                <p>No. of passenger: {passengerCount}</p>

            </div>
        </div>
    )
}