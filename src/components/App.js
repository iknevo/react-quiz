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
    case "nextQuestion":
      return {
        ...state,
        currQuestionIndex: state.currQuestionIndex + 1,
        selecedAnswer: null,
      };
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
  const [
    { questions, status, currQuestionIndex, selecedAnswer, score },
    dispatch,
  ] = useReducer(reducer, initialState);

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
              questions={questions}
              score={score}
            />
            <Question
              currentQuestion={questions.at(currQuestionIndex)}
              dispatch={dispatch}
              answer={selecedAnswer}
            />
            <NextButton dispatch={dispatch} answer={selecedAnswer} />
          </>
        )}
      </Main>
    </div>
  );
}
