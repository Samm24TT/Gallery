import { useState } from "react";
import "./Authpage.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Authpage() {
  const [tab, setTab] = useState("signin");

  return (
    <div className="auth-page">
      <div className="box-container">
        <div className="header">
          <p className="logo">🌛</p>
          <h2>Lady Midnight</h2>
          <p className="text">private gallery</p>
        </div>
        <div className="auth-buttons">
          <button
            className={`authBtn${tab == "signup" ? " active" : ""}`}
            onClick={() => setTab("signup")}
          >
            SIGN UP
          </button>

          <button
            className={`authBtn${tab == "signin" ? " active" : ""}`}
            onClick={() => setTab("signin")}
          >
            SIGN IN
          </button>
        </div>
        {tab == "signin" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}
