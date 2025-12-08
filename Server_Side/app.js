// app.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import timeRoute from "./routes/timeRoute.js";
import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js";
import cameraRoutes from "./routes/cameraRoute.js";
import storageRoutes from "./routes/storage.routes.js";
import rewardsRoutes from "./routes/rewards.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import taskRoutes from "./routes/task.routes.js";
import doodleRoute from "./routes/doodleRoute.js";
import modeRoutes  from  "./routes/modeRoute.js";
import { childAuth } from "./middleware/childAuth.js";
import registerFamily from "./routes/registerFamily.js";
import findParent from "./routes/findParent.js";
import childLogin from "./routes/childLogin.js";
import { protect } from "./middleware/clerk.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register-family", registerFamily); // POST - called after Clerk verify
app.use("/api/find-parent", findParent);         // POST - parentId -> parentEmail
app.use("/api/child-login", childLogin);   

// MONGO
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ROUTES
app.use("/api/time", timeRoute);
app.use("/api/story", storyroute);
app.use("/api/quiz", quizroute);
app.use("/api/storage", storageRoutes);
app.use("/api/rewards", rewardsRoutes);
app.use("/api/doodle", doodleRoute);
app.use("/api/camera", cameraRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/mode", modeRoutes);
// Example protected parent-only route (server-side)
app.get("/api/parent-data", protect, (req, res) => {
  // req will contain Clerk session info and user id (Clerk middleware)
  res.json({ message: "Parent-only endpoint" });
});


app.get("/api/child/profile", childAuth, (req, res) => {
  // req.child contains { childId, parentClerkId, role }
  res.json({ child: req.child });
});

const story=`After the rain stopped, Peppa and George ran outside to jump in muddy puddles.
Suddenly, they saw a big, bright rainbow in the sky!
“Let’s find the end of the rainbow!” giggled Peppa.
But Daddy Pig chuckled — “The rainbow’s end is wherever the fun is!`

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

export default app;
