import React from 'react';
import myLogo from "../assets/myLogo.png"

function RegisterSection(props) {
    return (
        <section className={myStyles.sectionContent}>
            <section className={[myStyles.sections]}>
                <img src={myLogo} alt="myLogo" className='w-20 '/>
                <h1 className={[myStyles.sectionOneTextMessage, myStyles.sectionOne]}> 
                    {registerInfo.companyName}
                </h1>
                <h1 className={[myStyles.sectionOneTextMessage, myStyles.sectionOne]}> 
                    {registerInfo.sectionMessage}
                </h1>
                <h2 className={[myStyles.subMessageText, myStyles.sectionOne]}>
                    {registerInfo.subMessage}
                </h2>
            </section >
            <section className={[myStyles.sections, myStyles.btSection]}>
                <a href='/' className={[myStyles.registerButton]}> {registerInfo.buttonText} </a>
            </section>

        </section>
    );
}

export default RegisterSection;

const registerInfo = {
    companyName:'BetterLesson',
    sectionMessage:'Professional Coaching',
    subMessage: 'PROFESSIONAL COACH SEMINARS & MENTORSHIP',
    buttonText: 'Register Now'
}
const myStyles = {
    sectionContent:`
    flex
    flex-col
    reg-section-container 
    bg-gradient-to-r from-indigo-800 via-indigo-600 via-blue-600 to-blue-300
    mb-20
    p-12 rounded-lg
    text-white
    
    `,
    sections:`
    mt-10
    `,
    sectionOneTextMessage:`
    text-7xl
    font-semibold
    tracking-wide

    `,
    subMessageText:`
    text-3xl
    tracking-widest
    `,
    sectionOne:`
    mt-4
    `
    ,
    btSection:`
    flex
    flex-col
    `,
    registerButton:`
    font-semibold
    text-2xl
    bg-green-700
    p-3
    rounded-md
    self-baseline
    drop-shadow-xl
   
    `
    

}