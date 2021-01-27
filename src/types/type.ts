import { Difficulty } from "./enum";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  };

export  type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
  };

export type InputProps = {
  setQuizDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  difficulty: Difficulty;
}


export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  };
  
  export type QuestionState = Question & { answers: string[] };