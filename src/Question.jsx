import React from "react";
import htmlDecode from "./utils/htmlDecode";
import shuffle from "./utils/shuffle";

export default function Question(props) {
  const options = React.useMemo(
    () => shuffle([...props.incorrectOptions, props.correctOption]),
    [props.correctOption, props.incorrectOptions]
  );

  return (
    <div className="single-question">
      <h3 className="question">{htmlDecode(props.question)}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button
            className={`option ${props.pickedAnswer === option && "picked"}`}
            key={index}
            onClick={() => props.pickAnswer(option)}
          >
            {htmlDecode(option)}
          </button>
        ))}
      </div>
    </div>
  );
}
