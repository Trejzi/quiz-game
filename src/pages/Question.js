import './Question.css';
import React, { useState } from 'react';

function Question() {
	const questions = [
		{
		  difficulty: 'easy',
		  questionText: 'What is the capital of France?',
		  answerOptions: [
			{ answerText: 'New York', isCorrect: false },
			{ answerText: 'London', isCorrect: false },
			{ answerText: 'Paris', isCorrect: true },
			{ answerText: 'Dublin', isCorrect: false },
		  ],
		},
		{
		  difficulty: 'easy',
		  questionText: 'What is 15 x 15?',
		  answerOptions: [
			{ answerText: '144', isCorrect: false },
			{ answerText: '196', isCorrect: false },
			{ answerText: '225', isCorrect: true },
			{ answerText: '250', isCorrect: false },
		  ],
		},
		{
		  difficulty: 'easy',
		  questionText: 'Which planet is known as the Red Planet?',
		  answerOptions: [
			{ answerText: 'Earth', isCorrect: false },
			{ answerText: 'Mars', isCorrect: true },
			{ answerText: 'Venus', isCorrect: false },
			{ answerText: 'Jupiter', isCorrect: false },
		  ],
		},
		{
		  difficulty: 'easy',
		  questionText: 'How many legs does a cat have?',
		  answerOptions: [
			{ answerText: '2', isCorrect: false },
			{ answerText: '4', isCorrect: true },
			{ answerText: '6', isCorrect: false },
			{ answerText: '8', isCorrect: false },
		  ],
		},
		{
		  difficulty: 'easy',
		  questionText: 'What is the largest ocean on Earth?',
		  answerOptions: [
			{ answerText: 'Atlantic Ocean', isCorrect: false },
			{ answerText: 'Indian Ocean', isCorrect: false },
			{ answerText: 'Arctic Ocean', isCorrect: false },
			{ answerText: 'Pacific Ocean', isCorrect: true },
		  ],
		},
		{
			difficulty: 'medium',
			questionText: 'Who wrote the play "Romeo and Juliet"?',
			answerOptions: [
			  { answerText: 'William Shakespeare', isCorrect: true },
			  { answerText: 'Jane Austen', isCorrect: false },
			  { answerText: 'Charles Dickens', isCorrect: false },
			  { answerText: 'Mark Twain', isCorrect: false },
			],
		  },
		  {
			difficulty: 'medium',
			questionText: 'In what year did World War II end?',
			answerOptions: [
			  { answerText: '1945', isCorrect: true },
			  { answerText: '1918', isCorrect: false },
			  { answerText: '1939', isCorrect: false },
			  { answerText: '1950', isCorrect: false },
			],
		  },
		  {
			difficulty: 'medium',
			questionText: 'Which country is known as the Land of the Rising Sun?',
			answerOptions: [
			  { answerText: 'China', isCorrect: false },
			  { answerText: 'Japan', isCorrect: true },
			  { answerText: 'South Korea', isCorrect: false },
			  { answerText: 'India', isCorrect: false },
			],
		  },
		  {
			difficulty: 'medium',
			questionText: 'What is the capital of Canada?',
			answerOptions: [
			  { answerText: 'Ottawa', isCorrect: true },
			  { answerText: 'Toronto', isCorrect: false },
			  { answerText: 'Vancouver', isCorrect: false },
			  { answerText: 'Montreal', isCorrect: false },
			],
		  },
		  {
			difficulty: 'medium',
			questionText: 'Who painted the Mona Lisa?',
			answerOptions: [
			  { answerText: 'Leonardo da Vinci', isCorrect: true },
			  { answerText: 'Vincent van Gogh', isCorrect: false },
			  { answerText: 'Pablo Picasso', isCorrect: false },
			  { answerText: 'Claude Monet', isCorrect: false },
			],
		  },
		
		  {
			difficulty: 'hard',
			questionText: 'Who was the first President of the United States?',
			answerOptions: [
			  { answerText: 'Thomas Jefferson', isCorrect: false },
			  { answerText: 'John Adams', isCorrect: false },
			  { answerText: 'George Washington', isCorrect: true },
			  { answerText: 'James Madison', isCorrect: false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'In what year did the French Revolution begin?',
			answerOptions: [
			  { answerText: '1789', isCorrect: true },
			  { answerText: '1799', isCorrect: false },
			  { answerText: '1809', isCorrect: false },
			  { answerText: '1776', isCorrect: false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'Which chemical element has the symbol "Au"?',
			answerOptions: [
			  { answerText: 'Silver', isCorrect: false },
			  { answerText: 'Gold', isCorrect: true },
			  { answerText: 'Platinum', isCorrect: false },
			  { answerText: 'Copper', isCorrect: false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'Who developed the theory of relativity?',
			answerOptions: [
			  { answerText: 'Isaac Newton', isCorrect: false },
			  { answerText: 'Albert Einstein', isCorrect: true },
			  { answerText: 'Niels Bohr', isCorrect: false },
			  { answerText: 'Galileo Galilei', isCorrect: false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'What is the largest moon of Saturn?',
			answerOptions: [
			  { answerText: 'Titan', isCorrect: true },
			  { answerText: 'Enceladus', isCorrect: false },
			  { answerText: 'Iapetus', isCorrect: false },
			  { answerText: 'Mimas', isCorrect: false },
			],
		  },
	  ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [difficultyLevel, setDifficultyLevel] = useState('easy');
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	let filteredQuestions = questions.filter(
		(question) => question.difficulty === difficultyLevel
	  );
	const answerOptions = filteredQuestions[currentQuestion].answerOptions;
	const currentQuestionData = filteredQuestions[currentQuestion];

	const handleAnswerOptionClick = (index,isCorrect) => {
		setSelectedAnswerIndex(index);
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < filteredQuestions.length) {
			setTimeout(() => {
				setCurrentQuestion(nextQuestion);
				setSelectedAnswerIndex(null);
			  }, 1500);

		} else {
			setShowScore(true);
			
		}
	};
	const handleNextLevelClick = () => {
		if (score > 3 && difficultyLevel === 'easy') {
			setDifficultyLevel('medium');
		  }
		  else if (score >3 && difficultyLevel === 'medium') {
			setDifficultyLevel('hard');
		  }
			filteredQuestions = questions.filter(
			(question) => question.difficulty === difficultyLevel
		  );
		  
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setSelectedAnswerIndex(null);

	  };
	  
	  const handlePlayAgainClick = () => {	  
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
		setSelectedAnswerIndex(null);
		setDifficultyLevel('easy');

	  };

  return (
	<>
<div className='header'>
				<div className='tittle'>
								<h1>Quiz Game</h1>
                      </div>
					  <div className='score'>
								<h3>Score : {score}</h3>
                      </div>

				
		</div>


    <div className='app'>
			{showScore ? (
				<>
				<div className='score-section'>
				{score <= 3 && <span className='game-over'>GAME OVER</span>}
					You scored {score} out of {filteredQuestions.length}
				</div>
				{score > 3 ? (
					<div className="button-container">
					<button className='menu-btn' id='next-level' onClick={() => handleNextLevelClick()}>Next Level</button>
					</div>
				) : (
					<div className="button-container">
					<button id='play-again' onClick={() => handlePlayAgainClick()}>Play Again</button>
					</div>
				)}
			   </>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>
						</div>
						<div className='question-text'>{filteredQuestions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
					{answerOptions.map((answerOption, index) => (
						<button
						key={index}
						onClick={() => handleAnswerOptionClick(index, answerOption.isCorrect)}
						style={{
							backgroundColor: selectedAnswerIndex === index ? (answerOption.isCorrect ? 'green' : 'red') : 'inherit',
						}}
						>
						{answerOption.answerText}
						</button>
					))}
					</div>
				</>
			)}
		</div>
		</>
  );
}

export default Question;
