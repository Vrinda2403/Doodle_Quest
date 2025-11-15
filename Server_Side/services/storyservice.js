import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY });



async function storyContent(doodle)
{

try{
const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Generate a 5-line children-friendly,interesting and educational story involving ${doodle}`,
  });


const story = response.text;
    console.log(story);
    return story;
}

 catch (error) {
    console.error("Error generating story:", error);
    // throw new Error("Story generation failed");
    throw error;
  }

}
export default storyContent;