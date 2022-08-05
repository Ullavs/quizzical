import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="welcome-page container">
      <h1>Quizzical</h1>
      <p>The most fun quiz ever</p>
      <Link to="/quiz">Start Quiz</Link>
    </div>
  );
}
