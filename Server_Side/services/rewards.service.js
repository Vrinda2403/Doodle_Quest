import Reward from '../models/Reward.model.js';
import UserReward from '../models/UserReward.model.js';
import Doodle from '../models/Doodle.model.js';
import PuzzleProgress from '../models/PuzzleProgress.model.js';

/**
 * A private helper function to give a badge to a child.
 * It automatically checks if the child already has it.
 */
const awardBadge = async (childId, reward) => {
  try {
    // Check if the user already has this badge
    const existingReward = await UserReward.findOne({
      childId: childId,
      rewardId: reward._id,
    });

    // If they don't have it, create it
    if (!existingReward) {
      await UserReward.create({
        childId: childId,
        rewardId: reward._id,
      });
      console.log(`Awarded badge "${reward.name}" to child ${childId}`);
    }
  } catch (error) {
    // This might fail if two requests try to award the same badge
    // at the same time. The unique index will catch it.
    console.error('Error in awardBadge:', error.message);
  }
};

/**
 * Checks all DOODLE_COUNT badges after a child saves a new doodle.
 */
export const checkDoodleAchievements = async (childId) => {
  // 1. Get the child's total doodle count
  const doodleCount = await Doodle.countDocuments({ childId: childId });

  // 2. Find all badges related to doodle counts
  const doodleBadges = await Reward.find({ criteriaType: 'DOODLE_COUNT' });

  // 3. Loop and check
  for (const badge of doodleBadges) {
    if (doodleCount >= badge.criteriaValue) {
      await awardBadge(childId, badge);
    }
  }
};

/**
 * Checks all QUIZ_SCORE badges after a child submits a quiz.
 */
export const checkQuizAchievements = async (childId, quizAttempt) => {
  // 1. Find all badges related to quiz scores
  const quizBadges = await Reward.find({ criteriaType: 'QUIZ_SCORE' });

  // 2. Loop and check
  for (const badge of quizBadges) {
    if (quizAttempt.score >= badge.criteriaValue) {
      await awardBadge(childId, badge);
    }
  }
};

/**
 * Checks all PUZZLE_COMPLETE badges after a child saves puzzle progress.
 */
export const checkPuzzleAchievements = async (childId, puzzleProgress) => {
  // We only care about completed puzzles
  if (!puzzleProgress.isCompleted) {
    return;
  }

  // 1. Find all badges related to puzzle completion
  const puzzleBadges = await Reward.find({ criteriaType: 'PUZZLE_COMPLETE' });

  // 2. Loop and check
  for (const badge of puzzleBadges) {
    // This logic is simple: if the puzzle is complete, award any puzzle badge.
    await awardBadge(childId, badge);
  }
};