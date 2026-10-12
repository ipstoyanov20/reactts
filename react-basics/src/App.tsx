import { useState } from 'react'
import CourseGoalList from '../components/CourseGoalList'
import Headers from '../components/Header'
import NewGoal from '../components/NewGoal'
import goalsImage from './assets/hero.png'

export interface CourseGoal {
  title: string
  description: string
  id: number
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([])
  function addGoalHandler(goal: string, summary: string) {
    setGoals(prev => {
      const newGoal: CourseGoal = {
        title: goal,
        description: summary,
        id: Math.random()
      }
      return [...prev, newGoal]
    })
  }

  function deleteGoalHandler(id:number){
    setGoals((prev)=> prev.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Headers image={{ src: goalsImage, alt: 'I list of goals' }}>
        <h1>Your course goals</h1>
      </Headers>
      <NewGoal onAddGoal={addGoalHandler} />
      {/* <button onClick={addGoalHandler}>Add goal</button> */}
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler}/>

    </main>
  )
} 