import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface NoActivityCardProps {

    date: string,

}

export function ActivityDate({ date }: NoActivityCardProps) {

    return(
        <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
                Dia { format(date, 'd') }
            </span>
            <span className="text-xs text-zinc-500">
                { format(date, 'EEEE', {locale: ptBR}) }
            </span>
        </div>
    )
}