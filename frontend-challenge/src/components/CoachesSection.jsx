import React from 'react';
import CoachList from './CoachList';
import coachImage from '../assets/coaching.png'
function CoachesSection({coachData}) {
    
    return (
        <section className='flex flex-row text-center mb-20 tracking-wide'>
           <img src={coachImage} alt="coachImage" className='w-30 rounded-xl ' />
            <section className='coachCard rounded-lg ml-12 '>
                <div className='text-7xl text-white '>Current Coaches</div>
                <section>
                    <CoachList coaches={coachData} />
                </section>
            </section>  
        </section>
    );
}

export default CoachesSection;