export default function Progress({
  currQuestionIndex,
  questions,
  score,
  selectedAnswer,
}) {
  const numOfQuestions = questions.length;
  const maxScore = questions.reduce((a, b) => a + b.points, 0);
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
