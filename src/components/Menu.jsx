import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";

import { useContext } from "react";
import { QuizStateContext } from "../helpers/Context";

const Menu = () => {
  const { score, setScore, QuizState, setQuizState, limit, setLimit } =
    useContext(QuizStateContext);
  return (
    <div className="Menu">
      <h1>Select number of Questions</h1>
      <div className="num">
        <button
          onClick={() => {
            setQuizState("playing");
            setLimit(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setQuizState("playing");
            setLimit(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            setQuizState("playing");
            setLimit(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setQuizState("playing");
            setLimit(10);
          }}
        >
          10
        </button>
      </div>
    </div>
  );
};

export default Menu;
