import React from "react";
import "../App.css";
import { useContext } from "react";
import { QuizStateContext } from "../helpers/Context";
import { Questions } from "../helpers/Questions";

const End = () => {
  const { score, setScore, setQuizState, userName, limit, setLimit } =
    useContext(QuizStateContext);

  const restartQuiz = () => {
    setScore(0);
    setLimit(1);
    setQuizState("start");
  };
  return (
    <div className="End">
      <h3>Hey,{userName}</h3>
      <h2>Thank you for taking the Quiz</h2>
      <h2>
        {score} correct Answers/ {limit}
      </h2>
      <h2>{(score / limit) * 100} %</h2>
      <button onClick={restartQuiz}>Take once more</button>
    </div>
  );
};

export default End;
