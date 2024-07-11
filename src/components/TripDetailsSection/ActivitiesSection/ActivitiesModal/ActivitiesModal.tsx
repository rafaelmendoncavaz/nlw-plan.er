import { useParams } from "react-router-dom"
import { api } from "../../../../lib/axios"
import { ActivitiesForm } from "../../../Form/ActivitiesForm/ActivitiesForm"
import { Modal } from "../../../Global/Modal"

interface ActivityModalProps {

    closeModal: () => void,
    

}

export function ActivitiesModal({ closeModal }: ActivityModalProps) {

    const { tripId } = useParams()

    async function createActivity (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const activity = data.get("activity")?.toString()
        const when = data.get("dateandtime")?.toString()

        await api.post(`/trips/${tripId}/activities`, {
            title: activity,
            occurs_at: when
        })

        window.document.location.reload()

    }

    return(
       <Modal
       closeModal={closeModal}
       title="Cadastrar Atividade" 
       description="Todos os convidados podem visualizar as atividades."
       form={<ActivitiesForm createActivity={createActivity} />}
       size="large"
       />
    )
}