import './App.css'
import About from './components/home/About'
import Hero from './components/home/Hero'
import Skills from './components/home/Skills'
import Navbar from './Layout/Navbar'


function App() {

  return (
    <>
    <div className='Container m-auto gap-10'>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    </div>
    </>
  );
}

export default App;
