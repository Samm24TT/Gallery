import { useState } from "react";
import "./Authpage.css";
import { auth, signInWithEmailAndPassword } from "../firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignIn() {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError(err.message);
      }
    }
  }

  return (
    <div className="input-group">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="input-box">
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="ENTER EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="ENTER PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn} className="submitBtn">
        Sing In
      </button>
    </div>
  );
}
