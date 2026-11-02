import React from 'react'
import Navber from './components/Navber'
import ParticlesBg from './components/ParticlesBg'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'

function App() {
  return (
    <div className=' relative gradient text-white '>
      <CustomCursor/>
      <ParticlesBg/>
    <Navber/>
    <Home/>
    </div>
  )
}

export default App