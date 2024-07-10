import { Link2 } from "lucide-react"

export function LinksCard() {

    return(
        <div className="flex items-center justify-between">
            <div className="space-y-1.5 gap-4">
                <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                </span>
                <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                    https://www.airbnb.com.br/rooms/1047000110000000000000000000000000
                </a>
            </div>
            <Link2 className="text-zinc-400 shrink-0" />
        </div>
    )
}