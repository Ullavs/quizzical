import QuizPage from "./QuizPage";
import WelcomePage from "./WelcomePage";
import { Route, Routes } from "react-router-dom";

const questions = [
  {
    question: "How would one say goodbye in Spanish?",
    options: ["Adios", "Hola", "Au Revoir", "Salir"],
  },
  {
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
    options: [
      "Cabbage Patch Kids",
      "Transformers",
      "Care Bears",
      "Rubik's Cube",
    ],
  },
  {
    question: "Is Ulla altijd BOOS?",
    options: ["Ja", "Absoluut", "Zeker weten", "Echt niet!"],
  },
  {
    question: "Is Rob de beste tutor allertijden?",
    options: ["Ja", "Absoluut", "Nee", "Misschien"],
  },
  {
    question: "What is the hottest planet in our Solar System?",
    options: ["Mercury", "Venus", "Mars", "Saturn"],
  },
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quiz" element={<QuizPage questions={questions} />} />
    </Routes>
  );
}
