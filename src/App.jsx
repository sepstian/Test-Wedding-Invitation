import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/LandingPage/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </>
  )
}

export default App
