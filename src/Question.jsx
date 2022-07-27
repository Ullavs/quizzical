export default function Question(props) {
  return (
    <div className="single-question">
      <h3 className="question">{props.question}</h3>
      <div className="options">
        {props.options.map((option, index) => (
          <button className="option picked" key={index}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
