import storyContent from "../services/storyservice.js";    


async function generateStory(req, res)
{
const story=await storyContent(req.query.obj)
res.status(200).json({ story });
}
export default generateStory;