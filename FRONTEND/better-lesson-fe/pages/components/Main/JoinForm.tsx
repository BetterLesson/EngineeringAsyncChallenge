import React, {useState} from 'react';
import styles from './JoinForm.module.css'

export interface SignUpData {
    fullName: string;
    emailAddress: string;
    industry: string;
  }
  
const JoinForm = ({}) => {
    const [industry, setIndustry] = useState<string>("just a banana");
    const [fullName, setFullName] = useState<string>("John Doe");
    const [email, setEmail] = useState<string>("myEmail@email.com");

    // this DOES show up in the console but only for a BRIEF moment. Use those peepers!!!
    const handleSubmit = () => {
        //tbh any library would do a WAY better job at handling this.
        if(fullName.length === 0 || email.length === 0){
            alert('You did not submit an email or name in the form area. Please fill those out to get on the mailing list. Thannnks.')
            return;
        }
        console.log('industry: ', industry)
        console.log('full name: ', fullName)
        console.log('email: ', email) 
      }
    
    return (
        <form className={styles.form} onSubmit={() => handleSubmit()}>
            <label>
                Full Name {' '}
                <input className={styles.label} type='text' value={fullName} onChange={event => setFullName(event.target.value)} />
            </label>
            <label>
                Email {' '}
                <input className={styles.label}  type='email' value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
            Industry {' '}
                <select className={styles.label} value={industry} onChange={event => setIndustry(event.target.value)}>
                    <option value="just a banana">Just A Banana</option>
                    <option value="Bod Ross Enthusiast">Bod Ross Enthusiast</option>
                    <option value="buffet friend">Buffet Friend</option>
                    <option value="goat herder">Goat Herder</option>
                </select>
            </label>
            <input className={styles.button} type="submit" value="Submit" />
        </form>
    );
}

export default JoinForm;