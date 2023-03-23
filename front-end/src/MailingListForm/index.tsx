import React, { useState } from 'react'
import './index.css'

export const MailingListForm = () => {

    const [ hasError, setHasError] = useState<boolean>(false)
    const [ successfulSubmission, setSuccessfulSubmission] = useState<boolean>(false)
    const onSubmit = (e: any) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const industry = e.target.industry.value;

        if (!name || !email || !industry) {
           setHasError(true)
        } else {
            setHasError(false);
            setSuccessfulSubmission(true);
            console.log({ name, email, industry });
        }
    }
    return (
        <div className="mailingList">
        <h1>Join our mailing list</h1>
        <form onSubmit={onSubmit}>
            <div className="mailingListInput">
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder="Jane Doe" name="name" />
            </div>
            <div className="mailingListInput">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="jane_doe@email.com" name="email" />
            </div>
            <div className="mailingListInput">
                <label htmlFor="industry">Industry</label>
                <select name="industry">
                    <option value="e-sports">E-Sports</option>
                    <option value="sports/fitness">Sports/Fitness</option>
                    <option value="professionalServices">Professional Services</option>
                </select>
            </div>
            <button type="submit">Sign Up</button>

            { hasError && <p>Please fill out the entire form!</p> }
            { successfulSubmission && <p>Successfully submitted</p> }
        </form>
        </div>
    )
}
