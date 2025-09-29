import React from "react";
// Change: Removed `BrowserRouter as Router` from the import
import { Routes, Route } from "react-router-dom";

// Import all your components here
import Login from './components/Login';
import Signup from './components/Signup';
import WelcomePage from './components/WelcomePage';
import Welcome2 from './components/Welcome2';
import QuizFlash from "./components/quiz/QuizFlash";
import Quiz from "./components/quiz/Quiz";
import QuizReward from "./components/quiz/QuizReward";
import Child from "./components/dashboards/Child";
import PaperDrawing from "./components/drawingPages/paperDrawing";
import ScreenDrawing from "./components/drawingPages/screenDrawing";
import Storytime from "./components/story/storytime";

function App() {
  // Change: Removed the <Router> wrapper from here
  return (
    <Routes>
      <Route path="/" element={<Child />} />
      
      {/* Authentication and Welcome Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/welcome2" element={<Welcome2 />} />
      
      {/* Main Application Routes */}
      <Route path="/dashboard" element={<Child />} />
      <Route path="/paperdrawing" element={<PaperDrawing />} />
      <Route path="/screendrawing" element={<ScreenDrawing />} />
      <Route path="/storytime" element={<Storytime />} />
      
      {/* Quiz Routes */}
      <Route path="/quizflash" element={<QuizFlash />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quizreward" element={<QuizReward />} />
    </Routes>
  );
}

export default App;