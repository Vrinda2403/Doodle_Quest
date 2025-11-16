import asyncHandler from 'express-async-handler';
import Doodle from '../models/Doodle.model.js';
import PuzzleProgress from '../models/PuzzleProgress.model.js';
import QuizAttempt from '../models/QuizAttempt.model.js';

// @desc    Upload a new doodle drawing
// @route   POST /api/storage/upload-doodle
// @access  Private (Child only)
const uploadDoodle = asyncHandler(async (req, res) => {
  // 'req.file' is added by the 'upload' (Multer) middleware
  if (!req.file) {
    res.status(400);
    throw new Error('Please upload an image file');
  }

  const { prompt } = req.body;
  // 'req.auth.userId' is added by the 'protect' (Clerk) middleware
  const childId = req.auth.userId;

  const newDoodle = new Doodle({
    childId: childId,
    imageUrl: req.file.path, // This is the URL from Cloudinary
    prompt: prompt || 'Untitled Doodle',
  });

  const savedDoodle = await newDoodle.save();
  res.status(201).json(savedDoodle);
});

// @desc    Save or update puzzle progress
// @route   POST /api/storage/save-puzzle
// @access  Private (Child only)
const savePuzzleProgress = asyncHandler(async (req, res) => {
  const { puzzleName, progress, isCompleted } = req.body;
  const childId = req.auth.userId;

  if (!puzzleName) {
    res.status(400);
    throw new Error('Puzzle name is required');
  }

  // Find a puzzle with this name and child, and update it.
  // 'upsert: true' means it will create a new one if it doesn't exist.
  const updatedProgress = await PuzzleProgress.findOneAndUpdate(
    { childId: childId, puzzleName: puzzleName },
    { progress, isCompleted },
    { new: true, upsert: true }
  );

  res.status(200).json(updatedProgress);
});

// @desc    Get all activity history for the logged-in child
// @route   GET /api/storage/history
// @access  Private (Child only)
const getStorageHistory = asyncHandler(async (req, res) => {
  const childId = req.auth.userId;

  // Run all database queries at the same time for speed
  const [doodles, puzzles, quizzes] = await Promise.all([
    Doodle.find({ childId: childId }).sort({ createdAt: -1 }),
    PuzzleProgress.find({ childId: childId }).sort({ updatedAt: -1 }),
    QuizAttempt.find({ childId: childId }).sort({ createdAt: -1 }),
  ]);

  // Return all history in one object
  res.status(200).json({
    doodles,
    puzzles,
    quizzes,
  });
});

export { uploadDoodle, savePuzzleProgress, getStorageHistory };