import { Calendar } from "lucide-react"
import { Input } from "../../../Global/Input"

interface CalendarProp {

    isGuestsInputOpen: boolean

}

export function DateInput({ isGuestsInputOpen }: CalendarProp) {

    return(
        <div className="flex items-center gap-2 ">
            <Calendar className="size-5 text-zinc-400" />
            <Input type="date" name="when" placeholder="Quando?" disabled={isGuestsInputOpen} sizeVariant="small" />
        </div>
    )
}