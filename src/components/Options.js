import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Options({ currentQuestion }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {currentQuestion.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === currentQuestion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "selectAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
