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

    default:
      throw new Error("Unknown action!");
  }
}

export default function App() {
  const [{ questions, status, currQuestionIndex }, dispatch] = useReducer(
    reducer,
    initialState
  );
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
          <Question currentQuestion={questions.at(currQuestionIndex)} />
        )}
      </Main>
    </div>
  );
}
