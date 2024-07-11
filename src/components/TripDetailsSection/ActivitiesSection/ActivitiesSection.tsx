import { Plus } from "lucide-react"
import { Button } from "../../Global/Button"
import { api } from "../../../lib/axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ActivityCard } from "./ActivityCard/ActivityCard"
import { ActivityDate } from "./ActivityCard/ActivityDate"

interface ActivitiesSectionProps {

    openCreateActivityModal: () => void

}

interface Activities {

    date: string,
    activities: {
        id: string,
        title: string,
        occurs_at: string
    }[]

}

export function ActivitiesSection({ openCreateActivityModal }: ActivitiesSectionProps) {

    const { tripId } = useParams()
    const [activities, setActivities] = useState<Activities[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`)
        .then(response => setActivities(response.data.activities))

    }, [tripId])

    return(
        <section className="flex-1 space-y-6">

                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">
                            Atividades
                        </h2>

                        <Button onClick={openCreateActivityModal}>
                            <Plus className="size-5" />
                            Cadastrar Atividade
                        </Button>

                    </div>

                    <div className="space-y-8">

                       {
                        activities.map(category => {
                            return (

                                <div key={category.date} className="space-y-2.5 ">
                                    <ActivityDate date={category.date} />
                                    {
                                        category.activities.length > 0
                                        ? (
                                            <div>
                                                {
                                                    category.activities.map((activity, index) => {
                                                        return (
                                                            <ActivityCard key={index} title={activity.title} occurs_at={activity.occurs_at} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                        : (
                                            <p className="text-zinc-500 text-sm"> Nenhuma atividade cadastrada nesta data.</p>
                                        )
                                    }
                                </div>
                    
                            )
                        })
                       }

                    </div>

                </section>
    )
}