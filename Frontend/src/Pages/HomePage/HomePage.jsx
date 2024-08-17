import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-ts">
      <div className="homepage-ts-container">
        <h1>Login Or SignUp As ?</h1>
        <div className="homepage-ts-fields">
          <Link to="/Teacher/loginSignup">
            <button className="homepage-ts-button">Teacher</button>
          </Link>
          <Link to="/Student/loginSignup">
            <button className="homepage-ts-button">Student</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;