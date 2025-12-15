import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* REMOVE <BrowserRouter> FROM HERE. App.jsx already handles it. */}
    <App />
  </React.StrictMode>,
)