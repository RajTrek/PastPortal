import React from "react";
import QuizTemplate from "./QuizTemplate";
import { easyQuestions } from "./questions";
export default function EasyQuiz() {
  return <QuizTemplate title="Easy Level History Quiz" questions={easyQuestions} />;
}