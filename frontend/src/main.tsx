import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './assets/theme/theme.css'
import './assets/fonts/fonts.css'

import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
