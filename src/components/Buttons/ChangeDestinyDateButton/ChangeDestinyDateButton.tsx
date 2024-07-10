import { Settings2 } from "lucide-react"

interface DestinyDateInputProps {

    closeInvitesInput: () => void,

}

export function ChangeDestinyDateButton({ closeInvitesInput }: DestinyDateInputProps) {

    return(
        <button onClick={closeInvitesInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Alterar Local/Data
            <Settings2 className="size-5" />
        </button>
    )
}