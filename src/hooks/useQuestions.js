import { useEffect } from "react";
import questions from "../data/questions";

export default function useQuestions(dispatch) {
  const questionsList = questions;
  useEffect(() => {
    async function getQuestions() {
      try {
        // const res = await fetch("http://localhost:8000/questions");
        // const data = await res.json();
        // dispatch({ type: "dataReceived", payload: data });
        dispatch({ type: "dataReceived", payload: questionsList });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    getQuestions();
  }, [dispatch, questionsList]);
}
