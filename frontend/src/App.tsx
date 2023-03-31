import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import MainBox from './components/MainBox'
import CoachesList from './components/CoachesList';
import MailingList from './components/MailingList';

const StyledPaper = styled(Paper)({
  p: 2,
  display: 'flex',
  flexDirection: 'column',
});

export default function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <StyledPaper>
          <MainBox/>
        </StyledPaper>
      </Grid>
      <Grid item xs={6}>
        <StyledPaper>
          <img  src='./media/coaching.png'/>
        </StyledPaper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={6}>
        <StyledPaper>
          <CoachesList/>
        </StyledPaper>
      </Grid>
      <Grid item xs={12}>
        <StyledPaper>
          <MailingList/>
        </StyledPaper>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={2.5}>
        <b>Email Address<br/>hello@reallygreatsite.com</b>
      </Grid>
      <Grid item xs={2.5}>
      <b>Mailing Address<br/>123 Anywhere St. Any City, ST 12345</b>
      </Grid>
      <Grid item xs={2}>
      <b>Phone Number<br/> (123) 456-7890</b>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
  );
}
