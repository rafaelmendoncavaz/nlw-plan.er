import { EmailCard } from "./EmailCard/EmailCard"

interface EmailListProps {

    emailsToInvite: string[],
    removeEmailFromInvite: (emailToRemove: string) => void

}

export function EmailList({ emailsToInvite, removeEmailFromInvite }:EmailListProps) {

    return(
        <div className="flex flex-wrap gap-2">

                    {
                        emailsToInvite.map((email, index) => {

                            return <EmailCard key={index} email={email} removeEmailFromInvite={removeEmailFromInvite} />

                        })
                    }
                </div>
    )
}