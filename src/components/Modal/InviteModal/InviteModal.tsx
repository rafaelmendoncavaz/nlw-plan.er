import { X } from "lucide-react"
import { EmailCard } from "./EmailCard/EmailCard"
import { ModalInviteForm } from "../../Form/ModalInviteForm/ModalInviteForm"

interface LocationModalProps {

    closeGuestsModal: () => void,
    emailsToInvite: string[],
    addEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void,
    removeEmailFromInvite: (emailToRemove: string) => void
  
  }

export function InviteModal({ closeGuestsModal, emailsToInvite, addEmailToInvite, removeEmailFromInvite }: LocationModalProps) {

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

                <div className="space-y-2">

                    <div className="flex items-center justify-between">

                        <h2 className="text-lg font-semibold">
                            Selecionar Convidados
                        </h2>
                        <button onClick={closeGuestsModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>

                    </div>

                    <p className="text-sm text-zinc-400">
                        Os convidados irão receber e-mails para confirmar a participação na viagem.
                    </p>

                </div>

                <div className="flex flex-wrap gap-2">

                    {
                        emailsToInvite.map((email, index) => {

                            return <EmailCard key={index} email={email} removeEmailFromInvite={removeEmailFromInvite} />

                        })
                    }
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <ModalInviteForm addEmailToInvite={addEmailToInvite} />

            </div>
        </div>
    )
}