import Header from "components/Header/Header"
import Content from "components/Content/Content"
import Total from "components/Total/Total"

import './App.css'


const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  const totalExercises = exercises.reduce((sum, exercise) => sum + exercise.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises}/>
      <Total exercises={totalExercises} />
    </div>
  )
}

export default App