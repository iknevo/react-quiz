import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
  const { numOfQuestions, dispatch, secondsPerQuestion } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React skills </h3>
      <h4>You got {secondsPerQuestion} seconds for every question</h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Let's start
      </button>
    </div>
  );
}
