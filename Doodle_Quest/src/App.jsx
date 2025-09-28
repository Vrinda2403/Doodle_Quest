import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizFlash from "./components/quiz/QuizFlash";
import Quiz from "./components/quiz/Quiz";
import QuizReward from "./components/quiz/QuizReward";
import Child from "./components/dashboards/Child";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quizflash" element={<QuizFlash />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizreward" element={<QuizReward />} />
        <Route path="/" element={<Child />} />
        <Route path="/paperdrawing" element={<PaperDrawing />} />
      </Routes>
    </Router>
  );
}

export default App;
