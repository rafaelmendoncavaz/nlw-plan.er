import { UserCog } from "lucide-react"
import { Button } from "../../../Global/Button"
import { InvitedCard } from "./InvitedCard/InvitedCard"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"

interface Guests {

    id: string,
    name: string | null,
    email: string,
    is_confirmed: boolean

}

export function InvitedList() {

    const { tripId } = useParams()
    const [guests, setGuests] = useState<Guests[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`)
        .then(response => setGuests(response.data.participants))

    }, [tripId])

    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">
                Convidados
            </h2>

            <div className="space-y-5">

                {
                    guests.map((guest, index) => {
                        return <InvitedCard key={guest.id} name={guest.name ?? `Convidado ${index}`} email={guest.email} confirmed={guest.is_confirmed} />
                    })
                }

            </div>

            <Button colorVariant="secondary" sizeVariant="full">
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>

        </div>
    )
}