import './App.css'
import About from './components/home/About'
import Hero from './components/home/Hero'
import Skills from './components/home/Skills'
import Navbar from './Layout/Navbar'

import Project from './components/home/Project'
import Contact from './components/home/Contact'
import Experience from './components/home/Experience'
import Footer from './Layout/Footer'
import StickyButton from './components/home/SticyButton'


function App() {

  return (
    <>
    <div className='Container m-auto gap-10'>
    <Navbar/>
    <StickyButton/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
