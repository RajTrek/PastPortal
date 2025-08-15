import React from "react";
import QuizTemplate from "./QuizTemplate";
import { moderateQuestions } from "./questions";
export default function ModerateQuiz() {
  return <QuizTemplate title="Moderate Level History Quiz" questions={moderateQuestions} />;
}