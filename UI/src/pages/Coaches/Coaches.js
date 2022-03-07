import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import classes from './Coaches.module.scss';
import { getData } from '../../services/Api';

const Coaches = () => {
  const [coaches, setCoaches] = useState([]);
  const [didMount, setDidMount] = useState(false);

  const getCoaches = async () => {
    const coaches = await getData('/data.json');
    if (coaches.length > 1) setCoaches(coaches);
  };

  const convertToTime = (availability) => {
    const date = new Date(availability.substring(0, availability.indexOf('T')));
    return date.toDateString();
  };

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) getCoaches();
  }, [didMount]);

  return (
    <>
      <Grid container>
        <Grid item xs={0} md={6}>
          <div className={classes.hero} />
        </Grid>

        <Grid item xs={12} md={6}>
          <h1 className="text-align-center">Current Coaches</h1>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Coach Name</strong>
                  </TableCell>

                  <TableCell align="right">
                    <strong>Available Starting</strong>
                  </TableCell>

                  <TableCell align="right">
                    <strong>Industry</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {coaches.map((coach) => (
                  <TableRow key={coach.UUID}>
                    <TableCell>{coach.customerName}</TableCell>
                    <TableCell align="right">
                      {convertToTime(coach.orderDate)}
                    </TableCell>
                    <TableCell align="right">{coach.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Coaches;
