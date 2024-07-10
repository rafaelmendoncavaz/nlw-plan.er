import { ArrowRight, UserRoundPlus } from "lucide-react"

interface InvitesProps {

  openGuestsModal: () => void,

}

export function InvitesInput({ openGuestsModal }: InvitesProps) {

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

          <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
            <UserRoundPlus className="size-5 text-zinc-400" />
            <span className="text-zinc-400 text-lg flex-1 text-left">
              Quem estará na viagem?
            </span>
          </button>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
            Confirmar Viagem
            <ArrowRight className="size-5" />
          </button>
          
        </div>
    )
}