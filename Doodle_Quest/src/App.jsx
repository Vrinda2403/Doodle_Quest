
import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import WelcomePage from './components/WelcomePage'
import Welcome2 from './components/Welcome2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizFlash from "./components/quiz/QuizFlash";
import Quiz from "./components/quiz/Quiz";
import QuizReward from "./components/quiz/QuizReward";
import Child from "./components/dashboards/Child";
import PaperDrawing from "./components/drawingPages/paperDrawing";
import ScreenDrawing from "./components/drawingPages/screenDrawing";
import Storytime  from "./components/story/storytime";


function App() {
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

    <Router>
      <Routes>
        <Route path="/quizflash" element={<QuizFlash />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizreward" element={<QuizReward />} />
        <Route path="/" element={<Child />} />
        <Route path="/paperdrawing" element={<PaperDrawing />} />
        <Route path="/screendrawing" element={<ScreenDrawing />} />
        <Route path="/storytime" element={<Storytime />} />
      </Routes>
    </Router>
  );

}

export default App;
