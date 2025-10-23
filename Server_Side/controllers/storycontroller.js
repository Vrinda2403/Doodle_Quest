import storyimage from "../services/storyimage.js";
import storyContent from "../services/storyservice.js";    


async function generateStory(req, res)
{
const story=await storyContent(req.query.obj)
await storyimage(story);
res.status(200).json({ story });
}
export default generateStory;