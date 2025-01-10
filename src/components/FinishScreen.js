import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { score, maxScore, highScore, dispatch } = useQuiz();
  const percentage = (score / maxScore) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🧐";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <div className="finish">
      <p className="result">
        <span>{emoji}</span> You scored <strong>{score}</strong> out of{" "}
        {maxScore} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highest Score: {highScore} points</p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </div>
  );
}
