import mongoose from "mongoose";

const timerSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  startTime: { type: Date, default: null },
  totalTime: { type: Number, default: 0 }, // in seconds
  screenLimit: { type: Number, default: 0 }, // in minutes
  isRunning: { type: Boolean, default: false },
});

export default mongoose.model("Timer", timerSchema);
