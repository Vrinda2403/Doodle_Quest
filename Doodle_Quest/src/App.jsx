import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import WelcomePage from './components/WelcomePage'
import Welcome2 from './components/Welcome2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    {/* <Login/>
    <Signup/>
    <WelcomePage/>
    <Welcome2/> */}
    
    
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={< Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/dashboard" element={<Welcome2 />} />
        </Routes>
      </div>
    
 

    
  </>
  )
}

export default App