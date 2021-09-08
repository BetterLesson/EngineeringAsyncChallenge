const express = require('express');

const app = express();
const reservations = [];

app.use(express.json());

app.get('/reservation', (req, res) => {
    const matches = reservations.filter(reservation => {
        return req.body.user === reservation.user && Date.parse(req.body.startTime) > Date.now();
    });

    res.send(matches);
});

app.post('/reservation', (req, res) => {
    // this doesn't validate the request data, but I would use something like
    // Joi for that
    if (Date.now() > Date.parse(req.body.endTime)) {
        return res.status(409).send('You cannot make a reservation in the past');
    }

    const newStart = Date.parse(req.body.startTime);
    const newEnd = Date.parse(req.body.endTime);
    const matches = reservations.filter(reservation => {
        const resStart = Date.parse(reservation.startTime);
        const resEnd = Date.parse(reservation.endTime);
        const startsTooEarly = 
            reservation.user == req.body.user &&
            newStart < resEnd && newEnd > resEnd;
        const endsTooLate = 
            reservation.user == req.body.user &&
            newStart < resStart && newEnd > resStart;

        return startsTooEarly || endsTooLate;
    });

    if (matches.length > 0) {
        return res.status(409).send('Your reservations request conflicts with one of your existing reservations.');
    }

    reservations.push(req.body);
    res.send('Your reservation has been accepted');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
