import { Mail, User } from "lucide-react"
import { Input } from "../../Global/Input"
import { Button } from "../../Global/Button"

interface ConfirmationModalFormProp {

    createTrip: (event: React.FormEvent<HTMLFormElement>) => void

}

export function ModalConfirmationForm ({ createTrip }: ConfirmationModalFormProp) {

    return (
        <form onSubmit={createTrip} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <Input placeholder="Seu nome completo" type="text" name="yourname" />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <Mail className="text-zinc-400 size-5" />
                <Input placeholder="Seu e-mail pessoal" type="email" name="email" />
            </div>
             <Button type="submit" sizeVariant="full">
                Confirmar criação da viagem
            </Button>   
            
        </form>
    )
}