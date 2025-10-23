import OpenAI from "openai";

import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});


async function storyContent(doodle)
{

try{
const response = await openai.responses.create({
 
   model: "gpt-4.1",
    input: `Tell me a 3 sentence educational,innovative,interesting ,meaningful story involving a ${doodle}.`
  
});

response.then((result) => console.log(result.output[0].content[0].text));
}

 catch (error) {
    console.error("Error generating story:", error);
    throw new Error("Story generation failed");
  }

}
export default storyContent;