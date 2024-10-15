import { useContext } from "react"
import { Context } from "contexts/countersContext"
import GoodButton from "components/GoodButton"
import OkButton from "components/OkButton"
import BadButton from "components/BadButton"
import ResetButton from "components/ResetButton"

function App() {
  const { good, bad, ok } = useContext(Context)
  return (
    <>
      <p>Good: {good}</p>
      <p>Ok: {ok}</p>
      <p>Bad: {bad}</p>
      <GoodButton />
      <OkButton />
      <BadButton />
      <ResetButton />
    </>
  )
}

export default App
