import { CheckCircle2, CircleDashed } from "lucide-react"

interface Guest {

    name?: string | null,
    email: string,
    confirmed: boolean

}

export function InvitedCard({ name, email, confirmed }:Guest) {

    return(
        <div className="flex items-center justify-between">

            <div className="space-y-1.5 gap-4">
                <span className="block font-medium text-zinc-100">
                    {name}
                </span>
                <span className="block text-sm text-zinc-400 truncate">
                    {email}
                </span>
            </div>
            {
                confirmed 
                ? <CheckCircle2 className="text-lime-400 shrink-0" />
                : <CircleDashed className="text-zinc-400 shrink-0" />
            }
            
        </div>
    )
}