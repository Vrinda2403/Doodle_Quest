import express from 'express';
import { 
  getMyRewards, 
  getMyPoints, 
  createReward, 
  setupBadges // ✅ Import the new function
} from '../controllers/rewards.controller.js';

import { childAuth } from '../middleware/childAuth.js';

const router = express.Router();

router.get('/my-rewards', childAuth, getMyRewards);
router.get('/my-points', childAuth, getMyPoints);
router.post('/create', childAuth, createReward);

// ✅ ADD THIS ROUTE (No protect needed for this setup tool)
router.get('/setup', setupBadges);

export default router;