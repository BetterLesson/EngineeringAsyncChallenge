import React, { useState } from 'react';
import { cleanName, isValidEmail, isEmptyInput } from '../utils/helper';

function MailingListdiv(props) {

    const [selectedOption, setSelectedOption] = useState('');
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validSelection, setValidSelection] = useState(false);
    const [touched, setTouched] = useState(false);

    const options = [
        'Technology',
        'Finance',
        'Healthcare',
        'Education',
        'Retail'
      ];

      const handleOptionClick = (event) => {
        setSelectedOption(event.target.value);
        
      };
      const handleNameChange = (event)=>{
        setFullname(cleanName(event.target.value));
      };
      const handleEmailChange = (event) =>{
        setEmail(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault(); 
        const checkName = isEmptyInput(fullName);
        const checkEmail = isValidEmail(email);
        const emptyEmail = isEmptyInput(email);
        const checkIndustry = isEmptyInput(selectedOption);
        
        if(checkEmail || checkIndustry || checkName || emptyEmail ){
          setTouched(true);
          setValidEmail(checkEmail || emptyEmail);
          setValidName(checkName);
          setValidSelection(checkIndustry);
          return;
        }
        setTouched(false);
          setValidEmail(false);
          setValidName(false);
          setValidSelection(false);
  
      setFormData({
            fullName: fullName,
            emailAddress: email,
            industry: selectedOption
        }, logData);
      
      };
      const logData = ()=>{
        console.log({
            fullName:fullName,
            emailAddress:email,
            industry:selectedOption,
            emotion:'😃'
        });
      };
      const setFormData = (data, callback) => {
        setSelectedOption(data.industry);
        setFullname(data.fullName);
        setEmail(data.emailAddress);
        callback();
      };

    return (
            <form className={myStyles.form}>  
                <section className='flex flex-col'>
                    <input id='name' required className={myStyles.inputs} name='username' type='text' placeholder='Full Name' onChange={handleNameChange} />
                    {touched && validName && <span>Please enter your name</span>}
                    <input className={myStyles.inputs} name='email' type='email' placeholder='Email' onChange={handleEmailChange}  required/>
                    {touched && validEmail && <span>Please enter a valid email</span>}
                    <section className='flex flex-col relative'>
                        <select required className={myStyles.inputs} type='text' value={selectedOption? selectedOption : 'Industry'} onChange={handleOptionClick}>
                        <option value="Industry" disabled hidden>Industry</option>
                            {
                                options.map((option,id)=>{
                                    return <option key={id} value={option}> {option} </option> 
                                })
                            }
                        </select>
                        {touched && validSelection && <span>Please select an Industry</span>}
                    </section>
                </section>
                <section className='flex flex-col items-center ' >
                    <span className='text-white break-normal text-center font-semibold w-96 text-3xl'>
                        Join our mailing to recieve notifications about program availabilty and special discounts
                    </span>
                    <button type='submit' className={myStyles.signUpButton} onClick={handleSubmit}> Sign Up </button>    
                </section>
            </form>
    );
}

export default MailingListdiv;

const myStyles ={


    inputs:`
        text-black
        m-5
        p-3
        rounded-xl
        w-80
        `,
    signUpButton:`
        font-semibold
        text-2xl
        bg-green-700
        p-2
        pl-5
        pr-5
        m-5
        rounded-md
        drop-shadow-xl
    `,
    form:`
    self-center
    p-20
    items-center
    justify-center
    backdrop-blur
    bg-white/20 
    border-r-1
    rounded-3xl 
    shadow-2xl 
    font-sans
    drop-shadow-lg
    flex 
    flex-row
    w-3/5
    h-3/5`
    
}