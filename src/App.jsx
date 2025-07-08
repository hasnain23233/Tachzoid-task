import { useState } from 'react'
import './App.css'
import Headers from './components/navbar'
import Home from './components/home'
import Listing from './components/listing'
import FAQ from './components/FAQ'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Headers />
      <Home />
      <Listing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
