import * as React from 'react';
import { Constants } from '../constants';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useEffect, useState } from 'react';

interface CoachInfo {
    coach: string;
    available: string; //Going to just make this a string, as I don't want to spend the time working in date types for this exercise.
    industry: string;
}

const stubData : CoachInfo[] = [
    {
        coach: 'Jessica D.',
        available: '11-06-22',
        industry: 'Professional Services'
    },
    {
        coach: 'David F.',
        available: '08-05-21',
        industry: 'Sports/Fitness'
    },
    {
        coach: 'Keir Y.',
        available: '04-12-22',
        industry: 'E-Sports'
    }
];

const columnDefs = [
    {field: 'coach', sortable: true},
    {field: 'available'},
    {field: 'industry', sortable: true}
]

export default function CoachesList() {
    const startingData : CoachInfo[] = [];
    const [data, setData] = useState(startingData);

    useEffect(() => {
        setTimeout(() => {
          setData(stubData);
        }, 1000);
      });

    return (
      <div>
        <p style={{
            fontSize:'50px', 
            color: Constants.stylizedFontColor, 
            textAlign:'center' 
            }}>Current Coaches</p>
        <div className="ag-theme-alpine" 
            style={{ justifyContent: 'center', alignItems: 'center', 
            height: '50vh', width: '100%'}}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={data}
            />
        </div>
      </div>
    );
  }
