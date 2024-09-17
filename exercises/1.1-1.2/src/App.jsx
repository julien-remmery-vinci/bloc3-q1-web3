import Header from "components/Header/Header"
import Content from "components/Content/Content"
import Total from "components/Total/Total"


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

  return (
    <>
      <Header course={course} />
      <Content exercises={exercises}/>
      <Total exercises={exercises[0].exercises + exercises[1].exercises + exercises[2].exercises} />
    </>
  )
}

export default App