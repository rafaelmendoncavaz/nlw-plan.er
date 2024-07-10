import { LocationInput } from "./LocationInput/LocationInput"
import { DateInput } from "./DateInput/DateInput"
import { Button } from "../../Global/Button"
import { Settings2, ArrowRight } from "lucide-react"

interface LocationDateInputProps {

    openInvitesInput: () => void,
    closeInvitesInput: () => void,
    isGuestsInputOpen: boolean

}

export function LocationDateInput ({ isGuestsInputOpen, openInvitesInput, closeInvitesInput }: LocationDateInputProps) {

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <LocationInput isGuestsInputOpen={isGuestsInputOpen} />

          <DateInput isGuestsInputOpen={isGuestsInputOpen} />

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
        </div>
    )
}