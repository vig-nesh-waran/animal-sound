import React from 'react'
import './App.css'
import AnimalGallery from './components/AnimalGallery'
import Heading from './components/Heading'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Heading/>
        <AnimalGallery/>
        <Footer/>
      </div>
    </>
  )
}

export default App
