import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import grass from '../../assets/grass.png';

const quizQuestions = [
  {
    questionText: 'Which of these animals says "Moo"?',
    answerOptions: [
      { answerText: 'A Duck', isCorrect: false },
      { answerText: 'A Lion', isCorrect: false },
      { answerText: 'A Cow', isCorrect: true },
      { answerText: 'A Frog', isCorrect: false },
    ],
    funFact: 'Cows can sleep while standing up, but they only dream when they lie down!',
  },
  {
    questionText: 'What is the big, bright star that we see during the day?',
    answerOptions: [
      { answerText: 'The Moon', isCorrect: false },
      { answerText: 'The Sun', isCorrect: true },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'A Comet', isCorrect: false },
    ],
    funFact: 'The Sun is so big that you could fit one million Earths inside it!',
  },
  {
    questionText: 'How many colors are in a rainbow?',
    answerOptions: [
      { answerText: '5', isCorrect: false },
      { answerText: '9', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: '12', isCorrect: false },
    ],
    funFact: 'The seven colors are Red, Orange, Yellow, Green, Blue, Indigo, and Violet!',
  },
];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleAnswerClick = (answer, index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);
    if (answer.isCorrect) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      navigate('/quizreward'); 
    }
  };
  
  const getButtonClass = (index) => {
    if (selectedAnswer === null) {
      const colors = ['bg-sky-400', 'bg-emerald-400', 'bg-amber-400', 'bg-rose-400'];
      return `${colors[index]} hover:scale-105`;
    }
    if (quizQuestions[currentQuestion].answerOptions[index].isCorrect) {
      return 'bg-green-500 scale-105';
    }
    if (selectedAnswer === index) {
      return 'bg-red-500';
    }
    return 'bg-gray-400 opacity-70';
  };

  return (
    <div className='relative flex flex-col items-center justify-center bg-gradient-to-b from-[#A9C2E9] to-blue-100 min-h-screen p-4'>
      
      {/* Blurred Quiz Box */}
      <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center z-10">
        <div className="mb-6">
          <h2 className="text-4xl font-righteous text-gray-800">
            Question {currentQuestion + 1}<span className="text-gray-500">/{quizQuestions.length}</span>
          </h2>
          <p className="text-xl font-semibold text-purple-600 mt-2">Score: {score}</p>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-8 min-h-[6rem]">
          {quizQuestions[currentQuestion].questionText}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {quizQuestions[currentQuestion].answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option, index)}
              className={`p-4 rounded-xl text-white font-bold text-xl shadow-lg transform transition-all duration-300 ${getButtonClass(index)}`}
              disabled={selectedAnswer !== null}
            >
              {option.answerText}
            </button>
          ))}
        </div>

        {/* after an answer is chosen */}
        {selectedAnswer !== null && (
          <div className="flex flex-col items-center justify-center">
            {isCorrect ? (
              <FaCheckCircle className="text-green-500 text-6xl" />
            ) : (
              <FaTimesCircle className="text-red-500 text-6xl" />
            )}
            <p className="text-lg font-semibold text-gray-700 mt-4">
              <span className="font-bold">Fun Fact:</span> {quizQuestions[currentQuestion].funFact}
            </p>
            <button
              onClick={handleNextQuestion}
              className="mt-6 w-1/2 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
            >
              {currentQuestion + 1 < quizQuestions.length ? 'Next Question' : 'Finish Quiz!'}
            </button>
          </div>
        )}
      </div>

      {/* Grass Image at the Bottom */}
      <img src={grass} alt="A grassy field" className='absolute bottom-0 w-full z-0' />
    </div>
  )
}

export default Quiz;