import { X } from "lucide-react"

interface EmailProps {

    email: string,
    removeEmailFromInvite: (emailToRemove: string) => void
  
  }

export function EmailCard({ email, removeEmailFromInvite }: EmailProps) {

    return (
        <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">

            <span className="text-zinc-300">
                {email}
            </span>
            <button onClick={() => removeEmailFromInvite(email)} type="button">
                <X className="size-4 text-zinc-400" />
            </button>
            
        </div>
    )
}