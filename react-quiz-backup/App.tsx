import React from 'react';
import { useState } from 'react'
import { fetchQuizQuestions } from './API'
//components
import QuestionCards from './components/Questions'
//types
import { Difficulty } from './API'

const App = () => {
  const Total_Questions = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(Total_Questions, Difficulty.EASY))

  const startQuiz = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className='app'>
      <h1>React Quiz</h1>
      <button className='button' onClick={startQuiz}>Start Quiz</button>
      <p className='score'>Score:</p>
      {/* <QuestionCards
        questionNr={number + 1}
        totalNr={Total_Questions}
        question={questions[number].question}
        answers={questions[number].answers}
        inputAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='btn-next' onClick={nextQuestion}>Next </button>
    </div>
  );
}

export default App;
