import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import timerRoutes from "./routes/timerRoute.js";
import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/doodlequest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/timer", timerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


app.use("/api",storyroute);
app.use("/api",quizroute);
export default app;
