import htmlDecode from "./utils/htmlDecode";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function Question(props) {
  const options = shuffle([...props.incorrectOptions, props.correctOption]);

  return (
    <div className="single-question">
      <h3 className="question">{htmlDecode(props.question)}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button className="option picked" key={index}>
            {htmlDecode(option)}
          </button>
        ))}
      </div>
    </div>
  );
}
