import express from "express";
import cors from "cors";

import storyroute from "./routes/storyroute.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api",storyroute);

export default app;
