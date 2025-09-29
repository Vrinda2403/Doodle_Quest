import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizFlash from "./components/quiz/QuizFlash";
import Quiz from "./components/quiz/Quiz";
import QuizReward from "./components/quiz/QuizReward";
import Child from "./components/dashboards/Child";
import Parent from "./components/dashboards/Parent";
import Doddledeck from "./components/my doddles/Doddledeck";
import Rewards from "./components/rewards/Rewards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quizflash" element={<QuizFlash />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizreward" element={<QuizReward />} />
        <Route path="/" element={<Child />} />
        <Route path="/parent"  element= {<Parent/>}/>
        <Route path="/doddledeck" element ={<Doddledeck/>}/>
        <Route path="/rewards" element = {<Rewards/>}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;
