import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useEffect, useRef } from "react";

import { useContext } from "react";
import { QuizStateContext } from "../helpers/Context";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const optionA = useRef();
  const optionB = useRef();
  const optionC = useRef();
  const optionD = useRef();
  useEffect(() => {
    shuffle(Questions);
    setQuestions(JSON.parse(localStorage.getItem("Questions")) || null);
    setQuestions(Questions);

    console.log({ Questions });
    if (!questions.length) {
      localStorage.setItem("Questions", JSON.stringify(Questions));
    }
  }, []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState();
  const [disabled, setDisabled] = useState(false);
  const [color, setcolor] = useState(null);

  const { score, setScore, QuizState, setQuizState, limit, setLimit } =
    useContext(QuizStateContext);

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  const arr = [optionA, optionB, optionC, optionD];

  const chooseOption = (option, index) => {
    setDisabled(true);
    setOptionChosen(option);

    if (questions[currentQuestion]?.answer == option) {
      setcolor([true, index]);
    } else {
      setcolor([false, index]);
    }
  };

  const nextQuestion = () => {
    setDisabled(false);
    setcolor(null);
    console.log(score, "score");
    if (questions[currentQuestion]?.answer === optionChosen) {
      console.log("here");
      setScore(score + 1);
      console.log(score, "setscore");
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  console.log(questions);
  const finishQuiz = () => {
    if (questions[currentQuestion]?.answer === optionChosen) {
      setScore(score + 1);
    }
    setQuizState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{questions[currentQuestion]?.prompt}</h1>
      <div className="questions">
        {questions[currentQuestion]?.options.map((option, i) => (
          <button
            style={
              color && color[1] === i && color[0] === true
                ? { backgroundColor: "green" }
                : color && color[1] === i && color[0] === false
                ? { backgroundColor: "red" }
                : {}
            }
            disabled={disabled}
            onClick={() => {
              chooseOption(option, i);
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {currentQuestion === limit - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
