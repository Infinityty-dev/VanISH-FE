import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from './Pages/Signup/Signup'

function App() {

  return (
    <>
     <BrowserRouter>
         {/* <Header/> */}
         <Routes>
            {/* <Home/> */}
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />


       </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
