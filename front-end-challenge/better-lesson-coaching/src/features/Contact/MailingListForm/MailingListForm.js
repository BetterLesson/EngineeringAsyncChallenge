import { useState } from 'react';
import Button from '../../../components/Button/Button';
import './MailingListForm.css';

const DROPDOWN_OPTIONS = ['E-Sports', 'Professional Services', 'Sports/Fitness'];

export default function MailingListForm() {
  const [formValue, setFormValue] = useState({ fullName: '', email: '', industry: 'E-Sports' });
  const [formError, setFormError] = useState({ fullName: false, email: false });
  const [formSubmitted, setFormSubmitted] = useState(false);



  const handleFormChange = ({ target }) => {
    setFormValue({...formValue, [target.name]: target.value });
  };

  const handleSubmit = () => {
    const newFormError = {
      fullName: !/^[a-z ,.'-]+$/i.test(formValue.fullName),
      email: !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formValue.email),
    };
    
    if(Object.values(newFormError).every(hasError => !hasError)){
      console.log(formValue);
      setFormSubmitted(true);
    }
    
    setFormError(newFormError);
  };

  const renderErrorMessage = (message) => (
    <div className="form-error" data-testid="form-error">
      {message}
    </div>
  );

  const renderForm = () => (
    <>
      <div className="form-title" data-testid="form-title">Join Our Listing Mail</div>
      <div className="form-container">
        <div className="form-inputs">
          <label>
            Full Name
            <input
              data-testid="name-input"
              name="fullName"
              type="text"
              value={formValue.fullName}
              onChange={handleFormChange}
            />
              {formError.fullName && renderErrorMessage('Please Enter a Valid Name')}
          </label>
          
          <label>
            Email
            <input
              data-testid="email-input"
              name="email"
              type="email"
              value={formValue.email}
              onChange={handleFormChange}
            />
              {formError.email && renderErrorMessage('Please Enter a Valid Email')}
          </label>

          <label>
            Industry
              <select
                data-testid="industry-dropdown"
                name="industry"
                value={formValue.industry}
                onChange={handleFormChange}
              >
                {DROPDOWN_OPTIONS.map(dropdownOption => (
                  <option key={dropdownOption} data-testid="option">{dropdownOption}</option>
                ))}
              </select>
          </label>
        </div>

        <div className="form-confirm">
          <div className="form-text" data-testid="form-text">
            Join our mailing to recieve notifications about program availability and special discounts
          </div>

          <Button text="Sign Up" onClick={handleSubmit}/>
        </div>
      </div>
    </>
  );

  const renderFormSubmitted = () => (
    <div className="form-success" data-testid="form-success">
      <div>Form Has Been Successfully Submitted</div>
      <div>&#10003;</div>
    </div>
  )

  return (
    <div className="mailing-form-container">
      {formSubmitted ? renderFormSubmitted() : renderForm()}
    </div>
  );
}

