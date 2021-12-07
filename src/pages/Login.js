import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import "./Login.css";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo-netflix"
        />
        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login__gradient"></div>
      </div>

      <div className="login__body">
        {signIn ? (
          <SignInForm />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__input__container">
              <form>
                <input
                  className="login__input"
                  type="email"
                  placeholder="Email Address"
                />
                <button
                  className="login__getstarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
