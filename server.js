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
    startTime: new Date('2022-12-25T15:00:00Z'),
    endTime: new Date('2022-12-25T16:00:00Z'), // 12/25/2022, 4:00:00 PM
  },
  {
    name: 'Holiday party',
    startTime: new Date('2022-12-31T20:00:00Z'),
    endTime: new Date('2023-01-01T01:00:00Z'), // 1/1/2023, 1:00:00 AM
  },
  {
    name: 'Business conference',
    startTime: new Date('2023-06-15T09:00:00Z'),
    endTime: new Date('2023-06-17T18:00:00Z'), // 6/17/2023, 6:00:00 PM
  },
  {
    name: 'Product launch',
    startTime: new Date('2023-07-01T10:00:00Z'),
    endTime: new Date('2023-07-01T12:00:00Z'), // 7/1/2023, 12:00:00 PM
  },
  {
    name: 'Team building retreat',
    startTime: new Date('2023-08-15T09:00:00Z'),
    endTime: new Date('2023-08-17T18:00:00Z'), // 8/17/2023, 6:00:00 PM
  },
];

// Business logic
function getFutureReservations() {
  const currentDateTime = new Date();
  return reservations.filter(
    (reservation) => reservation.endTime > currentDateTime
  );
}
// Endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Post reservation
app.post('/reservation', (req, res) => {
  // TODO: Reservation is only valid if event date has not passsed
  // TODOO: Reservation is only valid if it doesnt overlap with existing reservations
});

// GET all future reservations
app.get('/reservations', (req, res) => {
  const futureReservations = getFutureReservations();
  res.send(futureReservations);
});
