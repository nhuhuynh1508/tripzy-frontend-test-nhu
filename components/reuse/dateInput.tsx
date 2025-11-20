import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface DateInputProps {
  label: string;
  onChange?: (date: Date | undefined) => void;
  withCheckbox?: boolean;
}

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) return false;
  return !isNaN(date.getTime());
}

export default function DateInput({label, onChange, withCheckbox = false}: DateInputProps) {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | undefined>();
    const [month, setMonth] = useState<Date | undefined>(new Date());
    const [value, setValue] = useState("");

    const [checked, setChecked] = useState(false);
    const disabled = withCheckbox && !checked;

    return (
        <div className="flex flex-col flex-1">
          <div className="flex flew-row gap-2">
              {/*Checkbox*/}
              {withCheckbox && (
                  <Checkbox 
                  className="mt-0.5"
                  checked={checked}
                  onCheckedChange={(e) => setChecked(Boolean(e))}
                  />
              )}
              <span className="text-sm font-medium font-nunito mb-1">{label}</span>
          </div>

          <div className="flex flex-row gap-1">
              {/*Date*/}
              <div className="relative">
                <Input
                  id="date"
                  value={value}
                  placeholder="June 01, 2025"
                  disabled={disabled}
                  className={`bg-background pr-10 py-6 px-3 h-10 w-full ${
                    disabled ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    setValue(e.target.value);
                    if (isValidDate(date)) {
                      setDate(date);
                      setMonth(date);
                      onChange?.(date);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (disabled) return;
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setOpen(true);
                    }
                  }}
                />
                
                <Popover open={disabled ? false : open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      id="date-picker"
                      variant="ghost"
                      disabled={disabled}
                      className="absolute top-1/2 right-2 -translate-y-1/2"
                    >
                      <CalendarIcon className="h-5 w-5" />
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
                        setDate(date);
                        setValue(formatDate(date));
                        setOpen(false);
                        onChange?.(date);
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
                      
              {/*Time*/}
              <Input
                  type="time"
                  step="60"
                  disabled={disabled}
                  className={`py-6 px-3 h-10 w-[120px] ${
                    disabled ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  value={
                    date
                      ? `${String(date.getHours()).padStart(2, "0")}:${String(
                          date.getMinutes()
                        ).padStart(2, "0")}`
                      : ""
                  }
                  onChange={(e) => {
                    if (!date) return;
                    const [h, m] = e.target.value.split(":").map(Number);
                    const newDate = new Date(date);
                    newDate.setHours(h, m);
                    setDate(newDate);
                    onChange?.(newDate);
                  }}
              />
            </div>
        </div>
    );
}
