import React from "react";
import Question from "./Question";
import { Link } from "react-router-dom";

export default function QuizPage() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  console.log(questions);

  return (
    <div className="quiz-page container">
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          incorrectOptions={question.incorrect_answers}
          correctOption={question.correct_answer}
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
