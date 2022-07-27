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

      <button>Check answers</button>
    </div>
  );
}
