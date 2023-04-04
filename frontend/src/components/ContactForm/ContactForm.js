import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function handleDropdownChange(event) {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      selectedOption.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Form submitted:", { name, email, selectedOption });
  };

  return (
    <div className="form-container">
      <h1 className="form-headline">Join our mailing list</h1>

      <div className="form">
        <div className="form-left">
          <div>
            <form onSubmit={handleSubmit} id="contact-form">
              <div>
                <label htmlFor="name">Full Name</label>
                <div>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
              <div>
                {" "}
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="dropdown">Industry:</label>
                <div>
                  <select
                    id="dropdown"
                    name="dropdown"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                  >
                    <option value="E-Sports">E-Sports</option>
                    <option value="Sports/Fitness">Sports/Fitness</option>
                    <option value="Professional Services">
                      Professional Services
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="form-right">
          <div className="form-text">
            Join our mailing to receive notifications about program availability
            and special discounts
          </div>
          <div>
            <button
              type="submit"
              form="contact-form"
              className="contact-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
