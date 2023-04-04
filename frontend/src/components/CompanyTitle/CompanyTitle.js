import React from "react";
import "./CompanyTitle.css";

function handleClick() {
  console.log("Register Now Button Clicked");
}

function CompanyTitle() {
  return (
    <div className="company-title-container">
      <div className="company-title">
        <div>
          <img
            src="/favicon.ico"
            alt="Company Logo"
            className="company-title__logo"
          />
        </div>
        <div className="company-title__text">
          <h1>Better Lesson</h1>
          <h1>Professional Coaching</h1>
        </div>

        <div className="company-title__tagline">
          <h2>PROFESSIONAL COACHING SEMINARS & MENTORSHIP</h2>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="register-button"
            disabled={false}
          >
            {" "}
            Register Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyTitle;
