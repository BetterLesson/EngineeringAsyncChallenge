import React from 'react';
import './hero.css';
import heroImg from '../../assets/hero.png';
import blLogo from '../../assets/BL_LogoBasic.png';
import {Button, Typography} from '@mui/material';

// Note - did not give Register Now button an action/onClick yet. 
// Would clarify this action first on regular project. Also scoping out for time.

function Hero() {
  return (
    <div className='hero-section section'>
        <img className='background-img hero-img' src={heroImg} />
        <div className='hero-content'>
            <img src={blLogo} width='60px'/>
            <Typography variant='h3' color='white'>BetterLesson</Typography>
            <Typography variant='h3' color='white'>Professional Coaching</Typography>
            <Typography variant='h6' color='white'>PROFESSIONAL COACH SEMINARS & MENTORSHIP</Typography>
            <Button variant='contained' sx={{position: 'absolute', bottom: 1}}>Register Now</Button>
        </div>
    </div>
  )
}

export default Hero