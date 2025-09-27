import React, { useState, useMemo } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

const quizData = {
  logical: {
    title: 'Logical Reasoning Quiz',
    questions: [
      { text: "Which number should come next in the pattern? 1, 4, 9, 16, ?", options: ["20", "25", "30", "36"], correctAnswer: "25" },
      { text: "If 'CAT' is coded as '3120', how is 'DOG' coded?", options: ["4157", "4158", "4156", "4159"], correctAnswer: "4157" },
      { text: "All birds can fly. A penguin is a bird. Therefore, a penguin can fly. Is this statement valid?", options: ["Valid", "Invalid"], correctAnswer: "Invalid" },
      { text: "Find the odd one out: Car, Bicycle, Truck, Scooter", options: ["Car", "Bicycle", "Truck", "Scooter"], correctAnswer: "Bicycle" },
      { text: "A is the father of B. C is the sister of A. D is the nephew of C. How is D related to A?", options: ["Son", "Brother", "Nephew", "Father"], correctAnswer: "Son" },
    ]
  },
  verbal: {
    title: 'Verbal Ability Quiz',
    questions: [
      { text: "Choose the synonym for 'Ephemeral'.", options: ["Eternal", "Transient", "Beautiful", "Strong"], correctAnswer: "Transient" },
      { text: "Complete the analogy: Doctor is to Hospital as Teacher is to _______.", options: ["Student", "Book", "School", "Lesson"], correctAnswer: "School" },
      { text: "Identify the error: 'The team are playing their best game ever.'", options: ["are", "their", "best", "No error"], correctAnswer: "are" },
      { text: "What is the antonym for 'Ubiquitous'?", options: ["Common", "Everywhere", "Rare", "Popular"], correctAnswer: "Rare" },
      { text: "The detective was able to ______ the difficult code.", options: ["decifer", "decipher", "decypher", "desipher"], correctAnswer: "decipher" },
    ]
  },
  quantitative: {
    title: 'Quantitative Analysis Quiz',
    questions: [
      { text: "If a car travels 120 km in 2 hours, what is its speed in km/h?", options: ["50", "60", "70", "80"], correctAnswer: "60" },
      { text: "What is 15% of 200?", options: ["15", "20", "30", "40"], correctAnswer: "30" },
      { text: "The price of a jacket is reduced by 20%. If the original price was $100, what is the new price?", options: ["$70", "$80", "$90", "$20"], correctAnswer: "$80" },
      { text: "What is the next prime number after 13?", options: ["14", "15", "16", "17"], correctAnswer: "17" },
      { text: "If the area of a square is 64 sq units, what is the length of its side?", options: ["4", "6", "8", "16"], correctAnswer: "8" },
    ]
  }
};

const AptiQuiz = ({ sectionId, onBack }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const { title, questions } = useMemo(() => quizData[sectionId] || { title: 'Quiz', questions: [] }, [sectionId]);

  const score = useMemo(() => {
    return questions.reduce((acc, question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [selectedAnswers, questions]);

  const handleOptionSelect = (questionIndex, option) => {
    if (selectedAnswers[questionIndex] !== undefined) return;

    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Sections
          </button>
          <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
        </div>

        {/* Questions */}
        <div className="space-y-12">
          {questions.map((q, index) => {
            const userAnswer = selectedAnswers[index];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div key={index} className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 transition-all duration-300 hover:shadow-xl">
                <p className="text-xl font-semibold text-slate-800 mb-6">
                  <span className="text-blue-600 font-bold">Q{index + 1}.</span> {q.text}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {q.options.map((option) => {
                    let base = 'border-2 rounded-xl px-4 py-3 text-left transition-all duration-200';
                    let style = 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700';

                    if (isAnswered) {
                      if (option === q.correctAnswer) {
                        style = 'border-green-500 bg-green-50 text-green-800 font-semibold';
                      } else if (option === userAnswer) {
                        style = 'border-red-500 bg-red-50 text-red-800 font-semibold';
                      } else {
                        style = 'border-slate-200 bg-slate-50 text-slate-500';
                      }
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect(index, option)}
                        disabled={isAnswered}
                        className={`${base} ${style} disabled:cursor-not-allowed`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`mt-6 flex items-center gap-3 p-4 rounded-xl ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                    <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Correct!' : `Incorrect. Correct answer: ${q.correctAnswer}`}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Score Footer */}
      <footer className="sticky bottom-0 mt-16 bg-white/90 backdrop-blur-md border-t border-slate-200 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl font-bold text-slate-800">
            Your Score: <span className="text-indigo-600">{score}</span> / {questions.length}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AptiQuiz;
