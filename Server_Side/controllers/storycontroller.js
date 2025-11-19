import storyimage from "../services/storyimage.js";
import storyContent from "../services/storyservice.js";    
import audioService from "../services/audioservice.js";
async function generateStory(req, res)
{
// const story=await storyContent(req.query.obj,req.query.lang)
// await audioService(story);
const story=`The little bird sang a joyful tune
A sleepy fox dreamt beneath the moon.
The wind whispered secrets through the trees,
As fireflies danced on the evening breeze.`
const img=await storyimage(story);
res.status(200).json({
      story: story,
      imageurl: img,   // matches the key used in frontend
    });
// return({story:story ,imgurl:img});
// res.status(200).json({story:story ,imgurl:img});
}
export default generateStory;