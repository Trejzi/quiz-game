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
		  questionText: ' Which country has the largest population in the world?',
		  answerOptions: [
			{ answerText: 'China', isCorrect: true },
			{ answerText: 'India', isCorrect: false },
			{ answerText: 'Nigeria', isCorrect: false},
			{ answerText: 'USA', isCorrect: false },
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
		  questionText: ' What country are the Great Pyramids of Giza located in?',
		  answerOptions: [
			{ answerText: 'Morocco', isCorrect: false },
			{ answerText: 'Egypt', isCorrect: true },
			{ answerText: 'Saudi Arabia', isCorrect: false },
			{ answerText: 'Turkey', isCorrect: false },
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
			questionText: 'How many countries are there in the United Kingdom?',
			answerOptions: [
			  { answerText: '2', isCorrect: false },
			  { answerText: '3', isCorrect: false },
			  { answerText: '4', isCorrect: true },
			  { answerText: '5', isCorrect: false },
			],
		  },
		  {
			difficulty: 'medium',
			questionText: 'Which ocean does the Amazon River run into?',
			answerOptions: [
				{ answerText: 'Atlantic Ocean', isCorrect: true },
				{ answerText: 'Indian Ocean', isCorrect: false },
				{ answerText: 'Arctic Ocean', isCorrect: false },
				{ answerText: 'Pacific Ocean', isCorrect:false },
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
			questionText: ' What season does Australia experience in December?',
			answerOptions: [
			  { answerText: 'Spring', isCorrect: false},
			  { answerText: 'Summer', isCorrect: true },
			  { answerText: 'Autumn', isCorrect: false },
			  { answerText: 'Winter', isCorrect: false},
			],
		  },
		
		  {
			difficulty: 'hard',
			questionText: 'In what ocean is the Bermuda Triangle located?',
			answerOptions: [
				{ answerText: 'Atlantic Ocean', isCorrect:  true },
				{ answerText: 'Indian Ocean', isCorrect: false },
				{ answerText: 'Arctic Ocean', isCorrect: false },
				{ answerText: 'Pacific Ocean', isCorrect:false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'Which of these is the capital of Costa Rica?',
			answerOptions: [
			  { answerText: 'San Jose', isCorrect: true },
			  { answerText: 'San Cristobel', isCorrect: false },
			  { answerText: 'San Sebastien', isCorrect: false },
			  { answerText: 'Santa Cruz', isCorrect: false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'What is the only continent with land in all four hemispheres?',
			answerOptions: [
			  { answerText: 'Asia', isCorrect: false },
			  { answerText: 'Australia', isCorrect: false},
			  { answerText: 'Europe', isCorrect: false },
			  { answerText: 'Africa', isCorrect:true },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'What is the flattest state in the United States?',
			answerOptions: [
			  { answerText: 'Kansas', isCorrect: false },
			  { answerText: 'Oklahoma', isCorrect: false },
			  { answerText: 'Florida', isCorrect: true },
			  { answerText: 'Illinois', isCorrect: false },
			],
		  },
		  {
			difficulty: 'hard',
			questionText: 'Which island is the largest?',
			answerOptions: [
			  { answerText: 'Sumatra', isCorrect: false},
			  { answerText: 'Great Britain', isCorrect: false },
			  { answerText: 'Honshu', isCorrect: false },
			  { answerText: 'Greenland', isCorrect: true },
			],
		  },
		  {
			difficulty: 'very hard',
			questionText: 'Which country is home to the most volcanos?',
			answerOptions: [
			  { answerText: 'Guatemala', isCorrect: false },
			  { answerText: 'Indonesia', isCorrect: true },
			  { answerText: 'Iceland', isCorrect: false },
			  { answerText: 'Hawaii', isCorrect: false },
			],
		  },
		  {
			difficulty: 'very hard',
			questionText: 'Identify the location of the Tropic of Capricorn on the world map and name three countries through which it passes.',
			answerOptions: [
			  { answerText: 'Brazil, Madagascar, Australia', isCorrect: true },
			  { answerText: 'Argentina, South Africa, India', isCorrect: false },
			  { answerText: 'Chile, Mozambique, Indonesia', isCorrect: false },
			  { answerText: 'New Zealand, Namibia, Mexico', isCorrect: false },
			],
		  },
		  {
			difficulty: 'very hard',
			questionText: 'Identify the world\'s largest and second-largest lakes by surface area.',
			answerOptions: [
			  { answerText: 'Caspian Sea, Lake Superior', isCorrect: true },
			  { answerText: 'Lake Baikal, Lake Tanganyika', isCorrect: false },
			  { answerText: 'Great Bear Lake, Great Slave Lake', isCorrect: false },
			  { answerText: 'Lake Victoria, Lake Huron', isCorrect: false },
			],
		  },
		  {
			difficulty: 'very hard',
			questionText: 'Which city is the world’s most densely populated?',
			answerOptions: [
			  { answerText: 'Bogotá, Colombia', isCorrect: false },
			  { answerText: 'Dhaka, Bangladesh', isCorrect: false },
			  { answerText: 'Kathmandu, Nepal', isCorrect: false },
			  { answerText: 'Manila, Philippines', isCorrect: true },
			],
		  },
		  {
			difficulty: 'very hard',
			questionText: 'Which country has the most natural lakes?',
			answerOptions: [
			  { answerText: 'USA', isCorrect: false },
			  { answerText: 'Canada', isCorrect: true },
			  { answerText: 'Australia', isCorrect: false },
			  { answerText: 'Brazil', isCorrect: false },
			],
		  },
	  ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [hint, setHint] = useState(false);
	const [showHint, setShowHint] = useState(false);
	const [difficultyLevel, setDifficultyLevel] = useState('easy');
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
	let filteredQuestions = questions.filter(
		(question) => question.difficulty === difficultyLevel
	  );
	const answerOptions = filteredQuestions[currentQuestion].answerOptions;
	const currentQuestionData = filteredQuestions[currentQuestion];
	const [hintAnswerOptions, setHintAnswerOptions] = useState([]);

	const handleHintClick = () => {
		setHint(true);
		setShowHint(true);
		const currentAnswerOptions = filteredQuestions[currentQuestion].answerOptions;
		const correctAnswerIndex = currentAnswerOptions.findIndex(
		  (option) => option.isCorrect
		);
	  
		let randomIncorrectIndex;
		do {
		  randomIncorrectIndex = Math.floor(Math.random() * currentAnswerOptions.length);
		} while (randomIncorrectIndex === correctAnswerIndex);
	  
		const hintAnswerOptions = [
		  currentAnswerOptions[correctAnswerIndex],
		  currentAnswerOptions[randomIncorrectIndex],
		];
		setHintAnswerOptions(hintAnswerOptions);
	  };

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
				setShowHint(false);
			  }, 1500);

		} else {
			setShowScore(true);	
			setShowHint(false);	
		} 
	};
	const handleNextLevelClick = () => {
		if (score > 3 && difficultyLevel === 'easy') {
			setDifficultyLevel('medium');
		  }
		  else if (score >3 && difficultyLevel === 'medium') {
			setDifficultyLevel('hard');
		  }
		  else if (score >3 && difficultyLevel === 'hard') {
			setDifficultyLevel('very hard');
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
		setHint(false);
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
				{score > 3 && difficultyLevel === 'very hard' && <span className='game-over'>CONGRATULATIONS! YOU WON!</span>}
					You scored {score} out of {filteredQuestions.length}
				</div>
				{score > 3 && difficultyLevel !== 'very hard' ? (
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
				<div className='header'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>
						</div>
						<div className='question-text'>{filteredQuestions[currentQuestion].questionText}</div>
					</div>
					<div className='hint'>
                <button id='hint' onClick={handleHintClick} disabled={hint}>
                  <img src='/images/games-hint-icon-1702x2048-6izvcc1v.png' />
                </button>
				</div>
					</div>
					<div className='answer-section'>
				{showHint ? (
					// Render the hint answer options
					<>
					{hintAnswerOptions.map((hintOption, index) => (
						<button
						key={index}
						onClick={() => handleAnswerOptionClick(index, hintOption.isCorrect)}
						style={{
							backgroundColor: selectedAnswerIndex === index ? (hintOption.isCorrect ? 'green' : 'red') : 'inherit',
						}}
						>
						{hintOption.answerText}
						</button>
					))}
					</>
				) : (
					// Render the regular answer options
					<>
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
					</>
				)}
				</div>
				</>
			)}
		</div>
		</>
  );
}

export default Question;
