import { LocationDateButton } from "../../Buttons/LocationDateButton/LocationDateButton"
import { ChangeDestinyDateButton } from "../../Buttons/ChangeDestinyDateButton/ChangeDestinyDateButton"
import { LocationInput } from "./LocationInput/LocationInput"
import { DateInput } from "./DateInput/DateInput"

interface LocationDateInputProps {

    setIsGuestsInputOpen: React.Dispatch<React.SetStateAction<boolean>>,
    closeInvitesInput: () => void,
    isGuestsInputOpen: boolean

}

export function LocationDateInput ({ isGuestsInputOpen, setIsGuestsInputOpen, closeInvitesInput }: LocationDateInputProps) {

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <LocationInput isGuestsInputOpen={isGuestsInputOpen} />

          <DateInput isGuestsInputOpen={isGuestsInputOpen} />

          <div className="w-px h-6 bg-zinc-800" />

          {isGuestsInputOpen ? <ChangeDestinyDateButton closeInvitesInput={closeInvitesInput} /> : <LocationDateButton setIsGuestsInputOpen={setIsGuestsInputOpen} />}
        </div>
    )
}