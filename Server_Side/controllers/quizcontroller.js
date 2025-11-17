// import quizContent from "../services/quizservice.js";    
// import audioService from "../services/audioservice.js";

// async function generateQuiz(req, res)
// {
// const quiz=await quizContent(req.query.obj)
// audioService(quiz);
// res.status(200).json({ quiz });
// }
// export default generateQuiz;


import asyncHandler from 'express-async-handler';
import QuizAttempt from '../models/QuizAttempt.model.js';
import quizContent from "../services/quizservice.js";    
import audioService from "../services/audioservice.js";
import * as rewardsService from '../services/rewards.service.js';

async function generateQuiz(req, res)
{
const quiz=await quizContent(req.query.obj,req.query.lang)
audioService(quiz);
res.status(200).json({ quiz });
}

// --- NEW FUNCTION TO SUBMIT QUIZ RESULTS ---
const submitQuiz = asyncHandler(async (req, res) => {
  // 1. Get the data from the frontend
  const { quizName, score, accuracy, totalQuestions, correctAnswers } = req.body;
  
  // 2. Get the child's ID from Clerk
  const childId = req.auth.userId;

  // 3. Create a new document using the model
  const newAttempt = new QuizAttempt({
    childId,
    quizName,
    score,
    accuracy,
    totalQuestions,
    correctAnswers,
  });

  // 4. Save it to the database
  await newAttempt.save();
  
  // (it runs in the background)
  rewardsService.checkQuizAchievements(childId, newAttempt);
  // 5. Send a success response
  res.status(201).json({ message: 'Quiz attempt saved successfully!' });
  
});

// --- UPDATE EXPORTS ---
export { generateQuiz, submitQuiz };