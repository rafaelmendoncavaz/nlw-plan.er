import { X } from "lucide-react"
import { ModalConfirmationForm } from "../../Form/ModalConfirmationForm/ModalConfirmationForm"

interface ConfirmationModalProps {

    closeConfirmTripModal: () => void,
    createTrip: (event: React.FormEvent<HTMLFormElement>) => void

}

export function ConfirmationModal({ closeConfirmTripModal, createTrip }: ConfirmationModalProps) {

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

                <div className="space-y-2">

                    <div className="flex items-center justify-between">

                        <h2 className="text-lg font-semibold">
                            Confirmar criação de viagem
                        </h2>
                        <button onClick={closeConfirmTripModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>

                    </div>

                    <p className="text-sm text-zinc-400">
                        Para concluir a criação da viagem para <span className="text-zinc-100 font-semibold">Florianópolis, Brasil</span> nas datas entre <span className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo.
                    </p>

                </div>

                <ModalConfirmationForm createTrip={createTrip} />

            </div>
        </div>
    )
}