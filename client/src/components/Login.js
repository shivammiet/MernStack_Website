import React from 'react';
import { NavLink } from 'react-router-dom';
import loginpic from "../image/logo2.jpeg";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container mt-5">
          <h2 className="login-header">Login to Your Account</h2>
          <div className="login-content">
            <div className="login-form">
              <form className="login-form" id="login-form">
                <div className="form-group">
                  <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" />
                </div>
                <button type="submit">Login</button>
              </form>
              <p className="signup-link">
                Don't have an account? <NavLink to="/signup">Sign up here</NavLink>
              </p>
            </div>
            <div className="login-image">
              <figure>
                <img src={loginpic} alt="login pic" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
