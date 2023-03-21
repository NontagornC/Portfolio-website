import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About/About"

function App() {
 
  return (
    <div className="bg-[#0F172A] overflow-hidden relative">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
