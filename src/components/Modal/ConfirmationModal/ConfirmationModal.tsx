import { ModalConfirmationForm } from "../../Form/ModalConfirmationForm/ModalConfirmationForm"
import { Modal } from "../../Global/Modal"

interface ConfirmationModalProps {

    closeModal: () => void,
    createTrip: (event: React.FormEvent<HTMLFormElement>) => void,
    setTripCreator: (tripCreator: string) => void,
    setCreatorEmail: (creatorEmail: string) => void

}

export function ConfirmationModal({ closeModal, createTrip, setTripCreator, setCreatorEmail }: ConfirmationModalProps) {

    return(
        <Modal
        closeModal={closeModal}
        title="Confirmar criação de viagem"
        description={<>
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span>{' '} nas datas entre{' '} <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span>{' '}preencha seus dados abaixo.
          </>}
        form={<ModalConfirmationForm createTrip={createTrip} setTripCreator={setTripCreator} setCreatorEmail={setCreatorEmail} />}
        />
    )
}