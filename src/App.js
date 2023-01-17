import "./App.css";
import Menu from "./components/Menu";
import End from "./components/End";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import { useState } from "react";
import { QuizStateContext } from "./helpers/Context";

function App() {
  const [QuizState, setQuizState] = useState("start");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [limit, setLimit] = useState(0);
  return (
    <div className="App">
      <h1> Quick Quiz App</h1>
      <QuizStateContext.Provider
        value={{
          QuizState,
          setQuizState,
          userName,
          setUserName,
          score,
          setScore,
          limit,
          setLimit,
        }}
      >
        {QuizState === "start" && <Start />}
        {QuizState === "menu" && <Menu />}
        {QuizState === "playing" && <Quiz />}
        {QuizState === "finished" && <End />}
      </QuizStateContext.Provider>
    </div>
  );
}

export default App;
