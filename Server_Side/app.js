import express from "express";
import cors from "cors";

import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js";
import audioService from "./services/audioservice.js";  
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api",storyroute);
app.use("/api",quizroute);
const story=`After the rain stopped, Peppa and George ran outside to jump in muddy puddles.
Suddenly, they saw a big, bright rainbow in the sky!

“Let’s find the end of the rainbow!” giggled Peppa.
But Daddy Pig chuckled — “The rainbow’s end is wherever the fun is!`
audioService(story);
export default app;
