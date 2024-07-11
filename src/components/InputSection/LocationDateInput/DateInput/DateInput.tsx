import { Calendar } from "lucide-react"

interface CalendarProp {

    isGuestsInputOpen: boolean | undefined,
    openDatePicker: () => void,
    displayedDate: string | null

}

export function DateInput({ isGuestsInputOpen, openDatePicker, displayedDate }: CalendarProp) {

    return(
        <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-lg text-zinc-400 flex-1">
                { displayedDate || "Quando?" }
            </span>
        </button>
    )
}