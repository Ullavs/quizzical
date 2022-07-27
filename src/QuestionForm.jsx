import Question from "./Question";

export default function QuestionForm(props) {
  return (
    <div className="quiz-screen container">
      {props.questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
        />
      ))}
      <div className="quiz-result">
        <p className="quiz-result-displayed">You scored 3/5 correct answers</p>
        <button className="main-button">Check answers</button>
      </div>
    </div>
  );
}
