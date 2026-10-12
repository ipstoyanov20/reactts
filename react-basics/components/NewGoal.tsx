import { useRef, type SubmitEvent } from "react"

interface NewGoalProps{
    onAddGoal: (goals: string, summamry: string)=>void
}

export default function NewGoal({onAddGoal}: NewGoalProps) {

    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(event: SubmitEvent<HTMLFormElement>){
        event?.preventDefault()
        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value


        event.currentTarget.reset()

        onAddGoal(enteredGoal, enteredSummary)
    }
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id='goal' type="text" name="goal" ref={goal}/>
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" name="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add goal</button>
        </p>
    </form>
}