import type { ComponentPropsWithoutRef } from "react";


type InputProps = {
    label:string
} & ComponentPropsWithoutRef<'input'>;

export default function Input({label, ...props}:InputProps){
    return (
        <div className="input">
            <label htmlFor={props.id}>{label}</label>
            <input {...props} />
        </div>
    )
}





