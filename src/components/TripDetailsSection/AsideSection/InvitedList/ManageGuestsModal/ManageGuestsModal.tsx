import { useParams } from "react-router-dom"
import { api } from "../../../../../lib/axios"
import { Modal } from "../../../../Global/Modal"
import { useState } from "react"
import { InviteGuestForm } from "../../../../Form/InviteGuestForm/InviteGuestForm"

interface ManageGuestsModalProps {

    closeModal: () => void

}

export function ManageGuestsModal({ closeModal }: ManageGuestsModalProps) {

    const [guestEmail, setGuestEmail] = useState<string>("")

    const { tripId } = useParams()

    async function inviteGuest (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault()

        await api.post(`/trips/${tripId}/invites`, {
            email: guestEmail
        })

        window.document.location.reload()

    }

    return(
        <Modal 
        closeModal={closeModal}
        title="Convidar viajante" 
        description="O convidado irá receber um link em seu e-mail." 
        size="large"
        form={<InviteGuestForm inviteGuest={inviteGuest} setGuestEmail={setGuestEmail} />}
        />
    )
}