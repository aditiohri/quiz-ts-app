import * as React from "react";

import { fetchQuizQuestions } from "./API";
import { AnswerObject, QuestionState } from "./types/type";

import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";
import DropdownInput from "./components/DropdownInput";
import { Difficulty } from "./types/enum";

const { useState } = React;

const TOTAL_QUESTIONS = 10;

export const App = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const setQuizDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let level: Difficulty;
    const value: string = e.currentTarget.value;
    switch (value) {
      case Difficulty.EASY:
        level = Difficulty.EASY;
        break;
      case Difficulty.HARD:
        level = Difficulty.HARD;
        break;
      case Difficulty.MEDIUM:
        level = Difficulty.MEDIUM;
        break;
      default:
        level = Difficulty.EASY;
    }
    setDifficulty(level);
  };

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty
    ).catch((error) => console.error);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore((prevScore) => prevScore + 1);
      // save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prevAnswer) => [...prevAnswer, answerObject]);
    }
  };
  const nextQuestion = () => {
    // move onto the next question unless on the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <h1>Quiz </h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <form onSubmit={startTrivia}>
          <DropdownInput
            setQuizDifficulty={setQuizDifficulty}
            difficulty={difficulty}
          />
          <button type="submit" className="start">
            Start
          </button>
        </form>
      ) : null}
      {!gameOver ? (
        <>
          <p className="score">Score: {score}</p>
          <p>Difficulty: {difficulty}</p>
        </>
      ) : null}
      {loading && <p>Loading Questions ... </p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </Wrapper>
  );
};
