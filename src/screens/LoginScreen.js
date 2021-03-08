import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [sighIn, setSighIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__Background">
        <img
          className="loginScreen__logo"
          src="https://lh3.googleusercontent.com/proxy/InC0kKphhAHwCOZQv3NprtZK4o9_0NWtMQ5jeqflnIk5Rb8psQAzrXbezZQLYUrIdIipkaxfsneM1aB3DHeo9IHpBMvhBgXY9Dowl2AW1O3Xb7nn-as"
          alt=""
        />

        <button
          onClick={() => {
            setSighIn(true);
          }}
          className="loginScreen__button"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {sighIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited fims , TV programmes and more.</h1>
              <h2>Watch anywhere.Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button
                    onClick={() => {
                      setSighIn(true);
                    }}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
