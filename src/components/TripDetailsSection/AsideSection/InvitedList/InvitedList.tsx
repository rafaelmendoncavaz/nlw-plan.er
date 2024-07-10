import { UserCog } from "lucide-react";
import { Button } from "../../../Global/Button";
import { InvitedCard } from "./InvitedCard/InvitedCard";

export function InvitedList() {

    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">
                Convidados
            </h2>

            <div className="space-y-5">

                <InvitedCard />

                <InvitedCard />

            </div>

            <Button colorVariant="secondary" sizeVariant="full">
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>

        </div>
    )
}