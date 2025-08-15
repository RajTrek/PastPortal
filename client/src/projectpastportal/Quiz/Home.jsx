import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  console.log("✅ QuizHome component rendered");
  return (
    <div className="home">
      <h1>Welcome to the History Quiz</h1>
       <Link to="/quiz/easy" className="btns">Ancient</Link>
      <Link to="/quiz/moderate" className="btns">Medieval</Link>
      <Link to="/quiz/hard" className="btns">Hard</Link>
    </div>
  );
}