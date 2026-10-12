import { forwardRef, useImperativeHandle, useRef, type ComponentPropsWithoutRef, type SubmitEvent } from "react"


export type FormHandle = {
    clear:()=>void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    OnSave: (value: unknown) => void
}


const Form= forwardRef<FormHandle, FormProps>(function Form({OnSave, children, ...othersProps}, ref) {


    const form = useRef<HTMLFormElement>(null)
    useImperativeHandle(ref, () => {
        return{
            clear(){
                console.log('CLEARING')
                form.current?.reset()
            }
        }
    })
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        OnSave(data)
        form.current?.clear()
    }
    return <form onSubmit={handleSubmit} {...othersProps}>
        {children}
    </form>
})

export default Form