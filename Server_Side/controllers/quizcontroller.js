import quizContent from "../services/quizservice.js";    
import audioService from "../services/audioservice.js";

async function generateQuiz(req, res)
{
const quiz=await quizContent(req.query.obj)
audioService(quiz);
res.status(200).json({ quiz });
}
export default generateQuiz;