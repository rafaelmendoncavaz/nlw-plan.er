import { AtSign, Plus } from "lucide-react"
import { ModalInput } from "../../InputSection/ModalInput/ModalInput"

interface FormProp {

    addEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void,

}

export function ModalForm({ addEmailToInvite }: FormProp) {

    return (
        <form onSubmit={(e) => addEmailToInvite(e)} className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">

            <div className="p-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />
                <ModalInput />
                <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                    Convidar
                    <Plus className="size-5" />
                </button>
            </div>
            
        </form>
    )
}