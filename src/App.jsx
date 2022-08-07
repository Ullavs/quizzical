import QuizPage from "./QuizPage";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}
