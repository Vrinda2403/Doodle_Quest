// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // --- ROUTES ---
// import timeRoute from "./routes/timeRoute.js";
// import storyroute from "./routes/storyroute.js";
// import quizroute from "./routes/quizroute.js";
// import audioroute from "./routes/audioroute.js";
     
// // import quizroute from "./routes/quizroute.js" ;

// dotenv.config();

// const app = express();

// // --- MIDDLEWARE ---
// app.use(cors());
// app.use(express.json()); // For parsing application/json
// app.use(express.urlencoded({ extended: true })); // For parsing multipart/form-data

// // --- CONNECT TO MONGODB ---
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/doodlequest";

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // --- API ROUTES ---
// // We group all routes together
// app.use("/api/time", timeRoute);
// app.use("/api/story", storyroute);
// app.use("/api/quiz", quizroute);
// app.use('/api/storage', storageRoutes);
// app.use('/api/rewards', rewardsRoutes); 
// app.use('/api/dashboard', dashboardRoutes);

// // --- CLERK ERROR HANDLER ---
// // It catches any authentication errors from Clerk.
// app.use((err, req, res, next) => {
//   if (err.name === 'AuthenticationError') {
//     return res.status(401).send('Unauthenticated!');
//   }
//   if (err.name === 'AuthorizationError') {
//     return res.status(403).send('Unauthorized!');
//   }
//   // Fallback for other errors
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });


// app.use("/api",storyroute);
// app.use("/api",quizroute);
// app.use("/api",audioroute);
// // const story=`After the rain stopped, Peppa and George ran outside to jump in muddy puddles.
// // Suddenly, they saw a big, bright rainbow in the sky!

// // “Let’s find the end of the rainbow!” giggled Peppa.
// // But Daddy Pig chuckled — “The rainbow’s end is wherever the fun is!`
// // audioService(story);
// export default app;

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// --- ROUTES ---
import timeRoute from "./routes/timeRoute.js";
import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js";
import storageRoutes from './routes/storage.routes.js'; 
import rewardsRoutes from './routes/rewards.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import taskRoutes from './routes/task.routes.js';

dotenv.config();

const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing multipart/form-data

// --- CONNECT TO MONGODB ---
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/doodlequest";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- API ROUTES ---
// We group all routes together
app.use("/api/time", timeRoute);
app.use("/api/story", storyroute);
app.use("/api/quiz", quizroute);

// Storage (Doodles & History)
app.use('/api/storage', storageRoutes);

// Rewards (Badges)
app.use('/api/rewards', rewardsRoutes);

// Parental Dashboard (Analytics)
app.use('/api/dashboard', dashboardRoutes);

// Tasks & Appreciation (New)
app.use('/api/tasks', taskRoutes);


// --- CLERK ERROR HANDLER ---
// It catches any authentication errors from Clerk.
app.use((err, req, res, next) => {
  if (err.name === 'AuthenticationError') {
    return res.status(401).send('Unauthenticated!');
  }
  if (err.name === 'AuthorizationError') {
    return res.status(403).send('Unauthorized!');
  }
  // Fallback for other errors
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// --- START THE SERVER ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;