import { Plus } from "lucide-react";
import { Button } from "../../../Global/Button";
import { LinksCard } from "./LinksCard/LinksCard";

export function Links() {

    return(
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">
                Links Importantes
            </h2>

            <div className="space-y-5">

                <LinksCard />

                <LinksCard />

            </div>

            <Button colorVariant="secondary" sizeVariant="full">
                <Plus className="size-5" />
                Cadastrar Novo Link
            </Button>

        </div>
    )
}