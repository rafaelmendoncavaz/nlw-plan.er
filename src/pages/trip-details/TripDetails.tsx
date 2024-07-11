import { useState } from "react"
import { TripDetailsHeader } from "../../components/TripDetailsSection/TripDetailsHeader/TripDetailsHeader"
import { ActivitiesSection } from "../../components/TripDetailsSection/ActivitiesSection/ActivitiesSection"
import { AsideSection } from "../../components/TripDetailsSection/AsideSection/AsideSection"
import { ActivitiesModal } from "../../components/TripDetailsSection/ActivitiesSection/ActivitiesModal/ActivitiesModal"
import { LinksModal } from "../../components/TripDetailsSection/AsideSection/Links/LinksModal/LinksModal"
import { DestinationDateModal } from "../../components/TripDetailsSection/TripDetailsHeader/DestinationDateModal/DestinationDateModal"
import { ManageGuestsModal } from "../../components/TripDetailsSection/AsideSection/InvitedList/ManageGuestsModal/ManageGuestsModal"

export function TripDetails() {

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState<boolean>(false)
    const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState<boolean>(false)
    const [isChangeDestinationDateModalOpen, setChangeIsDestinationDateModalOpen] = useState<boolean>(false)
    const [isManageGuestsModalOpen, setIsManageGuestsModalOpen] = useState<boolean>(false)

    const openCreateActivityModal: () => void = () => {

        setIsCreateActivityModalOpen(true)

    }

    const openLinkModal: () => void = () => {

        setIsCreateLinkModalOpen(true)

    }

    const openManageGuestsModal: () => void = () => {

        setIsManageGuestsModalOpen(true)

    }

    const openChangeDestinationDateModal: () => void = () => {

        setChangeIsDestinationDateModalOpen(true)

    }

    const closeModal: () => void = () => {

        setIsCreateActivityModalOpen(false)
        setIsCreateLinkModalOpen(false)
        setChangeIsDestinationDateModalOpen(false)
        setIsManageGuestsModalOpen(false)

    }

    return(
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">

            <TripDetailsHeader openChangeDestinationDateModal={openChangeDestinationDateModal} />

            <main className="flex gap-16 px-4">

                <ActivitiesSection openCreateActivityModal={openCreateActivityModal} />

                <AsideSection openLinkModal={openLinkModal} openManageGuestsModal={openManageGuestsModal} />

            </main>

            {
                isCreateActivityModalOpen && <ActivitiesModal closeModal={closeModal} />
            }

            {
                isCreateLinkModalOpen && <LinksModal closeModal={closeModal} />
            }

            {
                isChangeDestinationDateModalOpen && <DestinationDateModal closeModal={closeModal} />
            }

            {
                isManageGuestsModalOpen && <ManageGuestsModal closeModal={closeModal} />
            }

        </div>
    )
}