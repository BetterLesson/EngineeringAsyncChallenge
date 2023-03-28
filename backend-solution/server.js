const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Data and Business Logic imports
const reservations = require('./data.js');
const {
  isInFuture,
  conflictsWithOtherReservations,
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

app.get('/', (req, res) => {
  res.send(reservations);
});

// GET all future reservations
app.get('/reservation', (req, res) => {
  // Get future reservations
  const futureReservations = getFutureReservations(reservations);

  res.status(200).send(futureReservations);
});

// POST reservation
app.post('/reservation', (req, res) => {
  const submittedReservation = req.body;

  // Check if reservation has valid format. Must have name, startTime, and endTime properties
  if (!hasRequiredKeys(submittedReservation))
    return res
      .status(400)
      .send(
        'Invalid submitted reservation format. Must have name, startTime, and endTime properties.'
      );

  // Check if reservation has valid dates
  if (!haveValidDates(submittedReservation))
    res.status(400).send('Submitted reservation has invalid dates');

  // Check if reservation is in the future
  if (!isInFuture(submittedReservation))
    return res.status(400).send('Submitted reservation must be in the future');

  // Check if reservation conflicts with existing reservations
  if (conflictsWithOtherReservations(submittedReservation, reservations))
    return res
      .status(400)
      .send(
        'Submitted reservation time conflicts with existing reservations times'
      );

  // Create new reservation object with only the required properties
  const newReservation = {
    name: submittedReservation.name,
    startTime: submittedReservation.startTime,
    endTime: submittedReservation.endTime,
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
