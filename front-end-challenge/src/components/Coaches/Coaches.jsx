import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import coachingImg from '../../assets/coaching.png';
import './coaches.css';

const columns = [
    {field: 'name', headerName: 'Coach Name', width: 150},
    {field: 'start', headerName: 'Start', width: 100},
    {field: 'industry', headerName: 'Industry', width: 250}
]

const rows = [
    {id: 1, name: 'Jessica D.', start: '11/6/22', industry: 'Professional Services'},
    {id: 2, name: 'David F.', start: '8/5/21', industry: 'Sports/Fitness'},
    {id: 3, name: 'Keir Y.', start: '4/12/22', industry: 'E-Sports'}
]

function Coaches() {
  return (
    <div className='coaches-section section'>
        <img src={coachingImg} className='coaching-img'/>
        <div className='current-coaches-container'>
            <Typography variant='h4' color='blue' sx={{m:2}}>Current Coaches</Typography>
            <DataGrid columns={columns} rows={rows} sx={{px:2}} autoHeight/>
        </div>
    </div>
  )
}

export default Coaches