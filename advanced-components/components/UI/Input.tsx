import { type ComponentPropsWithoutRef, forwardRef} from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'>{
    label: string
    id: string
}
const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ id, label, ...props}, ref) {
    return <p>

        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} {...props} ref={ref} />
    </p>
})

export default Input