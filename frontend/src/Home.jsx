
import About from './components/home/About'
import Hero from './components/home/Hero'
import Skills from './components/home/Skills'
import Navbar from './Layout/Navbar'
import { Analytics } from "@vercel/analytics/react"
import Project from './components/home/Project'
import Contact from './components/contact/Contact'
import Experience from './components/home/Experience'
import Footer from './Layout/Footer'
import StickyButton from './components/home/SticyButton'

const Home = () => {
  return (
    <>
      <div className='m-auto'>
        <Navbar />
        <StickyButton />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </>
  )
}

export default Home;