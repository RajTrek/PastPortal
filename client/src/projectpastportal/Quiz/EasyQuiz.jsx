// import React, { useEffect, useState } from "react";
// import QuizTemplate from "./QuizTemplate";

// export default function AncientQuiz() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchQuestions() {
//       try {
//         // Using Trivia API with "history" category, filter by Ancient (you can add tags if API supports)
//         const res = await fetch(
//           "https://the-trivia-api.com/v2/questions?categories=history&limit=10&difficulties=easy"
//         );
//         const data = await res.json();

//         const formatted = data.map((q) => ({
//           q: q.question.text,
//           options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
//           answer: q.correctAnswer,
//         }));

//         setQuestions(formatted);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching Ancient questions:", err);
//       }
//     }

//     fetchQuestions();
//   }, []);

//   if (loading) return <p>Loading Ancient History Quiz...</p>;

//   return <QuizTemplate title="Ancient History Quiz" questions={questions} />;
// }


import React, { useEffect, useState } from "react";
import QuizTemplate from "./QuizTemplate";
import ancientBg from "../images/quizbg.jpg"; // ✅ adjust path/filename

export default function AncientQuiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          "https://the-trivia-api.com/v2/questions?categories=history&limit=10&difficulties=easy"
        );
        const data = await res.json();

        const formatted = data.map((q) => ({
          q: q.question.text,
          options: [...q.incorrectAnswers, q.correctAnswer].sort(
            () => Math.random() - 0.5
          ),
          answer: q.correctAnswer,
        }));

        setQuestions(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Ancient questions:", err);
      }
    }

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading Ancient History Quiz...</p>;

  return (
    <div
      style={{
        backgroundImage: `url(${ancientBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <QuizTemplate title="Ancient History Quiz" questions={questions} />
    </div>
  );
}
