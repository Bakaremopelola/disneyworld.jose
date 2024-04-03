import { useState } from 'react'

import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Display from './Components/Display'
import Also from './Components/Also'
import More from './Components/More'
import Card from './Components/Card'

function App() {
 

  return (
    <>
      

      <div>
        
         <NavBar/>
         <Display/>
        <Card/>
         {/* <Also/> */}
         {/* <More/>  */}
        {/* <Footer/>  */}
      </div>
    </>
  )
}

export default App
