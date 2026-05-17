import "./App.css";
import Authpage from "./pages/Authpage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth, onAuthStateChanged, signOut } from "./firebase";
import Gallery from "./pages/Gallery";

export default function App() {
  const [user, setUser] = useState(null);
  // currentUser = "samuel"
  // setUser(currentUser)
  // user = "samuel"

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsub()
  }, [])

  async function onSignOut() {
    await signOut(auth)
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Authpage />}
        />
        <Route
          path="/"
          element={
            user ? (
              <Gallery handleSignOut={onSignOut} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
