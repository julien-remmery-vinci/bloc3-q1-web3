import AddOpinion from "../AddOpinion"
import Footer from "../Footer/Footer"
import OpinionsList from "../OpinionsList"
import { ThemeContext } from "contexts/themeContext"
import { useContext } from "react"
import "./App.css"


function App() {
  const { getCurrentThemeDetails } = useContext(ThemeContext)
  const theme = getCurrentThemeDetails()
  
  return (
    <div style={theme}>
      <AddOpinion />
      <OpinionsList />
      <Footer />
    </div>
  )
}

export default App
