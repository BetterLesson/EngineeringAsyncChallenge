import React from 'react';
import CoachCard from './CoachCard';

function CoachList({
    coaches
}) {
    return (
        <section className='grid grid-rows-1 grid-cols-3 gap-6 m-4 tracking-wide'>
            {coaches.map((coach,id)=>
            {
                return (<CoachCard coach={coach} key={id} />)
            })}

        </section>
    );
}

export default CoachList;