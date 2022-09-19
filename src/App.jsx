import QuizPage from "./components/QuizPage";
import WelcomePage from "./components/WelcomePage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}
