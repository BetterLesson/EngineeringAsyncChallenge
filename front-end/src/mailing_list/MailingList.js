import React, { useState } from "react";

import Container from 'react-bootstrap/Container';


export default function MailingList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  function validateName(e) {
    if (e.target.value.length > 1) {
      e.target.className = 'form-control is-valid';
      setNameError(true);
    } else {
      e.target.className = 'form-control is-invalid';
      setNameError(false);
    }
    setName(e.target.value);
  }

  function validateEmail(e) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if (e.target.value.match(pattern)) {
      e.target.className = 'form-control is-valid';
      setEmailError(false);
    } else {
      e.target.className = 'form-control is-invalid';
      setEmailError(true);
    }
    setEmail(e.target.value)
  }

  function signUp() {
    console.log('Name: ', name);
    console.log('Email: ', email)
  } 
  
  return (
    <div id="mailing_list">
      <Container>
        <div className="text-intro">
          <h2>Mailing List</h2>
          <p>Joing our mailing list.</p>
        </div>
        <div className="mailing_form">
          <div className="inner_mailing_form form-group">
            <div className="form-floating">
              <input 
                type="text" 
                className="form-control" 
                id="nameInput" 
                value={name} 
                onChange={(e) => {validateName(e)}}
                placeholder="Your name"
                required />
              <label htmlFor="nameInput">Name</label>
            </div>
            <div className="form-floating">
              <input 
                type="email" 
                className="form-control is_invalid" 
                id="emailInput" 
                value={email} 
                onChange={(e) => {validateEmail(e)}}
                placeholder="name@example.com"
                required />
              <label htmlFor="emailInput">Email address</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" onClick={signUp}>Sign up</button>
          </div>
        </div>
      </Container>
    </div>
  )
}