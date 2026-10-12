import type { FC, PropsWithChildren, ReactNode } from "react"

interface CourseProps {
    id: number
    title: string
    onDelete: (id:number) => void
}

type CourseGoalPropsChild = PropsWithChildren<CourseProps>


const CourseGoal: FC<CourseGoalPropsChild> = ({ title, id, children, onDelete }) => {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}      </div>
        <button onClick={()=>onDelete(id)}>DELETE</button>
    </article>
}

export default CourseGoal

// export default function CourseGoal({ title, children }: CourseGoalPropsChild) {
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>DELETE</button>
//     </article>
// }