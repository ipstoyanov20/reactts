import type { FC, PropsWithChildren, ReactNode } from "react"

interface CourseProps {
    title: string
}

type CourseGoalPropsChild = PropsWithChildren<CourseProps>


const CourseGoal: FC<CourseGoalPropsChild> = ({ title, children }) => {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}      </div>
        <button>DELETE</button>
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