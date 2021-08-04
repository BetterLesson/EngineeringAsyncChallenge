import { Grid, Typography } from '@material-ui/core';
import { MailingListForm, GridTable } from '../../components';
import './CoachingExperts.css';

var data = [
  {
    id: 1,
    name: "Jessica D.",
    available: "11/6/22",
    industry: "Professional Services"
  },
  {
    id: 2,
    name: "David F.",
    available: "8/5/21",
    industry: "Sports/Fitness"
  },
  {
    id: 3,
    name: "Jessica D.",
    available: "4/12/22",
    industry: "E-Sports"
  },
];

var columns = [
  {
    field: "name",
    headerName: "Coach Name",
    minWidth: 150
  },
  {
    field: "available",
    headerName: "Available Starting",
    minWidth: 183
  },
  {
    field: "industry",
    headerName: "Industry",
    minWidth: 176
  }
];

function CoachingExperts() {
  return (
    <div className="CoachingExperts" >
      <Grid container direction="column" spacing={2} justifyContent="center">
        <Grid item container direction="row" spacing={1} justifyContent="center">
          <Grid item>
            <img src='../../media/coaching.png' alt="Online Learing" />
          </Grid>
            <Grid
              item
              id="coaching-table-heading-grid"
              container
              spacing={1}
            >
              <Grid item>
                <Typography id="coaching-table-heading" variant="h2">
                  Current Coaches
                </Typography>
              </Grid>
              <Grid item style={{ height: '100%', width: '100%' }}>
                <GridTable
                  rows={data}
                  columns={columns}
                  disableColumnMenu
                />
              </Grid>
            </Grid>
        </Grid>
        <Grid item container direction="row" spacing={1} justifyContent="center">
          <MailingListForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default CoachingExperts;
