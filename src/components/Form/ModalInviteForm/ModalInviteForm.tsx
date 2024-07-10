import { AtSign, Plus } from "lucide-react"
import { Button } from "../../Global/Button"
import { Input } from "../../Global/Input"

interface FormProp {

    addEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void,

}

export function ModalInviteForm({ addEmailToInvite }: FormProp) {

    return (
        <form onSubmit={(e) => addEmailToInvite(e)} className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">

            <div className="p-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />
                <Input placeholder="Digite o email do convidado" type="email" name="email" />
                <Button type="submit">
                    Convidar
                    <Plus className="size-5" />
                </Button>
            </div>
            
        </form>
    )
}