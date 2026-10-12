import CourseGoal from "../components/CourseGoal.jsx"
import type { CourseGoal as CGoal } from "../src/App.js"
import type {ReactNode} from "react"
import InfoBox from "./InfoBox.js"




interface CourseGoalListProps {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}
export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {

    if (goals.length === 0) {
        return (<InfoBox mode="hint">You have no goals yet. </InfoBox>)
    }


    let warningBox: ReactNode

    if(goals.length >= 4){
        warningBox = <InfoBox mode="warning" severity="medium" >You're collectiong a lot of goals. Don't put too much on your plate</InfoBox>
    }

    return <>
        {warningBox}
        <ul>

            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>

            ))}
        </ul>
    </>
}