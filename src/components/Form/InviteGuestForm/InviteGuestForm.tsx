import { Mail } from "lucide-react"
import { Button } from "../../Global/Button"
import { Input } from "../../Global/Input"

interface FormProps {

    inviteGuest: (event: React.FormEvent<HTMLFormElement>) => void,
    setGuestEmail: (guestEmail: string) => void

}

export function InviteGuestForm({ inviteGuest, setGuestEmail }: FormProps) {

    return(
        <form onSubmit={inviteGuest} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
                <Input 
                placeholder="Seu e-mail pessoal" 
                type="email" 
                name="email"
                onChange={(e) => setGuestEmail(e.target.value)} 
                />
            </div>

            <Button type="submit" sizeVariant="full">
                Enviar convite
            </Button>
            
        </form>
    )
}