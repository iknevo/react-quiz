import React from "react";

export default function Options({ currentQuestion }) {
  return (
    <div className="options">
      {currentQuestion.options.map((option, i) => (
        <button className="btn btn-option" key={i}>
          {option}
        </button>
      ))}
    </div>
  );
}
