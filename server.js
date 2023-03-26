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

const reservations = [
  {
    name: 'Birthday party',
    startTime: new Date('2023-03-25T15:00:00Z'),
    endTime: new Date('2023-03-25T16:00:00Z'),
  },
  {
    name: 'Concert',
    startTime: new Date('2023-03-25T17:30:00Z'),
    endTime: new Date('2023-03-25T18:30:00Z'),
  },
  {
    name: 'Business meeting',
    startTime: new Date('2023-03-26T09:00:00Z'),
    endTime: new Date('2023-03-26T10:00:00Z'),
  },
  {
    name: 'Movie screening',
    startTime: new Date('2023-03-26T12:30:00Z'),
    endTime: new Date('2023-03-26T14:00:00Z'),
  },
  {
    name: 'Networking event',
    startTime: new Date('2023-03-24T13:00:00Z'),
    endTime: new Date('2023-03-24T15:00:00Z'),
  },
];

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
  // TODO: Return all reservations that have not passed
});
