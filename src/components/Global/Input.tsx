import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const inputVariants = tv({
    base: "bg-transparent text-lg placeholder-zinc-400 outline-none",

    variants: {
        sizeVariant: {
            default: "flex-1",
            small: "flex-0"
        }
    },
    defaultVariants: {
        sizeVariant: "default"
    }
})

interface InputProps extends ComponentProps<"input">, VariantProps<typeof inputVariants> {
    
}

export function Input({ sizeVariant, ...props }: InputProps) {

    return(
        <input {...props} className={inputVariants({ sizeVariant })} />
    )
}