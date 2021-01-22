import * as React from "react";
import { Props } from "../types/type";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
import parse, { HTMLReactParserOptions, attributesToProps } from "html-react-parser";
import { Element } from "domhandler/lib/node";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (
      domNode instanceof Element &&
      //@ts-ignore
      domNode.attribs &&
      //@ts-ignore
      domNode.attribs.class === "remove"
      ) {
      //@ts-ignore
      const props = attributesToProps(domNode.attribs);
      return <div {...props} />;
    }
  },
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p>{parse(question, options)}</p>
    <div className="answers">
      {answers.map((answer, id) => (
        <ButtonWrapper
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          key={id}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span>{parse(answer, options)}</span>
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
