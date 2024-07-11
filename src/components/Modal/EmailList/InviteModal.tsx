import { ModalInviteForm } from "../../Form/ModalInviteForm/ModalInviteForm"
import { Modal } from "../../Global/Modal"
import { EmailList } from "./EmailList"

interface LocationModalProps {

    closeModal: () => void,
    emailsToInvite: string[],
    addEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void,
    removeEmailFromInvite: (emailToRemove: string) => void
  
  }

export function InviteModal({ closeModal, emailsToInvite, addEmailToInvite, removeEmailFromInvite }: LocationModalProps) {

    return(
        <Modal
        closeModal={closeModal} 
        title="Selecionar Convidados" 
        description="Os convidados irão receber e-mails para confirmar a participação na viagem."
        form={<ModalInviteForm addEmailToInvite={addEmailToInvite} />}
        >

            <EmailList emailsToInvite={emailsToInvite} removeEmailFromInvite={removeEmailFromInvite} />

        </Modal>
    )
}