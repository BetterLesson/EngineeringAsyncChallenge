const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Data and Business Logic imports
const reservations = require('./data.js');
const {
  isInFuture,
  doesNotConflictWithExistingReservations,
  getFutureReservations,
} = require('./utils.js');

app.use(bodyParser.json());
app.use(cors());

// Port Initialization
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Post reservation
app.post('/reservation', (req, res) => {
  const reservation = req.body;

  // Check if reservation is in the future
  if (!isInFuture(reservation)) {
    return res.status(400).send('Reservation must be in the future');
  }

  // Check if reservation conflicts with existing reservations
  if (!doesNotConflictWithExistingReservations(reservation, reservations)) {
    return res
      .status(400)
      .send('Reservation conflicts with existing reservation');
  }

  reservations.push(reservation);
  res.send('Reservation successfully added');
});

// GET all future reservations
app.get('/reservation', (req, res) => {
  // Get future reservations
  const futureReservations = getFutureReservations(reservations);
  res.send(futureReservations);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
