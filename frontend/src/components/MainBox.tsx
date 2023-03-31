import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CSS from 'csstype';
import { Button } from '@mui/material';

const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000080',
  backgroundBlendMode: 'screen',
  backgroundImage: "url('./media/hero.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  width: '100vw',
  height: '100vh',
  position: 'relative',
}));

const logoStyle : CSS.Properties = {
  width: '8vw',
  position: 'absolute',
  top: '15vh',
  left: '10vw'
};

const textStyle : CSS.Properties = {
    position: 'absolute',
    top: '34vh',
    left: '10vw',
    color: 'white',
    fontSize: '60px'
};

const subtextStyle : CSS.Properties = {
    fontSize: '40px'
}

const buttonStyle : CSS.Properties = {
    position: 'absolute',
    bottom: '0vh',
    left: '10vw',
    backgroundColor:'blue',
    color:'white',
    fontSize:'40px'
}

export default function MainBox() {
  return (
    <div>
        <Container>
          <img style={logoStyle} src='./media/BL_LogoBasic.png'/>
          <div style={textStyle}><b>BetterLesson<br/>Professional Coaching</b><br/>
          <p style={subtextStyle}>PROFESSIONAL COACH SEMINARS AND MENTORSHIP</p></div>
          <Button style={buttonStyle}>Register Now</Button>
        </Container>
    </div>
  );
}