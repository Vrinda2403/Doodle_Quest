// import generateQuiz from "../controllers/quizcontroller.js";

// import express from "express";

// const router = express.Router();

// router.get("/quiz", generateQuiz);
// export default router;

// In routes/quizroute.js
import { generateQuiz, submitQuiz } from "../controllers/quizcontroller.js";
import { childAuth } from "../middleware/childAuth.js";
import express from "express";

const router = express.Router();

// This route gets the questions
router.get("/quiz",protect, generateQuiz);

// This route saves the score. It is protected.

router.post("/submit", childAuth, submitQuiz);


export default router;