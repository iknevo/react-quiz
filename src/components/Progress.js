export default function Progress({
  currQuestionIndex,
  numOfQuestions,
  maxScore,
  score,
  selectedAnswer,
}) {
  return (
    <header className="progress">
      <progress
        max={numOfQuestions}
        value={currQuestionIndex + Number(selectedAnswer !== null)}
      />
      <p>
        Question{" "}
        <strong>
          {currQuestionIndex + 1} / {numOfQuestions}
        </strong>
      </p>
      <p>
        <strong>{score}</strong> / {maxScore}
      </p>
    </header>
  );
}
