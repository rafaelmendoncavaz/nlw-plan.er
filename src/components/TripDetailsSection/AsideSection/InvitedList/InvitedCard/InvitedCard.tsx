import { CircleDashed } from "lucide-react";

export function InvitedCard() {

    return(
        <div className="flex items-center justify-between">

            <div className="space-y-1.5 gap-4">
                <span className="block font-medium text-zinc-100">
                    Jessica White
                </span>
                <span className="block text-sm text-zinc-400 truncate">
                    jessica.white44@yahoo.com
                </span>
            </div>
            <CircleDashed className="text-zinc-400 shrink-0" />
            
        </div>
    )
}