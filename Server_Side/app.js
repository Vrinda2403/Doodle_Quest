import express from "express";
import cors from "cors";

import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js";
import audioroute from "./routes/audioroute.js";
     
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api",storyroute);
app.use("/api",quizroute);
app.use("/api",audioroute);
export default app;
