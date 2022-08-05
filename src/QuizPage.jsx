import Question from "./Question";
import { Link } from "react-router-dom";

export default function QuizPage(props) {
  return (
    <div className="quiz-page container">
      {props.questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
        />
      ))}
      <div className="quiz-result">
        <p className="quiz-result-displayed">You scored 3/5 correct answers</p>
        <button className="main-button">
          <Link className="main-button" to="/">
            Check answers
          </Link>
        </button>
      </div>
    </div>
  );
}
