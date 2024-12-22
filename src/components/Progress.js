export default function Progress({
  index,
  numOfQuestions,
  maxScore,
  score,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numOfQuestions}
        </strong>
      </p>
      <p>
        <strong>{score}</strong> / {maxScore}
      </p>
    </header>
  );
}
