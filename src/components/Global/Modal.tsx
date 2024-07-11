import { X } from "lucide-react"
import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const modalVariants = tv({
    base: "rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5",

    variants: {
        size: {
            large: "w-[640px]",
            medium: "w-[320px]",
            none: ""
        }
    },
    defaultVariants: {
        size: "large"
    }
})

interface ModalProps extends VariantProps<typeof modalVariants> {

    children?: ReactNode,
    title?: string,
    description?: ReactNode,
    closeModal: () => void,
    form?: ReactNode

}

export function Modal({ children, title, description, form, size, closeModal }: ModalProps) {

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className={`${modalVariants({ size })} rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5`}>

                <div className="space-y-2">

                    <div className="flex items-center justify-between">

                        <h2 className="text-lg font-semibold">
                            { title }
                        </h2>
                        <button onClick={closeModal}>
                            <X className="size-5 text-zinc-400" />
                        </button>

                    </div>

                    <p className="text-sm text-zinc-400">
                        { description }
                    </p>

                </div>

                { children }

                <div className="w-full h-px bg-zinc-800" />

                { form }

            </div>
        </div>
    )
}