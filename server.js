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

const data = [];

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
