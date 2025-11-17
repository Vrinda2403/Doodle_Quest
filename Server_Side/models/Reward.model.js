import mongoose from 'mongoose';

const rewardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  // A string for the frontend icon, e.g., 'badge-first-doodle.png'
  icon: {
    type: String,
    required: true,
  },
  // This tells our service what logic to use
  criteriaType: {
    type: String,
    enum: ['DOODLE_COUNT', 'QUIZ_SCORE', 'PUZZLE_COMPLETE'],
    required: true,
  },
  // The value needed to earn the badge
  // e.g., for 'DOODLE_COUNT', this could be 1 (for "First Doodle")
  // e.g., for 'QUIZ_SCORE', this could be 90 (for "Quiz Whiz")
  criteriaValue: {
    type: Number,
    required: true,
  },
});

const Reward = mongoose.model('Reward', rewardSchema);
export default Reward;