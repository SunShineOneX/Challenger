import React from "react";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="container">
      <div className="landing">
        <h1>Hello landing!!</h1>
        <img src={require("../assets/CHALLENGER.png")} />
        <button>Get started</button>
      </div>
    </div>
  );
}

export default Landing;
