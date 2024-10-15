import { OpinionsProviderWrapper } from "contexts/opinionsContext";
import { ThemeProviderWrapper } from "contexts/themeContext";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <OpinionsProviderWrapper >
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </OpinionsProviderWrapper >
  )
}

export default AppLoader;