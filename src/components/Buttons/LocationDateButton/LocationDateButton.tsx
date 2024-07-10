import { ArrowRight } from "lucide-react"

interface LocationDateInputProps {

    setIsGuestsInputOpen: React.Dispatch<React.SetStateAction<boolean>>

}

export function LocationDateButton({ setIsGuestsInputOpen }: LocationDateInputProps) {

    return(
        <button onClick={() => setIsGuestsInputOpen(true)} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
            Continuar
            <ArrowRight className="size-5" />
        </button>
    )
}