import React from 'react';
import { NavLink } from 'react-router-dom'; // Correct import for NavLink
import signpic from "../image/logo2.jpeg";

const Signup = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" name="phone" id="phone" autoComplete="off" placeholder="Your Phone Number" />
                </div>
                <div className="form-group">
                  <input type="text" name="profession" id="profession" autoComplete="off" placeholder="Your Work Profession" />
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password" />
                </div>
                <div className="form-group">
                  <input type="password" name="confirmPassword" id="confirmPassword" autoComplete="off" placeholder="Confirm Password" />
                </div>
                {/* Add more form fields as needed */}
                <button type="submit">Register</button>
              </form>
            </div>
            {/* Add more content or components as needed */}
          </div>
          {/* Add more content or components as needed */}
        </div>
        <div className="signup-image"> {/* Corrected class name */}
          <figure>
            <img src={signpic} alt="registration pic" />
          </figure>
          <NavLink to="/login" className="signup-image-link">Go to Login</NavLink> {/* Corrected component name and added correct class name */}
        </div>
      </section>
    </>
  );
};

export default Signup;
