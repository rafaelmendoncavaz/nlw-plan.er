import { useParams } from "react-router-dom"
import { api } from "../../../../../lib/axios"
import { AddLinkForm } from "../../../../Form/AddLinkForm/AddLinkForm"
import { Modal } from "../../../../Global/Modal"

interface LinksModalProps {

    closeModal: () => void

}

export function LinksModal({ closeModal }: LinksModalProps) {

    const { tripId } = useParams()

    async function createLink (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const title = data.get("title")?.toString()
        const url = data.get("link")?.toString()

        await api.post(`/trips/${tripId}/links`, {
            title,
            url
        })

        window.document.location.reload()

    }

    return(
        <Modal 
        closeModal={closeModal}
        title="Cadastrar Link" 
        description="Todos os convidados podem visualizar os links importantes." 
        size="large"
        form={<AddLinkForm createLink={createLink} />}
        />
    )
}