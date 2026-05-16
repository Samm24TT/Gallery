import { useState } from "react";
import "./Authpage.css";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!name || !email || !password)
      return setError("Please fill all the form.");
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(data.user, { displayName: name });
      console.log(data.user.displayName);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="input-group">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="input-box">
        <label>DISPLAY NAME</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className="input-box">
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="you@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="input-box">
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Min. 6 characters"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button onClick={handleSubmit} className="submitBtn">
        CREATE ACCOUNT
      </button>
    </div>
  );
}
