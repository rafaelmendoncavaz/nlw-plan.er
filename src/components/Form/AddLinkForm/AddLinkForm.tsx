import { Tag, Link2 } from "lucide-react"
import { Button } from "../../Global/Button"
import { Input } from "../../Global/Input"

interface FormProps {

    createLink: (event: React.FormEvent<HTMLFormElement>) => void

}

export function AddLinkForm({ createLink }: FormProps) {

    return(
        <form onSubmit={createLink} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400 size-5" />
                <Input type="text" name="title" placeholder="Título do Link" />
            </div>

            <div className="flex items-center gap-2">

                <div className="flex-1 h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                    <Link2 className="text-zinc-400 size-5" />
                    <Input placeholder="URL" type="text" name="link" />
                </div>

            </div>
                
            <Button type="submit" sizeVariant="full">
                Salvar link
            </Button>
            
        </form>
    )
}