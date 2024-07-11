import { Links } from "./Links/Links"
import { InvitedList } from "./InvitedList/InvitedList"

interface AsideSectionProps {

    openLinkModal: () => void,
    openManageGuestsModal: () => void

}

export function AsideSection({ openLinkModal, openManageGuestsModal }:AsideSectionProps) {

    return(
        <aside className="w-80 space-y-6">

            <Links openLinkModal={openLinkModal} />

            <div className="w-full h-px bg-zinc-800" />

            <InvitedList openManageGuestsModal={openManageGuestsModal} />

        </aside>
    )
}