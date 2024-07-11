import { useState } from "react"
import { TripDetailsHeader } from "../../components/TripDetailsSection/TripDetailsHeader/TripDetailsHeader"
import { ActivitiesSection } from "../../components/TripDetailsSection/ActivitiesSection/ActivitiesSection"
import { AsideSection } from "../../components/TripDetailsSection/AsideSection/AsideSection"
import { ActivitiesModal } from "../../components/TripDetailsSection/ActivitiesSection/ActivitiesModal/ActivitiesModal"

export function TripDetails() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState<boolean>(false)

    const openCreateActivityModal: () => void = () => {

        setIsCreateActivityModalOpen(true)

    }

    const closeModal: () => void = () => {

        setIsCreateActivityModalOpen(false)

    }

    return(
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <TripDetailsHeader />

            <main className="flex gap-16 px-4">

                <ActivitiesSection openCreateActivityModal={openCreateActivityModal} />

                <AsideSection />

            </main>

            {
            isCreateActivityModalOpen && <ActivitiesModal closeModal={closeModal} />
            }

        </div>
    )
}