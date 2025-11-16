import mongoose from 'mongoose';

const quizAttemptSchema = new mongoose.Schema(
  {
    // Store the Clerk User ID as a string
    childId: {
      type: String,
      required: true,
    },
    quizName: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
    },
    accuracy: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
    correctAnswers: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuizAttempt = mongoose.model('QuizAttempt', quizAttemptSchema);

export default QuizAttempt;