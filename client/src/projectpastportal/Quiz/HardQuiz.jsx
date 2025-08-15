import React from "react";
import QuizTemplate from "./QuizTemplate";
import { hardQuestions } from "./questions";
export default function HardQuiz() {
  return <QuizTemplate title="Hard Level History Quiz" questions={hardQuestions} />;
}