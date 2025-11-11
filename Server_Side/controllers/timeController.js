import {
  startTimer,
  stopTimer,
  getStatus,
  setLimit,
} from "../services/timeService.js";

export const start = async (req, res) => {
  try {
    const { userId } = req.body;
    const timer = await startTimer(userId);
    res.status(200).json({ message: "Timer started", timer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const stop = async (req, res) => {
  try {
    const { userId } = req.body;
    const timer = await stopTimer(userId);
    res.status(200).json({ message: "Timer stopped", timer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const status = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await getStatus(userId);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const limit = async (req, res) => {
  try {
    const { userId, limitMinutes } = req.body;
    const timer = await setLimit(userId, limitMinutes);
    res.status(200).json({ message: "Limit updated", timer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
