import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home/index.jsx'
import { GlobalStyle } from './styles/global.style.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle>
      <Home />
    </GlobalStyle>
  </React.StrictMode>
)
