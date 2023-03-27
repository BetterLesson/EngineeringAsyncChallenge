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
  console.log('startTime: ', startTime);

  return startTime > now;

  // Must be in the future
};

const test = {
  name: 'Bowling Event',
  startTime: "new Date('2023-08-15T09:00:00Z)",
  endTime: " new Date('2023-08-17T18:00:00Z')", // 8/17/2023, 6:00:00 PM
};

console.log(isInFuture(test));

// Endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Post reservation
app.post('/reservation', (req, res) => {
  const reservation = req.body;
  console.log('reservation received: ', reservation);
  // Validate reservation
  // Must NOT overlap with existing reservations
  // Must be in the future

  // Add reservation to the list
  reservations.push(reservation);
});

// GET all future reservations
app.get('/reservation', (req, res) => {
  const futureReservations = getFutureReservations();
  res.send(futureReservations);
});
