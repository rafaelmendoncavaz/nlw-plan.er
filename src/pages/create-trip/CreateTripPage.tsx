import { FormEvent, useState } from "react"
import { LocationDateInput } from "../../components/InputSection/LocationDateInput/LocationDateInput"
import { InvitesInput } from "../../components/InputSection/InvitesInput/InvitesInput"
import { InviteModal } from "../../components/Modal/EmailList/InviteModal"
import { ConfirmationModal } from "../../components/Modal/ConfirmationModal/ConfirmationModal"
import { useNavigate } from "react-router-dom"
import { DateRange } from "react-day-picker"
import { api } from "../../lib/axios"

export function CreateTripPage() {

    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState<boolean>(false)
    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
    const [destination, setDestination] = useState<string>("")
    const [tripCreator,  setTripCreator] = useState<string>("")
    const [creatorEmail,  setcreatorEmail] = useState<string>("")
    const [tripStartEndDate, setTripStartEndDate] = useState<DateRange | undefined>()

    const openInvitesInput: () => void = () => {

        setIsGuestsInputOpen(true)
    
        }
    
    const closeInvitesInput: () => void = () => {

    setIsGuestsInputOpen(false)

    }

    const openGuestsModal: () => void = () => {

    setIsGuestsModalOpen(true)

    }

    const openConfirmTripModal: () => void = () => {

    setIsConfirmTripModalOpen(true)

    }

    const closeModal: () => void = () => {

        setIsGuestsModalOpen(false)
        setIsConfirmTripModalOpen(false)
    
    }

    const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get("email")?.toString()

    if (!email) {
        return
    }

    if (emailsToInvite.includes(email)) {
        alert("Este e-mail já foi inserido!")
        return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()

    }

    const removeEmailFromInvite = (emailToRemove: string) => {

    const newEmailList = emailsToInvite.filter(invited => invited !== emailToRemove)

    setEmailsToInvite(newEmailList)

    }

    async function createTrip (event: FormEvent<HTMLFormElement>) {

        event.preventDefault()

        if (!destination) {
            alert("Preencha o destino!")
            return
        }
    
        if (!tripStartEndDate?.from || !tripStartEndDate?.to) {
            alert("Preencha a data!")
            return
        }
    
        if (emailsToInvite.length === 0) {
            alert("Convide ao menos uma pessoa!")
            return
        }
    
        if (!tripCreator || !creatorEmail) {
            alert("Preencha os seus dados!")
            return
        }
    
        const response = await api.post("/trips", {
            destination,
            starts_at: tripStartEndDate.from,
            ends_at: tripStartEndDate.to,
            emails_to_invite: emailsToInvite,
            owner_name: tripCreator,
            owner_email: creatorEmail
        })
    
        const { tripId } = response.data

        navigate(`/trips/${tripId}`)

    }

    return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">

        <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-3">

            <img src="/logo.svg" alt=" plann.er" />
            <p className="text-zinc-300 text-lg">
                Convide seus amigos e planeje uma viagem!
            </p>

        </div>

        <div className="space-y-4">

            <LocationDateInput 
            openInvitesInput={openInvitesInput} 
            isGuestsInputOpen={isGuestsInputOpen} 
            closeInvitesInput={closeInvitesInput} 
            setDestination={setDestination}
            setTripStartEndDate={setTripStartEndDate}
            tripStartEndDate={tripStartEndDate}
            />
            {
            isGuestsInputOpen && 
            <InvitesInput 
            openGuestsModal={openGuestsModal}
            openConfirmTripModal={openConfirmTripModal} 
            emailsToInvite={emailsToInvite}
            />
            }

        </div>

        <p className="text-sm text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
            com nossos <a className="text-zinc-500 underline" href="#">termos de uso</a> e <a className="text-zinc-500 underline" href="#">políticas de privacidade</a>.
        </p>

        </div>

        {
        isGuestsModalOpen && 
        <InviteModal 
        closeModal={closeModal} 
        emailsToInvite={emailsToInvite} 
        addEmailToInvite={addNewEmailToInvite} 
        removeEmailFromInvite={removeEmailFromInvite} 
        />
        }

        {
        isConfirmTripModalOpen &&
        <ConfirmationModal 
        closeModal={closeModal}
        createTrip={createTrip}
        setTripCreator={setTripCreator}
        setCreatorEmail={setcreatorEmail}
        />
        }

    </div>
    )
}
