const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Data
const reservations = [
  {
    name: 'Team meeting',
    startTime: '2022-12-25T15:00:00Z',
    endTime: '2022-12-25T16:00:00Z', // 12/25/2022, 4:00:
  },
  {
    name: 'Holiday party',
    startTime: '2022-12-31T20:00:00Z',
    endTime: '2023-01-01T01:00:00Z', // 1/1/2023, 1:00:00 AM
  },
  {
    name: 'Business conference',
    startTime: '2023-06-15T09:00:00Z',
    endTime: '2023-06-17T18:00:00Z', // 6/17/2023, 6:00:00 PM
  },
  {
    name: 'Product launch',
    startTime: '2023-07-01T10:00:00Z',
    endTime: '2023-07-01T12:00:00Z', // 7/1/2023, 12:00:00 PM
  },
  {
    name: 'Team building retreat',
    startTime: '2023-08-15T09:00:00Z',
    endTime: '2023-08-17T18:00:00Z', // 8/17/2023, 6:00:00 PM
  },
];

// Business logic
function getFutureReservations() {
  const currentDateTime = new Date();
  return reservations.filter(
    (reservation) => new Date(reservation.startTime) > currentDateTime
  );
}

const isInFuture = (reservation) => {
  const now = new Date();
  const { startTime } = reservation;

  return new Date(startTime) > now;
};

const doesNotConflictWithExistingReservations = (reservation) => {
  const { startTime, endTime } = reservation;
  const start = new Date(startTime);
  const end = new Date(endTime);

  return !reservations.some((existingReservation) => {
    const existingStart = new Date(existingReservation.startTime);
    const existingEnd = new Date(existingReservation.endTime);

    return start < existingEnd && end > existingStart;
  });
};

const test = {
  name: 'Bowling Event',
  startTime: '2023-08-15T09:00:00Z', // 8/15/2023, 9:00:00 AM
  endTime: '2023-08-17T18:00:00Z', // 8/17/2023, 6:00:00 PM
};

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
  if (!doesNotConflictWithExistingReservations(reservation)) {
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
  const futureReservations = getFutureReservations();
  res.send(futureReservations);
});
