import mongoose from  "mongoose";

const doodlelogSchema = new mongoose.Schema(
    {
    childId: { type: String, required: true },
  label: { type: String },
  confidence: { type: Number },
  isSafe: { type: Boolean, default: true },
  timestamp: { type: Date, default: Date.now },
    }
) ;


export default mongoose.model("DoodleLog", doodlelogSchema);
