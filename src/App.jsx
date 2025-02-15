import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Loader from './components/Loader'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Loader/>
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
