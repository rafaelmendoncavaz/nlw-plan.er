import { format } from "date-fns"
import { CircleCheck } from "lucide-react"

interface ActivityCardProps {

    title: string,
    occurs_at: string

}

export function ActivityCard({ title, occurs_at }: ActivityCardProps) {

    return(
        <div className="space-y-2.5">
            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300" />
                <span className="text-zinc-100">
                    { title }
                </span>
                <span className="text-zinc-400 ml-auto">
                    {format(occurs_at, 'HH:mm')}h
                </span>
            </div>
        </div>
    )
}