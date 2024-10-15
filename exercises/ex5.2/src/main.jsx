import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLoader from 'components/AppLoader'
import "./main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLoader />
  </StrictMode>,
)
