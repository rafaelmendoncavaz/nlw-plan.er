import { MapPin } from "lucide-react"
import { Input } from "../../../Global/Input"

interface LocationProp {

    isGuestsInputOpen: boolean

}

export function LocationInput({ isGuestsInputOpen }: LocationProp) {

    return (
        <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <Input type="text" name="where-to" placeholder="Para onde você vai?" disabled={isGuestsInputOpen} />
        </div>
    )
}