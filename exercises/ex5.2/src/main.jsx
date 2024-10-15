import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLoader from 'components/AppLoader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLoader />
  </StrictMode>,
)
