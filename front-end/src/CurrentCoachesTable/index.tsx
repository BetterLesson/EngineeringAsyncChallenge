import React from 'react'
import './index.css'

type Coach = {
    name: string;
    availableStarting: Date;
    industry: string;
}


const formatDate = (startingDate: Date): string => {
    const year = startingDate.getFullYear().toString();
    const date = startingDate.getDate();
    const month = startingDate.getMonth() + 1;

    return `${month}/${date}/${year.substring(2) }`
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
                <div>{ name }</div>
                <div>{formatDate(availableStarting) }</div>
                <div>{ industry }</div>
            </div>
        )
    })

    return (
        <>
            <h1>Current Coaches</h1>
            <div className="current-coaches-table">
                <div className="current-coach-row header">
                    <div>Coach Name</div>
                    <div>Available Starting</div>
                    <div>Industry</div>
                </div>
                { coachComponents }
            </div>
        </>
    )

}
