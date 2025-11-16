// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import timeRoute from "./routes/timeRoute.js";
// import storyroute from "./routes/storyroute.js";
// import quizroute from "./routes/quizroute.js" ;

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI || "mongodb://localhost:27017/doodlequest", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// app.use("/api/time", timeRoute);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// app.use("/api",storyroute);
// app.use("/api",quizroute);
// // const story=`After the rain stopped, Peppa and George ran outside to jump in muddy puddles.
// // Suddenly, they saw a big, bright rainbow in the sky!

// “Let’s find the end of the rainbow!” giggled Peppa.
// But Daddy Pig chuckled — “The rainbow’s end is wherever the fun is!`
// // audioService(story);
// export default app;

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// --- ROUTES ---
import timeRoute from "./routes/timeRoute.js";
import storyroute from "./routes/storyroute.js";
import quizroute from "./routes/quizroute.js" ;
import storageRoutes from './routes/storage.routes.js';

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
app.use("/api/story", storyroute); // Changed from /api to /api/story
app.use("/api/quiz", quizroute);   // Changed from /api to /api/quiz

// --- NEW STORAGE ROUTE ---
app.use('/api/storage', storageRoutes);


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
// This should be at the end of the file.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;