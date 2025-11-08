import quizContent from "../services/quizservice.js";    


async function generateQuiz(req, res)
{
const quiz=await quizContent(req.query.obj)

res.status(200).json({ quiz });
}
export default generateQuiz;