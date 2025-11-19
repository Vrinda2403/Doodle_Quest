import { GoogleGenerativeAI } from "@google/generative-ai";
import DoodleLog from "../models/DoodleLog.js";

// Safety blocklist (you can expand it)
const unsafeObjects = ["weapon", "gun", "knife", "blood", "bomb"];

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

export async function analyzeDoodle(imageBase64, userId) {
  const prompt = "Recognize this child's doodle and respond with object name only.";

  const image = {
    inlineData: {
      data: imageBase64.split(",")[1], // remove "data:image/png;base64,"
      mimeType: "image/png",
    },
  };

const result = await model.generateContent([prompt, image]);
const label = result.response.text().toLowerCase().trim();

let isSafe = !unsafeObjects.some((word) => label.includes(word));

await DoodleLog.create({ userId, label, confidence: 0.9, isSafe });

return {
     label,
     confidence: 0.9,
     isSafe,
     hint: isSafe ? `Nice! Looks like a ${label}!` : `Let's avoid drawing harmful objects.`,
     alert: !isSafe
  };
}
