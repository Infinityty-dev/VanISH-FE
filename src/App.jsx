import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from './Pages/Signup/Signup'
import SignUpPage from './Component/SignUpPage'
import SignInPage from './Component/SignInPage'


function App() {

  return (
    <>
     <BrowserRouter>
         {/* <Header/> */}
         <Routes>
            {/* <Home/> */}
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignUpPage" element={<SignUpPage/>}/>
            <Route path="/SignInPage" element={<SignInPage/>}/>
            
            

            



       </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
