import React, { useEffect, useState } from "react";
import QuizTemplate from "./QuizTemplate";

export default function MedievalQuiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          "https://the-trivia-api.com/v2/questions?categories=history&limit=10&difficulties=medium"
        );
        const data = await res.json();

        const formatted = data.map((q) => ({
          q: q.question.text,
          options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
          answer: q.correctAnswer,
        }));

        setQuestions(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Medieval questions:", err);
      }
    }

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading Medieval History Quiz...</p>;

  return <QuizTemplate title="Medieval History Quiz" questions={questions} />;
}