import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ExperienceTrio from './components/ExperienceTrio'
import Narrative from './components/Narrative'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExperienceTrio />
        <Narrative />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
