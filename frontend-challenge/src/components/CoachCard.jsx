import React from 'react';
function CoachCard({coach=null}) {
    const defaultInfo = {
        name:'Evon P.',
        startDate: '01/01/2023',
        industry: 'Gaming'
    }
    const coachInfo = coach? coach : defaultInfo;
    return (
        <section className=' w-64 rounded-lg m-3 bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-500'>
            <section className='flex flex-row p-2 justify-center'>
                <svg fill="white" className='w-32 self-center' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                </svg>    
            </section>
            <section className='flex-col text-center p-2'>
                <div className={[myStyles.cardText]} >{coachInfo.name}</div>
                <div className={[myStyles.cardText,myStyles.nameText ]} >Available Starting: {coachInfo.startDate} </div>
                <div className={myStyles.cardText} >{coachInfo.industry}</div>
            </section>
        </section>
    );
}

export default CoachCard;

const myStyles = {

    cardText:`
    text-white 
    text-2xl
    m-1
    `,
    nameText:`
    md-green
    `
}