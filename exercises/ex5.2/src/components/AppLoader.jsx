import { ProviderWrapper } from "contexts/opinionsContext";
import App from "components/App.jsx";

const AppLoader= () => {
  return (
    <ProviderWrapper >
      <App />
    </ProviderWrapper >
  )
}

export default AppLoader;