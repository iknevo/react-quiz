import React from "react";
import Options from "./Options";

export default function Question({ currentQuestion }) {
  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options currentQuestion={currentQuestion} />
    </div>
  );
}
