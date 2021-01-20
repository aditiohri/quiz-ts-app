import * as React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: boolean;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p>{question}</p>
    <div>
        {answers.map(answer => (
            <div>
                <button disabled={userAnswer ? true : false}>
                <span>{answer}</span>
                </button>
            </div>
        ))}
    </div>
  </div>
);

export default QuestionCard;
