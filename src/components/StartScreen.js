export default function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React skills</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Let's start
      </button>
    </div>
  );
}
