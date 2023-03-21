import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About/About"
import Project from "./components/Project/Project"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#0F172A] overflow-hidden relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
