import React, { useState } from 'react'

export const MailingListForm = () => {

    const [ hasError, setHasError] = useState<boolean>(false)
    const onSubmit = (e: any) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const industry = e.target.industry.value;

        if (!name || !email || !industry) {
           setHasError(true)
        } else {
            setHasError(false);
            console.log({ name, email, industry });
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Jane Doe" name="name" />
            <input type="text" placeholder="jane_doe@email.com" name="email" />
            <select name="industry">
                <option value="e-sports">E-Sports</option>
                <option value="sports/fitness">Sports/Fitness</option>
                <option value="professionalServices">Professional Services</option>
            </select>
            <button type="submit">Sign Up</button>

            { hasError && <p>Please fill out the entire form!</p> }
        </form>
    )
}
