import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import timeRoute from "./routes/timeRoute.js";
import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js" ;
import cameraRoutes from "./routes/cameraRoute.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
import doodleRoute from "./routes/doodleRoute.js";



// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/doodlequest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/time", timeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use("/api/doodle", doodleRoute);
app.use("/api",storyroute);
app.use("/api",quizroute);
app.use("/api/camera", cameraRoutes);

const story=`After the rain stopped, Peppa and George ran outside to jump in muddy puddles.
Suddenly, they saw a big, bright rainbow in the sky!
“Let’s find the end of the rainbow!” giggled Peppa.
But Daddy Pig chuckled — “The rainbow’s end is wherever the fun is!`
// audioService(story);
export default app;
