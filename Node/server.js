const express = require('express');
const app = express();
const port = 3000;
const isPassed = require('./scripts/date');
const isOverlapping = require('./scripts/date');

const doDBLookup = (user) => {
  // Connet to Mongoose/Mongo and send all reservations back
};

app
  .get('/reservation', async (req, res) => {
    if (!req) {
      return res.status(400).send({
        message: 'User not supplied. Please try again!'
      });
    }
    const allReservations = doDBLookup(req.query.user);
    // return all users after check
    if (allReservations) {
      res.status(200).send({ data: allReservations });
    } else {
      return res.status(400).send({
        message: 'No reservations were found!'
      });
    }
  })

  .post('/reservation', (req, res) => {
    const allReservations = doDBLookup(req.query.user);
    if (
      !isPassed(req.query.startTime) &&
      !isOverlapping(req.query.startTime, req.query.endTime, allReservations)
    ) {
      // update DB here
      return res.status(200).send({
        message: 'Reservation added succesfully!'
      });
    } else {
      return res.status(400).send({
        message: 'Reservation not added. Please try again!'
      });
    }
  })

  .listen(port);

console.log(`Listening on port ${port}`);
