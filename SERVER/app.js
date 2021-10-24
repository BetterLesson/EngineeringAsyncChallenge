var express = require('express');
var app = express();
let reservations = require('./reservations.json');

let currentDateTime = new Date();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json())

app.get('/reservations', function (req, res) {
      res.status(200)
      res.json({
        reservations: reservations
      });
})

app.post('/reservations', function (req, res) {
    // - An event reservation must have not already passed to be valid
    if(req.body.startTime < currentDateTime){
      res.status(400)
        const error = {
            "error": {
              "message": "Cannot make reservation in the past.", 
            }
        }
        res.json({ error })
        return;
    }
    // - An event reservation must not overlap an existing reservation for that user
    // OOF. really missing SQL's BETWEEN right now. T_T
  const isThereOverlap = reservations.some(reservation => {
    return reservation.user === req.body.user && 
    (
      (req.body.startTime < reservation.endTime && req.body.startTime > reservation.startTime) ||
      (req.body.endTime > reservation.startTime && req.body.endTime < reservation.endTime) ||
      (req.body.startTime === reservation.startTime || req.body.endTime === reservation.endTime)
      // there are probably holes here but my GOSH.
    );
  })

  if (isThereOverlap){
    res.status(400)
    const error = {
        "error": {
          "message": "Cannot make reservation that overlaps another.", 
        }
    }
    res.json({ error })
    return;
  }
  // otherwise, add it.
  reservations = reservations.concat(req.body)
  res.status(201)
  res.json({ reservation: req.body })
 })


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

