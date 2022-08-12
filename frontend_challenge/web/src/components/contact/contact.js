import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact_form">
      <label form="full_name">Full Name</label>
        <input type="text" id="full_name" name="full_name"></input>
      <label form="email">Email</label>
        <input type="text" id="email" name="email"></input>
      <select name="industry">
          <option value="professional_services">Professional Services</option>
          <option value="e_sports">E-Sports</option>
          <option value="sports_fitness">Sports/Fitness</option>
      </select>
    </div>
  );
};

export default Contact;