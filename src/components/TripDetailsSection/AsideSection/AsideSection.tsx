import { Links } from "./Links/Links"
import { InvitedList } from "./InvitedList/InvitedList"

export function AsideSection() {

    return(
        <aside className="w-80 space-y-6">

            <Links />

            <div className="w-full h-px bg-zinc-800" />

            <InvitedList />

        </aside>
    )
}