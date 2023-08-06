import React, { useState } from 'react';
import CapitalsQuiz from '../components/Quiz/CapitalsQuiz';
import FlagsQuiz from '../components/Quiz/FlagsQuiz';
import { Toaster } from 'react-hot-toast';

export default function Quiz() {
	const [quizType, setQuizType] = useState(true); // true = capitals, false = flags

	if (!localStorage.getItem('capital-score')) {
		localStorage.setItem('capital-score', 0);
	}
	if (!localStorage.getItem('flag-score')) {
		localStorage.setItem('flag-score', 0);
	}

	const [capitalScore, setCapitalScore] = useState(
		localStorage.getItem('capital-score') || 0,
	);
	const [flagScore, setFlagScore] = useState(
		localStorage.getItem('flag-score') || 0,
	);

	const updateScore = () => {
		if (quizType) {
			setCapitalScore(localStorage.getItem('capital-score'));
		} else {
			setFlagScore(localStorage.getItem('flag-score'));
		}
	};

	return (
		<div className="my-8 flex w-full flex-col items-center justify-center gap-y-8">
			<Toaster />
			{quizType ? (
				<CapitalsQuiz updateScore={updateScore} />
			) : (
				<FlagsQuiz updateScore={updateScore} />
			)}
			<div className="grid w-full max-w-[70%] grid-rows-2 text-xl font-semibold md:max-w-[35%] md:grid-cols-2">
				<h1 className="">
					{quizType ? 'Capital' : 'Flag'} Score:{' '}
					{quizType ? capitalScore : flagScore}
				</h1>
				<button onClick={() => setQuizType(!quizType)} className="quiz-button">
					Change Quiz Type
				</button>
			</div>
		</div>
	);
}
