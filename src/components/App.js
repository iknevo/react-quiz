import { useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import useQuestions from "../hooks/useQuestions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  currQuestionIndex: 0,
  selecedAnswer: null,
  score: 0,
  highScore: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "selectAnswer":
      const question = state.questions.at(state.currQuestionIndex);
      return {
        ...state,
        selecedAnswer: action.payload,
        score:
          action.payload === question.correctOption
            ? state.score + question.points
            : state.score,
      };
    case "nextQuestion":
      return {
        ...state,
        currQuestionIndex: state.currQuestionIndex + 1,
        selecedAnswer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.score > state.highScore ? state.score : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        highScore: state.highScore,
        questions: state.questions,
        status: "ready",
      };
    default:
      throw new Error("Unknown action!");
  }
}

export default function App() {
  const [
    { questions, status, currQuestionIndex, selecedAnswer, score, highScore },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length;
  const maxScore = questions.reduce((a, b) => a + b.points, 0);

  useQuestions(dispatch);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              currQuestionIndex={currQuestionIndex}
              numOfQuestions={numOfQuestions}
              maxScore={maxScore}
              score={score}
              selecedAnswer={selecedAnswer}
            />
            <Question
              currentQuestion={questions.at(currQuestionIndex)}
              dispatch={dispatch}
              answer={selecedAnswer}
            />
            <NextButton
              dispatch={dispatch}
              answer={selecedAnswer}
              currentQuestionIndex={currQuestionIndex}
              numOfQuestions={numOfQuestions}
            />
          </>
        )}
        {status === "finished" && (
          <>
            <FinishScreen
              score={score}
              maxScore={maxScore}
              highScore={highScore}
              dispatch={dispatch}
            />
          </>
        )}
      </Main>
    </div>
  );
}
