// CRITICAL: Import GSAP registration FIRST — before any component imports
import './lib/gsap'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { LenisProvider } from './context/LenisContext'
import { Toaster } from './components/ui/toaster'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LenisProvider>
      <App />
      <Toaster />
    </LenisProvider>
  </React.StrictMode>
)
