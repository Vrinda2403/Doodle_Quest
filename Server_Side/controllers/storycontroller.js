import storyimage from "../services/storyimage.js";
import storyContent from "../services/storyservice.js";    
import audioService from "../services/audioservice.js";

async function generateStory(req, res)
{
const story=await storyContent(req.query.obj,req.query.lang)
// await audioService(story);
await storyimage(story);
res.status(200).json({ story });
}
export default generateStory;