import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

import "./assets/lib/i18n.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
