import { Link2 } from "lucide-react"

interface LinksProps {

    title: string,
    url: string

}

export function LinksCard({ title, url }: LinksProps) {

    return(
        <div className="flex items-center justify-between">
            <div className="space-y-1.5 gap-4">
                <span className="block font-medium text-zinc-100">
                    { title }
                </span>
                <a href={ url } className="block text-xs text-zinc-400 truncate hover:text-zinc-200" target="_blank" >
                    { url }
                </a>
            </div>
            <Link2 className="text-zinc-400 shrink-0" />
        </div>
    )
}