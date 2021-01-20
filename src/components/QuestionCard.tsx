import * as React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswers: any;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswers,
  questionNum,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p>{question}</p>
    <div>
        {answers.map((answer, id) => (
            <div key={id}>
                <button disabled={userAnswers ? true : false}>
                <span>{answer}</span>
                </button>
            </div>
        ))}
    </div>
  </div>
);

export default QuestionCard;
