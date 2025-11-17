import express from 'express';
import { getMyRewards, createReward } from '../controllers/rewards.controller.js';
import { protect } from '../middleware/clerk.js';

const router = express.Router();

// This route lets the frontend get the "trophy case"
router.get('/my-rewards', protect, getMyRewards);

// This helper route lets us add new badges to the database
router.post('/create', protect, createReward);

export default router;