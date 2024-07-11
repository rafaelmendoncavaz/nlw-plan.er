import { Mail, User } from "lucide-react"
import { Input } from "../../Global/Input"
import { Button } from "../../Global/Button"

interface ConfirmationModalFormProp {

    createTrip: (event: React.FormEvent<HTMLFormElement>) => void,
    setTripCreator: (tripCreator: string) => void,
    setCreatorEmail: (creatorEmail: string) => void

}

export function ModalConfirmationForm ({ createTrip, setTripCreator, setCreatorEmail }: ConfirmationModalFormProp) {

    return (
        <form onSubmit={createTrip} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />
                <Input 
                placeholder="Seu nome completo" 
                type="text" 
                name="yourname"
                onChange={(e) => setTripCreator(e.target.value)}
                 />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <Mail className="text-zinc-400 size-5" />
                <Input 
                placeholder="Seu e-mail pessoal" 
                type="email" 
                name="email"
                onChange={(e) => setCreatorEmail(e.target.value)} 
                />
            </div>
             <Button type="submit" sizeVariant="full">
                Confirmar criação da viagem
            </Button>   
            
        </form>
    )
}