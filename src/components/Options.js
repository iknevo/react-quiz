import React from "react";

export default function Options({ currentQuestion, dispatch, answer }) {
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
