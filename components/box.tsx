import { AlertCircleIcon, ArrowRightLeft, Bus, Search } from "lucide-react";
import LocationInput from "./reuse/locationInput";
import DateInput from "./reuse/dateInput";
import { useState } from "react";
import { Button } from "./ui/button";
import PassengerCount from "./reuse/passengerCount";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert"; 

export default function BoxContent() {
    const router = useRouter();

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departureDate, setDepartureDate] = useState<Date | undefined>();
    const [arrivalDate, setArrivalDate] = useState<Date | undefined>();
    const [passengers, setPassengers] = useState(1);
    const [showAlert, setShowAlert] = useState(false);

    function formatDDMMYYYY(isoString: string) {
        const d = new Date(isoString);
        const date = d.toLocaleDateString("en-GB");
        const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${date} ${time}`;
    }

    const handleSearch = () => {
        if (!from || !to || !departureDate) {
            setShowAlert(true);
            return;
        }

        const params = new URLSearchParams({
            from,
            to,
            departureDate: departureDate
                ? formatDDMMYYYY(departureDate.toISOString())
                : "",
            arrivalDate: arrivalDate
                ? formatDDMMYYYY(arrivalDate.toISOString())
                : "",
            passengerCount: passengers.toString(),
        });

        router.push(`/search?${params.toString()}`);
    };

  return (
    <div className="flex flex-col justify-between px-4 py-4 gap-8">
        <div className="flex flex-row items-center gap-2">
            <LocationInput
                label="FROM"
                icon={<Bus className="h-5 w-5 text-black" />}
                placeholder="Enter city, terminal..."
                value={from}
                onChange={setFrom}
            />

            <div className="mt-5 rounded-3xl p-2 shadow-md">
                <ArrowRightLeft className="h-5 w-5 text-[#19C0FF]" />
            </div>

            <LocationInput
                label="TO"
                icon={<Bus className="h-5 w-5 text-black" />}
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

            <PassengerCount value={passengers} onChange={setPassengers} />
        </div>

        {showAlert && (
            <Alert variant="destructive" className="my-2">
            <AlertCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Please fill in FROM, TO, DEPARTURE DATE (ROUND TRIP if checked) AND PASSENGER (default is 1) before searching.
            </AlertDescription>
            </Alert>
        )}

            
        <div className="flex items-center justify-center">
            <Button
                type="button"
                className="font-nunito text-white bg-[#19C0FF] w-[250px] py-6 rounded-2xl cursor-pointer mb-5"
                onClick={handleSearch}
            >
            <Search />
                SEARCH
            </Button>
        </div>
    </div>
  );
}
