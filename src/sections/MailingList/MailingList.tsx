import React, { useState } from 'react';
import { isValidEmail, isValidFullName } from '../../utils/functions';

const MailingList = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('esports');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredFullName = e.target.value;
    setFullName(enteredFullName);
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const enteredIndustry = e.target.value;
    setIndustry(enteredIndustry);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidFullName(fullName) && !isValidEmail(email)) {
      setErrorMessage('Please enter a valid full name and email address');
      return;
    }

    if (!isValidFullName(fullName)) {
      setErrorMessage('Please enter a valid full name');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setFormSubmitted(true);

    console.log('Full Name:', fullName, 'Email:', email, 'Industry:', industry);

    setFullName('');
    setEmail('');
    setIndustry('esports');
    setErrorMessage('');
  };

  return (
    <section
      id="mailing-list"
      className="mt-10 tablet:mt-20"
    >
      <div className="relative flex justify-center h-auto bg-center bg-cover bg-mailing-list">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-blue-800 opacity-50"></div>
        <div className="z-10 py-5 laptop:py-10">
          <h3 className="mb-4 text-xl font-bold text-center text-white tablet:text-2xl">
            Join our mailing list
          </h3>
          <form
            className="flex flex-col w-4/5 gap-4 p-4 mx-auto text-sm rounded-lg tablet:flex-row tablet:items-center bg-slate-200"
            onSubmit={handleSubmit}
          >
            <div className="text-base tablet:flex-1">
              <div className="mb-2">
                <label htmlFor="fullName">Full Name</label>
                <br />
                <input
                  className="w-full p-1"
                  type="text"
                  id="fullName"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={handleFullNameChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="w-full p-1"
                  onChange={handleEmailChange}
                  type="email"
                  id="email"
                  placeholder="jane_doe@gmail.com"
                  value={email}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="industry">Industry</label>
                <br />
                <select
                  className="w-full p-1"
                  id="industry"
                  value={industry}
                  onChange={handleIndustryChange}
                >
                  <option value="esports">E-Sports</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                </select>
              </div>
              {errorMessage && (
                <p className="mt-4 text-lg font-bold text-center text-red-600">
                  {errorMessage}
                </p>
              )}
              {formSubmitted && (
                <p className="mt-4 text-lg font-bold text-center text-blue-600">
                  Thank you for signing up!
                </p>
              )}
            </div>

            <div className="flex-1">
              <p className="mb-4 text-center tablet:text-base laptop:text-xl">
                Join our mailing list to receive notifications about program
                availability and special discounts
              </p>
              <div className="flex justify-center">
                {' '}
                <button
                  className="px-4 py-2 text-white bg-blue-800 tablet:px-6"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailingList;
