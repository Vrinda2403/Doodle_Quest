import asyncHandler from 'express-async-handler';
import UserReward from '../models/UserReward.model.js';
import Reward from '../models/Reward.model.js';

// @desc    Get all rewards for the logged-in child
// @route   GET /api/rewards/my-rewards
// @access  Private (Child)
const getMyRewards = asyncHandler(async (req, res) => {
  const childId = req.auth.userId;

  // Find all UserReward entries for this child
  const userRewards = await UserReward.find({ childId: childId })
    // 'populate' is magic. It swaps the 'rewardId'
    // with the full badge details (name, description, icon).
    .populate('rewardId');

  res.status(200).json(userRewards);
});

// @desc    (Helper) Create a new badge definition
// @route   POST /api/rewards/create
// @access  (Admin/Parent - we'll just use 'protect' for now)
const createReward = asyncHandler(async (req, res) => {
  const { name, description, icon, criteriaType, criteriaValue } = req.body;

  const newReward = new Reward({
    name,
    description,
    icon,
    criteriaType,
    criteriaValue,
  });

  const savedReward = await newReward.save();
  res.status(201).json(savedReward);
});

export { getMyRewards, createReward };