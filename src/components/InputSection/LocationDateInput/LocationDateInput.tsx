import { LocationInput } from "./LocationInput/LocationInput"
import { DateInput } from "./DateInput/DateInput"
import { Button } from "../../Global/Button"
import { Settings2, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Modal } from "../../Global/Modal"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"
import "react-day-picker/dist/style.css"

interface LocationDateInputProps {

    openInvitesInput: () => void,
    closeInvitesInput: () => void,
    setDestination: (destination: string) => void,
    setTripStartEndDate: (tripStartEndDate: DateRange | undefined ) => void,
    tripStartEndDate: DateRange | undefined,
    isGuestsInputOpen?: boolean | undefined

}

export function LocationDateInput ({ isGuestsInputOpen, openInvitesInput, closeInvitesInput, setDestination, setTripStartEndDate, tripStartEndDate }: LocationDateInputProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)

    const openDatePicker: () => void = () => {

        setIsDatePickerOpen(true)

    }

    const closeDatePicker: () => void = () => {

        setIsDatePickerOpen(false)

    }

    const displayedDate = tripStartEndDate && tripStartEndDate.from && tripStartEndDate.to
    ? `${format(tripStartEndDate.from, "d' de 'LLL")} até ${format(tripStartEndDate.to, "d' de 'LLL")}`
    : null

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <LocationInput isGuestsInputOpen={isGuestsInputOpen} setDestination={setDestination} />

          <DateInput isGuestsInputOpen={isGuestsInputOpen} openDatePicker={openDatePicker} displayedDate={displayedDate} />

          <div className="w-px h-6 bg-zinc-800" />

          {
            isGuestsInputOpen 
            ? (
            <Button onClick={closeInvitesInput} colorVariant="secondary">
                Alterar Local/Data
                <Settings2 className="size-5" />
            </Button>
            ) 
            : (
            <Button onClick={openInvitesInput}>
                Continuar
                <ArrowRight className="size-5" />
                </Button>
                )
            }

            {
                isDatePickerOpen && (
                    <Modal title="Selecione a Data" closeModal={closeDatePicker} size="none" >
                        <DayPicker mode="range" selected={tripStartEndDate} onSelect={setTripStartEndDate} />
                    </Modal>
                )
            }

        </div>
    )
}