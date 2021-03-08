import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const resister = (e) => {
    e.preventDefault();
    //Register the user with emailRef and passwordRef
    auth
      .createUserWithEmailAndPassword(
        //way to fetch data from emailRef
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("registered");
      })
      .catch((error) => {
        alert(error.message);
      });
  };


  const signIn = (e) => {
    e.preventDefault();
    //sign in with provided email and password
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={resister}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
