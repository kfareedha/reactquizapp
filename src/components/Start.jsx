import React, { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { QuizStateContext } from "../helpers/Context.js";

const Start = () => {
  const { QuizState, setQuizState, userName, setUserName } =
    useContext(QuizStateContext);
  const [error, setError] = useState("");
  return (
    <div className="Start">
      <label>
        <h3>Enter Your Name to start</h3>
      </label>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <input
        required
        type="text"
        id="name"
        placeholder="Please Enter Your Name"
        name="name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (userName.trim() === "") {
            setError("Please enter your name");
            return;
          }
          setQuizState("menu");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
