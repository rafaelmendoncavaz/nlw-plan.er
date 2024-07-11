import { Plus } from "lucide-react"
import { Button } from "../../../Global/Button"
import { LinksCard } from "./LinksCard/LinksCard"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../../lib/axios"

interface Links {

    id: string,
    title: string,
    url: string

}

interface LinksProps {

    openLinkModal: () => void

}

export function Links({ openLinkModal }:LinksProps) {

    const { tripId } = useParams()
    const [links, setLinks] = useState<Links[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/links`)
        .then(response => setLinks(response.data.links))

    }, [tripId])

    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">
                Links Importantes
            </h2>

            <div className="space-y-5">

                {
                    links.map(link => {
                        return <LinksCard key={link.id} title={link.title} url={link.url} />
                    })
                }

            </div>

            <Button onClick={openLinkModal} colorVariant="secondary" sizeVariant="full">
                <Plus className="size-5" />
                Cadastrar Novo Link
            </Button>

        </div>
    )
}