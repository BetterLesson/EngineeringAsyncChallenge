import React from 'react'
import './index.css'

type Coach = {
    name: string;
    availableStarting: Date;
    industry: string;
}


export const CurrentCoachesTable = () => {
    const currentCoaches: Coach[] = [
       {
           name: 'Jessica D.',
           availableStarting: new Date(2022, 10, 6),
           industry: 'Professional Services'
       },
        {
           name: 'David F.',
           availableStarting: new Date(2021, 7, 5),
           industry: 'Sports/Fitness'
       },
        {
            name: 'Keir Y.',
            availableStarting: new Date(2022, 3, 12),
            industry: 'E-Sports'
        }
    ];


    const coachComponents = currentCoaches.map(({ name, availableStarting, industry }: Coach) => {
        return (
            <div className="current-coach-row">
                <span>{ name }</span>
                <span>{availableStarting.toDateString() }</span>
                <span>{ industry }</span>
            </div>
        )
    })

    return (
        <div className="current-coaches-table">
            <div className="">
                <span>Coach Name</span>
                <span>Available Starting</span>
                <span>Industry</span>
            </div>
            { coachComponents }
        </div>
    )
}
