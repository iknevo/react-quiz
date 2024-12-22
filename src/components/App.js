import { useReducer } from "react";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import useQuestions from "../hooks/useQuestions";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
  currQuestionIndex: 0,
  selecedAnswer: null,
  score: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "nexQuestion":
      return { ...state, currQuestionIndex: state.currQuestionIndex + 1 };
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
    default:
      throw new Error("Unknown action!");
  }
}

export default function App() {
  const [{ questions, status, currQuestionIndex, selecedAnswer }, dispatch] =
    useReducer(reducer, initialState);
  const numOfQuestions = questions.length;

  useQuestions(dispatch);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            currentQuestion={questions.at(currQuestionIndex)}
            dispatch={dispatch}
            answer={selecedAnswer}
          />
        )}
      </Main>
    </div>
  );
}
