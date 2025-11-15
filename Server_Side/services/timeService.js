import ScreenTime from "../models/ScreenTime.js";

let activeTimers = {};

export const startTimer = async (userId) => {
  let record = await ScreenTime.findOne({ userId });
  if (!record) record = await ScreenTime.create({ userId });

  if (record.isActive) return record; // already running

  record.isActive = true;
  record.lastStartTime = new Date();
  await record.save();

  // Start in-memory timer (simulates running)
  activeTimers[userId] = setInterval(async () => {
    const updated = await ScreenTime.findOne({ userId });

    if (!updated.isActive) {
      clearInterval(activeTimers[userId]);
      delete activeTimers[userId];
      return;
    }

    updated.timeUsed += 1; // increment 1 min every minute
    console.log(`${userId} used ${updated.timeUsed} mins`);

    // Auto stop if limit reached
    if (updated.timeUsed >= updated.dailyLimit) {
      updated.isActive = false;
      await updated.save();
      clearInterval(activeTimers[userId]);
      delete activeTimers[userId];
      console.log(`User ${userId} reached the daily limit!`);
    } else {
      await updated.save();
    }
  }, 60000); // 1 minute interval

  return record;
};

export const stopTimer = async (userId) => {
  const record = await ScreenTime.findOne({ userId });
  if (!record) throw new Error("User not found");

  record.isActive = false;
  await record.save();

  if (activeTimers[userId]) {
    clearInterval(activeTimers[userId]);
    delete activeTimers[userId];
  }

  return record;
};

export const getStatus = async (userId) => {
  const record = await ScreenTime.findOne({ userId });
  if (!record) throw new Error("No record found");
  return record;
};

export const setLimit = async (userId, limitMinutes) => {
  const record = await ScreenTime.findOneAndUpdate(
    { userId },
    { dailyLimit: limitMinutes },
    { new: true, upsert: true }
  );
  return record;
};
