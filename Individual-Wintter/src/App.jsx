import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Rotas } from './routes/Routes'

function App() {
  

  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
