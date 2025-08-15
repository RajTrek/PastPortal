
import React, { useState, useEffect } from "react";

import "./styles.css";
import { useNavigate } from "react-router-dom"


export default function QuizTemplate({ title, questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [score, setScore] = useState(null);
  const [time, setTime] = useState(50); // 10 minutes


  const currentQuestion = questions[currentIndex];
  const userAnswer = selectedAnswers[currentIndex];
  const isCorrect = userAnswer === currentQuestion.answer;

  const navigate = useNavigate();
const goBack = () => navigate("/Quiz");


  const handleAnswerChange = (index, option) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: option });
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  // const handleSubmit = () => {
  //   if (Object.keys(selectedAnswers).length < questions.length) {
  //     setErrorMsg("Please answer all questions before submitting.");
  //     return;
  //   }
  //   setErrorMsg("");
  //   setSubmitted(true);
  // };
//  useEffect(() => {
//      if (time <= 0 && score === null) {
//             autoSubmit();
//      }
//   const timer = setInterval(() => setTime((t) => t - 1), 1000);
//    return () => clearInterval(timer);
//    }, [time, score]);

const autoSubmit = () => {
  let sc = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) sc++;
  });
  setScore(sc);
  setErrorMsg("⏰ Time's up! Quiz auto-submitted.");
  setSubmitted(true);
};


useEffect(() => {
  if (submitted || time <= 0) return;

  const timer = setInterval(() => {
    setTime((prevTime) => {
      if (prevTime <= 1) {
        clearInterval(timer);
         if (!submitted) autoSubmit(); // ❌ Wrong call: change this to autoSubmit()
        return 0;
      }
      return prevTime - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [time, submitted]);


  const handleSubmit = () => {
  if (Object.keys(selectedAnswers).length < questions.length) {
    setErrorMsg("Please answer all questions before submitting.");
    return;
  }

  let sc = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i] === q.answer) sc++;
  });

  setScore(sc);
  setErrorMsg("");
  setSubmitted(true);
};

  return (

<div className="quiz">
      <h1>{title}</h1>

      <div id="sticky-timer" style={{ float: "right", fontWeight: "bold", fontSize: "18px" }}>
  Time Remaining: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
</div>


      <div className={`question ${!submitted && !userAnswer && errorMsg ? "unanswered" : ""}`}>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>
          <strong>Q{currentIndex + 1}.</strong> {currentQuestion.q}
        </p>

        <ol type="A" className="option-list">
  {currentQuestion.options.map((option, idx) => {
    const isSelected = userAnswer === option;
    const isCorrectAnswer = option === currentQuestion.answer;
    const isWrongSelected = submitted && isSelected && !isCorrectAnswer;

    return (
      <li key={idx}>
        <label
          style={{
            display: "block",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: isSelected ? "600" : "normal",
            backgroundColor: submitted
              ? isCorrectAnswer
                ? "#d4edda" // green for correct
                : isWrongSelected
                ? "#f8d7da" // red for wrong selected
                : "#fff"
              : "#fff",
            color: submitted
              ? isCorrectAnswer
                ? "#155724"
                : isWrongSelected
                ? "#721c24"
                : "#333"
              : "#333",
            border: submitted
              ? isCorrectAnswer
                ? "2px solid #28a745"
                : isWrongSelected
                ? "2px solid #dc3545"
                : "1px solid #ccc"
              : "1px solid #ccc",
            marginBottom: "8px",
            fontSize: "18px",
          }}
        >
          <input
            type="radio"
            name={`question-${currentIndex}`}
            value={option}
            checked={isSelected}
            onChange={() => handleAnswerChange(currentIndex, option)}
            disabled={submitted}
            style={{ marginRight: "10px" }}
          />
          {option}
        </label>
      </li>
    );
  })}
</ol>

      

        {/* ✅ Feedback below options */}
        {/* {submitted && (
          <p
            style={{
              marginTop: "12px",
              fontSize: "18px",
              fontWeight: "600",
              color: isCorrect ? "#28a745" : "#dc3545",
            }}
          >
            {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
          </p>
        )} */}

        {submitted && (
  <>
    <p
      style={{
        marginTop: "12px",
        fontSize: "18px",
        fontWeight: "600",
        color: isCorrect ? "#28a745" : "#dc3545",
      }}
    >
      {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
    </p>

    {!isCorrect && (
      <p
        style={{
          marginTop: "4px",
          fontSize: "16px",
          fontWeight: "500",
          color: "#555",
        }}
      >
        ✅ Correct answer:{" "}
        <strong>
          {String.fromCharCode(65 + currentQuestion.options.indexOf(currentQuestion.answer))}.
          {" "}{currentQuestion.answer}
        </strong>
      </p>
    )}
  </>
)}

      </div>

      {errorMsg && <div className="error-message">{errorMsg}</div>}

      <div className="nav-buttons" style={{ marginTop: "20px" }}>
         <button onClick={goBack} style={{ marginRight: "10px" }}>
    ⬅ Back to Quiz Home
  </button>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          Next
        </button>
        {currentIndex === questions.length - 1 && !submitted && (
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: "#007b5e", color: "#fff", marginLeft: "10px" }}
          >
            Submit Quiz
          </button>
        )}
      </div>

      {submitted && (
  <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "600" }}>
    🎉 You scored {score} out of {questions.length}
  </div>
)}


      {/* ✅ Progress bar at bottom */}
      <div className="progress-bar-under" style={{ marginTop: "20px" }}>
        <div className="progress-label">
          {submitted
            ? "Quiz Completed"
            : `Question ${currentIndex + 1} of ${questions.length}`}
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              height: "8px",
              backgroundColor: "#007b5e",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
