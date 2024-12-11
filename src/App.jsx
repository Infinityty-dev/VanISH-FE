import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Services from './Pages/Services'
import Header from './Component/Header'
import Footer from './Pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from './Pages/Signup/Signup'

function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
            {/* <Home/> */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/SignUp" element={<SignUp />} />


       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App
