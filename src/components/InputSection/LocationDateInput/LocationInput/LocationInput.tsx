import { MapPin } from "lucide-react"

interface LocationProp {

    isGuestsInputOpen: boolean

}

export function LocationInput({ isGuestsInputOpen }: LocationProp) {

    return (
        <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
        </div>
    )
}