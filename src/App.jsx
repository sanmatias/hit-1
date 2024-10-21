import { useState } from 'react'
import './App.css'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'
import Home from './home/home'
function App() {

  return (
    <>

      <div className='headIndex'>
      <Navbar />
      </div>
      
      <div>
        <Home />
      </div>

     
     
      <div>
        <Footer />
      </div>
    </>
    
  )
}

export default App
