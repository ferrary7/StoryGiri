import React from "react";
import "./signinForms.css";
import google from "../assets/google.svg";
import { auth, provider } from "./Firebase/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginWithGoogle({ setUser, user }) {
  let navigate = useNavigate();
  function signInWithGoogle(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // setUser({ result });
        localStorage.setItem("isLoggedIn", true);
        console.log("You have successfully Logged In!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/");
        localStorage.removeItem("isLoggedIn", false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container signup-container">
      <h1 className="heading">Log in</h1>
      <form action="/" className="login-form">
        {!localStorage.getItem("isLoggedIn") ? (
          <button
            className="primary-btn full form-btn google-btn"
            onClick={signInWithGoogle}
          >
            <img src={google} alt="Google Logo" className="google-logo" />
            Log in with Google
          </button>
        ) : (
          <>
            <p
              style={{
                "font-size": "16px",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              You are Logged In
            </p>
            <button
              className="primary-btn full form-btn google-btn"
              onClick={logOut}
            >
              <img src={google} alt="Google Logo" className="google-logo" />
              Log Out
            </button>
          </>
        )}
      </form>
    </div>
  );
}
