import CustomCursor from './components/CustomCursor'
import Navber from './components/Navber'
import Home from './pages/Home'

function App() {
  return (
    <div className=' relative gradient text-white '>
      <CustomCursor/>
      {/* <ParticlesBg/> */}
    <Navber/>
    <Home/>
    </div>
  )
}

export default App