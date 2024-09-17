const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{`${props.part} ${props.exercises}`}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.exercises[0].part} exercises={props.exercises[0].exercises} />
      <Part part={props.exercises[1].part} exercises={props.exercises[1].exercises} />
      <Part part={props.exercises[2].part} exercises={props.exercises[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>{`Number of exercises ${props.exercises}`}</p>
  )
}

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