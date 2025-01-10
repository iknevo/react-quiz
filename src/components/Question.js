import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  const currentQuestion = questions.at(index);
  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options currentQuestion={currentQuestion} />
    </div>
  );
}
