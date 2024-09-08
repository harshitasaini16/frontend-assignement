import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
export const Register = ({ isDashboard, closeModal }) => {
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();
  const changeRegisterType = () => {
    setSignup(!signup);
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const closePopup = () => {
    closeModal();
  };

  return (
    <>
      <div className="main-container">
        <div className="inner-container">
          {isDashboard && (
            <span className="close-popup" onClick={closePopup}>
              <img src="/cross.svg" />
            </span>
          )}
          <div className="header">
            <h3 className="welcome">{signup ? "SIGN UP" : "WELCOME BACK"}</h3>
            <h3 className="heading">
              {signup
                ? "Create an account to continue"
                : "Log into your account"}
            </h3>
          </div>
          <div className="container-body">
            <p className="label">Email {!signup && "or Username"}</p>
            <input
              className="input-box"
              placeholder={"Enter your email" + (!signup ? " or Username" : "")}
              type="email"
            />
            {signup && (
              <>
                <p className="label">Username</p>
                <input
                  className="input-box"
                  placeholder="Choose a preferred username"
                />
              </>
            )}
            <div className="password">
              <p className="label">Password</p>
              {!signup && <p className="label forgot-pass">Forgot password?</p>}
            </div>
            <div className="input-container">
              <input
                className="input-box"
                placeholder={
                  signup ? "Choose a strong password" : "Enter your password"
                }
                type="password"
              />
              <img
                src="/eye.svg"
                className="eye-icon"
                alt="Toggle visibility"
              />
            </div>
            <button className="submit-btn" onClick={navigateToDashboard}>
              {signup ? "Continue" : "Login Now"}
            </button>
            <p className="switch-type">
              {signup ? "Already have an account" : "Log into your account"}?
              &nbsp;
              <a className="switch-link" onClick={changeRegisterType}>
                {signup ? "Login" : "Register"} →
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
