const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Data and Business Logic imports
const reservations = require('./data.js');
const {
  isInFuture,
  doesNotConflictWithExistingReservations,
  getFutureReservations,
  hasRequiredKeys,
  haveValidDates,
} = require('./utils.js');

app.use(bodyParser.json());
app.use(cors());

// Port Initialization
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// GET all future reservations
app.get('/reservation', (req, res) => {
  // Get future reservations
  const futureReservations = getFutureReservations(reservations);

  res.status(200).send(futureReservations);
});

// POST reservation
app.post('/reservation', (req, res) => {
  const submittedData = req.body;

  // Check if reservation has valid format. Must have name, startTime, and endTime properties
  if (!hasRequiredKeys(submittedData)) {
    return res
      .status(400)
      .send(
        'Invalid reservation format. Must have name, startTime, and endTime properties.'
      );
  }

  // Check if reservation has valid dates
  if (!haveValidDates(submittedData)) {
    return res.status(400).send('Submitted reservation has invalid dates');
  }

  // Check if reservation is in the future
  if (!isInFuture(submittedData)) {
    return res.status(400).send('Reservation must be in the future');
  }

  // Check if reservation conflicts with existing reservations
  if (!doesNotConflictWithExistingReservations(submittedData, reservations)) {
    return res
      .status(400)
      .send('Reservation conflicts with existing reservation');
  }

  // Create new reservation object with only the required properties
  const newReservation = {
    name: submittedData.name,
    startTime: submittedData.startTime,
    endTime: submittedData.endTime,
  };

  // Add new reservation to reservations array
  reservations.push(newReservation);

  // Send success message
  res.status(201).send('Reservation successfully added');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
