import React from "react";
import "../App.css";
import { useContext } from "react";
import { QuizStateContext } from "../helpers/Context.js";

const Start = () => {
  const { QuizState, setQuizState, userName, setUserName } =
    useContext(QuizStateContext);
  return (
    <div className="Start">
      <label>
        <h3>Enter Your Name to start</h3>
      </label>
      <input
        type="text"
        placeholder="Please Enter Your Name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setQuizState("menu");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
