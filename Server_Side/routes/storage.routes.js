import express from 'express';
import {
  uploadDoodle,
  savePuzzleProgress,
  getStorageHistory,
} from '../controllers/storage.controller.js';

import upload from '../middleware/upload.js';
import { childAuth } from '../middleware/childAuth.js';

const router = express.Router();

router.post(
  '/upload-doodle',
  childAuth,
  upload.single('doodleImage'), // 'doodleImage' must match the form field name
  uploadDoodle
);

// This route is for POST /api/storage/save-puzzle
router.post('/save-puzzle', childAuth, savePuzzleProgress);

// This route is for GET /api/storage/history
router.get('/history', childAuth, getStorageHistory);

export default router;