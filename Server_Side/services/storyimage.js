import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

async function storyimage(story) {

  const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY });

  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: `Create a bright, colorful, storybook-style illustration for the following children's story:
          "${story}"
          
          The illustration should be friendly, imaginative, safe for children, and match the story's main scene. 
          Use a soft, cartoon-like art style.`,
    config: {
      numberOfImages: 1,
    },
  });

  let idx = 1;
  for (const generatedImage of response.generatedImages) {
    let imgBytes = generatedImage.image.imageBytes;
    const buffer = Buffer.from(imgBytes, "base64");
    fs.writeFileSync(`imagen-${idx}.png`, buffer);
    idx++;
  }
}

export default storyimage;