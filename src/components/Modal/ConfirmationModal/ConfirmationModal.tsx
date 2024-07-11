import { format } from "date-fns"
import { ModalConfirmationForm } from "../../Form/ModalConfirmationForm/ModalConfirmationForm"
import { Modal } from "../../Global/Modal"
import { DateRange } from "react-day-picker"

interface ConfirmationModalProps {

    closeModal: () => void,
    createTrip: (event: React.FormEvent<HTMLFormElement>) => void,
    setTripCreator: (tripCreator: string) => void,
    setCreatorEmail: (creatorEmail: string) => void,
    destination: string,
    tripStartEndDate: DateRange | undefined

}

export function ConfirmationModal({ closeModal, createTrip, setTripCreator, setCreatorEmail, destination, tripStartEndDate }: ConfirmationModalProps) {

    const displayedDate = tripStartEndDate && tripStartEndDate.from && tripStartEndDate.to
    ? `${format(tripStartEndDate.from, "d' de 'LLL")} a ${format(tripStartEndDate.to, "d' de 'LLL' de 'yyyy")}`
    : null

    return(
        <Modal
        closeModal={closeModal}
        title="Confirmar criação de viagem"
        description={<>
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-100 font-semibold">{ destination }</span>{' '} nas datas entre{' '} <span className="text-zinc-100 font-semibold">{displayedDate}</span>{' '}preencha seus dados abaixo.
          </>}
        form={<ModalConfirmationForm createTrip={createTrip} setTripCreator={setTripCreator} setCreatorEmail={setCreatorEmail} />}
        />
    )
}