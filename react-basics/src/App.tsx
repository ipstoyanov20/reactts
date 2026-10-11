import { useState } from 'react'
import CourseGoal from '../components/CourseGoal'
import Headers from '../components/Header'
import goalsImage from './assets/hero.png'

interface CourseGoal {
  title: string
  description: string
  id: number
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([])
  function addGoalHandler() {
    setGoals(prev => {
      const newGoal: CourseGoal = {
        title: 'Goal Title',
        description: 'Goal Description',
        id: Math.random()
      }
      return [...prev, newGoal]
    })
  }

  return (
    <main>
      <Headers image={{ src: goalsImage, alt: 'I list of goals' }}>
        <h1>Your course goals</h1>
      </Headers>
      <button onClick={addGoalHandler}>Add goal</button>
      <ul>

        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>

        ))}
      </ul>

    </main>
  )
} 