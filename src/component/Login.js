import React from "react";
import "./Login.css";
import { useState } from "react";
const Login = () => {
  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  return (
    <>
      {change ? (
        <div className="loginContainer">
          <h2 style={{ color: "white" }} className="Login">
            Login
          </h2>
          <input className="email" type="text" placeholder="Email address" />
          <input className="password" type="text" placeholder="Password" />
          <button className="loginButton">Login to your account</button>
          <div className="loginText">
            <div style={{ color: "white" }} className="whiteText">
              Don't have an accout?
              <span
                onClick={handleChange}
                className="redText"
                style={{ color: "red", marginLeft: 5 }}
              >
                Sign Up
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: 500 }} className="loginContainer">
          <h2 style={{ color: "white" }} className="Login">
            Login
          </h2>
          <input className="email" type="text" placeholder="Email address" />
          <input className="password" type="text" placeholder="Password" />
          <input
            className="repeatpassword"
            type="text"
            placeholder="Repeat password"
          />
          <button className="loginButton">Create an account</button>
          <div className="loginText">
            <div style={{ color: "white" }} className="whiteText">
              Allready have an accout?
              <span
                onClick={handleChange}
                className="redText"
                style={{ color: "red", marginLeft: 5 }}
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
