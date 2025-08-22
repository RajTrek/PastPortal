import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import quizHomeBg from "../images/quizhome6..png"; // ✅ adjust path if needed

export default function Home() {
  console.log("✅ QuizHome component rendered");
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${quizHomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // keep aligned left
        justifyContent: "center",
        paddingLeft: "60px", // ✅ applies only to h1 area
        color: "black",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      }}
    >
      <h1 style={{ marginBottom: "20px", paddingLeft:"0px" }}>Welcome to the History Quiz</h1>

      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          paddingLeft: "80px", // ✅ extra left padding only for buttons
        }}
      >
        <Link to="/quiz/easy" className="btns">Ancient</Link>
        <Link to="/quiz/moderate" className="btns">Medieval</Link>
        <Link to="/quiz/hard" className="btns">Modern</Link>
      </div>
    </div>
  );
}
