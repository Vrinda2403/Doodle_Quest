import generateQuiz from "../controllers/quizcontroller.js";

import express from "express";

const router = express.Router();

router.get("/quiz", generateQuiz);
export default router;