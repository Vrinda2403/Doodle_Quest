import React from "react";
// Change: Removed `BrowserRouter as Router` from the import
import {  BrowserRouter as Router , Routes, Route } from "react-router-dom";

// Import all your components here
import Login from './components/Login';
import Signup from './components/Signup';
import WelcomePage from './components/WelcomePage';
import QuizFlash from "./components/quiz/QuizFlash";
import Quiz from "./components/quiz/Quiz";
import QuizReward from "./components/quiz/QuizReward";
import Child from "./components/dashboards/Child";
import Parent from "./components/dashboards/Parent";
import Doddledeck from "./components/my doddles/Doddledeck";
import Rewards from "./components/rewards/Rewards";
import PaperDrawing from "./components/drawingPages/paperDrawing";
import ScreenDrawing from "./components/drawingPages/screenDrawing";
import Storytime from "./components/story/storytime";
import ChildRoute from "./components/ChildRoute";
import ParentRoute from "./components/ParentRoute";

function App() {
  // Change: Removed the <Router> wrapper from here
  return (
   
      <Routes>
        <Route path="/quizflash" element={<ChildRoute><QuizFlash /></ChildRoute>} />
        <Route path="/quiz" element={<ChildRoute><Quiz /></ChildRoute>} />
        <Route path="/quizreward" element={<ChildRoute><QuizReward /></ChildRoute>} />
        <Route path="/" element={<ChildRoute><Child /></ChildRoute>} />
        {/* <Route path="/" element={<Child />} /> */}
        <Route path="/parent"  element= {<ParentRoute><Parent/></ParentRoute>}/>
<Route path="/doddledeck" element={<ParentRoute><Doddledeck/></ParentRoute>} />

        {/* <Route path="/parent" element={<Parent />} /> */}
      <Route path="/rewards" element={<ChildRoute><Rewards /></ChildRoute>} />
<Route path="/doddledeck" element={<ChildRoute><Doddledeck/></ChildRoute>} />
 <Route path="/screendrawing" element={<ChildRoute><ScreenDrawing /></ChildRoute>} />
<Route path="/paperdrawing" element={<ChildRoute><PaperDrawing/></ChildRoute>} />
        <Route path="/storytime" element = {<ChildRoute><Storytime/></ChildRoute>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/welcome" element = {<WelcomePage/>}/>
       </Routes>    
  );
}

export default App;