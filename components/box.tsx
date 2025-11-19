import { ArrowRightLeft, Bus, Search } from "lucide-react"
import LocationInput from "./reuse/locationInput"
import DateInput from "./reuse/dateInput"
import { useState } from "react"
import { Button } from "./ui/button"
import { locations } from "./data/locations"
import PassengerCount from "./reuse/passengerCount"

export default function BoxContent () {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [departureDate, setDepartureDate] = useState<Date | undefined>()
    const [arrivalDate, setArrivalDate] = useState<Date | undefined>();

    const handleSearch = () => {
        const fromLocation = locations.find(
            (loc) => loc.english_name.toLowerCase() === from.toLowerCase()
        )
        const toLocation = locations.find(
            (loc) => loc.english_name.toLowerCase() === to.toLowerCase()
        )

        console.log({ fromLocation, toLocation })
    }

    return (
        <div className="flex flex-col justify-between px-4 py-4 gap-8">
            <div className="flex flex-row items-center gap-2">
                <LocationInput 
                    label="FROM" 
                    icon={<Bus className="h-5 w-5 text-black"/>} 
                    placeholder="Enter city, terminal..."
                    value={from}
                    onChange={setFrom}
                />

                <div className="mt-5 rounded-3xl p-2 shadow-md">
                    <ArrowRightLeft className="h-5 w-5 text-[#19C0FF]" />
                </div>

                <LocationInput 
                    label="TO" 
                    icon={<Bus className="h-5 w-5 text-black"/>} 
                    placeholder="Enter city, terminal..."
                    value={to}
                    onChange={setTo}
                />

                <DateInput
                    label="DEPARTURE DATE"
                    onChange={setDepartureDate} 
                />
                
                <DateInput
                    label="ROUND TRIP"
                    onChange={setArrivalDate}
                    withCheckbox
                />


                <PassengerCount/>    
            </div>

            <div className="flex items-center justify-center"> 
                <Button
                    type="button"
                    className="font-nunito text-[#FFFFFF] bg-[#19C0FF] w-[250px] py-6 rounded-2xl cursor-pointer"
                    onClick={handleSearch}
                >
                <Search/>
                    SEARCH
                </Button>
            </div>
        </div>
    )
}