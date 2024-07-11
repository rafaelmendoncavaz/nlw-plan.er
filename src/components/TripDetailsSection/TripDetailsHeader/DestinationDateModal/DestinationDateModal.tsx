import { useParams } from "react-router-dom"
import { api } from "../../../../lib/axios"
import { Modal } from "../../../Global/Modal"
import { UpdateDestinationDateForm } from "../../../Form/UpdateDestinationDateForm/UpdateDestinationDateForm"
import { DateRange, DayPicker } from "react-day-picker"
import { useState } from "react"
import { format } from "date-fns"


interface LocationDateModalProps {

    closeModal: () => void

}

export function DestinationDateModal({ closeModal }: LocationDateModalProps) {

    const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false)
    const [tripStartEndDate, setTripStartEndDate] = useState<DateRange | undefined>()
    const [destination, setDestination] = useState<string>("")

    const openDatePicker: () => void = () => {

        setIsDatePickerOpen(true)

    }

    const closeDatePicker: () => void = () => {

        setIsDatePickerOpen(false)

    }

    const displayedDate = tripStartEndDate && tripStartEndDate.from && tripStartEndDate.to
    ? `${format(tripStartEndDate.from, "d' de 'LLL")} até ${format(tripStartEndDate.to, "d' de 'LLL")}`
    : null

    const { tripId } = useParams()

    async function updateDestinationDate (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const starts_at = tripStartEndDate?.from
        const ends_at = tripStartEndDate?.to

        await api.put(`/trips/${tripId}`, {
            destination,
            starts_at,
            ends_at
            
        })

        window.document.location.reload()

    }

    return(
        <div>
            <Modal 
            closeModal={closeModal}
            title="Alterar Destino e Data" 
            description="Todos os convidados poderão visualizar as novas informações." 
            size="large"
            form={<UpdateDestinationDateForm 
                updateDestinationDate={updateDestinationDate} 
                displayedDate={displayedDate} 
                openDatePicker={openDatePicker} 
                setDestination={setDestination}
                />}
            />
            {
                isDatePickerOpen && (
                    <Modal title="Selecione a Data" closeModal={closeDatePicker} size="none" >
                        <DayPicker mode="range" selected={tripStartEndDate} onSelect={setTripStartEndDate} />
                    </Modal>
                )
            }
        </div>
            
    )
}