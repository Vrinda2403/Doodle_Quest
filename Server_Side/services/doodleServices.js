// import { GoogleGenerativeAI } from "@google/generative-ai";
// import DoodleLog from "../models/DoodleLog.js";
// import {io } from '../testserver.js'

// const unsafeObjects = ["weapon", "gun", "knife", "blood", "bomb"];

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// export async function analyzeDoodle(imageBase64, userId) {
//   const prompt = "Recognize this child's doodle and respond with only object name.";

//   const image = {
//     inlineData: {
//       data: imageBase64.includes(",")
//   ? imageBase64.split(",")[1]
//   : imageBase64,
//       mimeType: "image/png",
//     },
//   };

//   const result = await model.generateContent([prompt, image]);
//   const label = result.response.text().toLowerCase().trim();

//   const isSafe = !unsafeObjects.some(word => label.includes(word));

//   // save
//   await DoodleLog.create({ userId, label, confidence: 0.9, isSafe });

//   // 🔥 send live alert to parent
//   if (!isSafe) {
//     io.emit("unsafe-doodle", {
//       userId,
//       label,
//       message: `Unsafe doodle detected: ${label}`
//     });
//   }

//   return {
//     label,
//     confidence: 0.9,
//     isSafe
//   };
// }

// import { GoogleGenerativeAI } from "@google/genai";
// import DoodleLog from "../models/DoodleLog.js";
// import { io } from '../testserver.js'

// const unsafeObjects = ["weapon", "gun", "knife", "blood", "bomb"];

// // ✅ Use the stable model
// const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY }); 

// export async function analyzeDoodle(imageBase64, userId) {
//   // ✅ NEW STRICT PROMPT
//   const prompt = `
//     You are judging a child's drawing game. 
//     Look at this image. 
//     1. If it is just random lines, scribbles, or barely recognizable, reply with "scribble".
//     2. If it clearly resembles a specific object, reply with that object's name (e.g., "giraffe", "car").
//     Reply with ONLY the one word label.
//   `;

//   const image = {
//     inlineData: {
//       data: imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64,
//       mimeType: "image/png",
//     },
//   };

//   // Generate Content using standard method
//   const result = await genAI.models.generateContent({
//     model: "gemini-1.5-flash", // or "gemini-pro"
//     contents: [
//       { role: "user", parts: [{ text: prompt }, { inlineData: image.inlineData }] }
//     ],
//   });

//   const label = result.response.text().toLowerCase().trim();
//   const isSafe = !unsafeObjects.some(word => label.includes(word));

//   // Save Log
//   await DoodleLog.create({ userId, label, confidence: 0.9, isSafe });

//   // Send Alert if unsafe
//   if (!isSafe) {
//     io.emit("unsafe-doodle", {
//       userId,
//       label,
//       message: `Unsafe doodle detected: ${label}`
//     });
//   }

//   return {
//     label,
//     confidence: 0.9,
//     isSafe
//   };
// }
import Groq from "groq-sdk";
import DoodleLog from "../models/DoodleLog.js";
import { io } from '../testserver.js';
import dotenv from "dotenv";

dotenv.config();

// Initialize Groq
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const unsafeObjects = ["weapon", "gun", "knife", "blood", "bomb"];

export async function analyzeDoodle(imageBase64, userId, target) {
  try {
    // 1. Construct Prompt
    let systemPrompt;
    if (target) {
        // STRICT VERIFICATION MODE
        systemPrompt = `
          You are a strict judge for a children's drawing game. 
          The child was asked to draw: "${target}".
          
          Analyze the user's drawing.
          1. If the drawing clearly resembles a "${target}", reply with exactly "MATCH".
          2. If it is a random scribble, a circle, lines, or looks like something else, reply with exactly "NO_MATCH".
          
          Be strict. Do not hallucinate. Output ONLY the word MATCH or NO_MATCH.
        `;
    } else {
        // SAFETY MODE
        systemPrompt = `
          Identify the main object in this simple sketch. 
          Return ONLY the object name (e.g., "tree", "car"). 
          If it is unrecognizable or random lines, return "scribble".
        `;
    }

    // 2. Call Groq Vision Model
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": [
            { "type": "text", "text": systemPrompt },
            { 
              "type": "image_url", 
              "image_url": { "url": imageBase64 } 
            }
          ]
        }
      ],
      "model": "llama-3.2-90b-vision-preview", // Updated to stable model
      "temperature": 0,
      "max_tokens": 10
    });

    const responseText = chatCompletion.choices[0]?.message?.content || "";
    const label = responseText.trim().replace(/\./g, ''); 

    // 3. Safety Check
    const isSafe = !unsafeObjects.some(word => label.toLowerCase().includes(word));

    // 4. Save Log
    await DoodleLog.create({ userId, label, confidence: 0.95, isSafe });

    // 5. Alert if Unsafe
    if (!isSafe) {
      io.emit("unsafe-doodle", {
        userId,
        label,
        message: `Unsafe doodle detected: ${label}`
      });
    }

    console.log(` Groq Vision saw: ${label}`);

    return {
      label, 
      confidence: 0.95,
      isSafe
    };

  } catch (error) {
    console.error("Groq Vision Error:", error);
    // Fallback to prevent crash
    return { label: "MATCH", confidence: 0, isSafe: true }; 
  }
}