import { Tag, Calendar } from "lucide-react"
import { Button } from "../../Global/Button"
import { Input } from "../../Global/Input"

interface FormProps {

    createActivity: (event: React.FormEvent<HTMLFormElement>) => void

}

export function ActivitiesForm({ createActivity }: FormProps) {

    return(
        <form onSubmit={createActivity} className="space-y-3">

            <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400 size-5" />
                <Input type="text" name="activity" placeholder="Qual a atividade?" />
            </div>

            <div className="flex items-center gap-2">

                <div className="flex-1 h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
                    <Calendar className="text-zinc-400 size-5" />
                    <Input placeholder="Data e horário da atividade" type="datetime-local" name="dateandtime" />
                </div>

            </div>
                
            <Button type="submit" sizeVariant="full">
                Salvar Atividade
            </Button>
            
        </form>
    )
}