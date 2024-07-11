import { Button } from "../../Global/Button"
import { LocationInput } from "../../InputSection/LocationDateInput/LocationInput/LocationInput"
import { DateInput } from "../../InputSection/LocationDateInput/DateInput/DateInput"

interface FormProps {

    updateDestinationDate: (event: React.FormEvent<HTMLFormElement>) => void,
    displayedDate: string | null,
    openDatePicker: () => void,
    setDestination: (destination: string) => void,

}

export function UpdateDestinationDateForm({ updateDestinationDate, displayedDate, openDatePicker, setDestination }: FormProps) {

    return(
        <form onSubmit={updateDestinationDate} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <LocationInput isGuestsInputOpen={undefined} setDestination={setDestination} />

                <DateInput isGuestsInputOpen={undefined} openDatePicker={openDatePicker} displayedDate={displayedDate} />
            </div>
                
            <Button type="submit" sizeVariant="full">
                Atualizar destino e data
            </Button>
            
        </form>
    )
}