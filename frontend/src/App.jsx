import './App.css'
import Hero from './components/home/Hero'
import Navbar from './Layout/Navbar'


function App() {

  return (
    <>
    <div className='Container m-auto gap-10'>
    <Navbar/>
    <Hero/>
    </div>
    </>
  )
}

export default App
