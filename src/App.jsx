
import Homepage from './pages/Homepage'
import AnimatedCursor from "react-animated-cursor"

function App() {

  return (
    <div className='bg-black h-screen'>
      <AnimatedCursor 
           innerSize={13}
           outerSize={10}
           color='149, 189, 47'
           outerAlpha={0.4}
           innerScale={0.7}
           outerScale={5}/>
      <Homepage/>
    </div>

  )
}

export default App
