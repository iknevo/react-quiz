export default function Progress({ currQuestionIndex, questions, score }) {
  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((a, b) => a + b.points, 0);
  return (
    <header className="progress">
      <p>
        Question{" "}
        <strong>
          {currQuestionIndex + 1} / {numOfQuestions}
        </strong>
      </p>
      <p>
        <strong>{score}</strong> / {maxPoints}
      </p>
    </header>
  );
}
