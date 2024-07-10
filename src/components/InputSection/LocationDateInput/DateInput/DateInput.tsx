import { Calendar } from "lucide-react"

interface CalendarProp {

    isGuestsInputOpen: boolean

}

export function DateInput({ isGuestsInputOpen }: CalendarProp) {

    return(
        <div className="flex items-center gap-2 ">
            <Calendar className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
        </div>
    )
}