import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router.jsx'
import './index.css'
import AuthContextProvider from './contexts/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </StrictMode>,
)
