export default function NextButton({
  dispatch,
  answer,
  currentQuestionIndex,
  numOfQuestions,
}) {
  if (answer === null) return;
  if (currentQuestionIndex < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (currentQuestionIndex === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
