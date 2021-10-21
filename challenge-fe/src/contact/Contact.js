import React from 'react';
import './Contact.css';
import Form from './form/Form';

export const Contact = () => {
    return (
        <div className="ContactContainer">
            <div className="ContactCell">
                <Form />
            </div>
            <div className="ContactCell">
                <div className="ContactFormDescription">
                    Join our mailing list to receive
                    notifications about program  <br />
                    availability and special discounts
                </div>
            </div>
        </div >
    );
}

