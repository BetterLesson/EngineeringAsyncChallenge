const express = require('express');
const app = express();
const { nanoid } = require('nanoid');

app.use(express.urlencoded({ extended: true }));

let reservations = [
    {
        "id": nanoid(),
        "user": "myusername",
        "event": "Global Hack-a-thon",
        "startTime": "2022-01-04T15:00:00Z",
        "endTime": "2022-01-07T00:00:00Z",
    },
    {
        "id": nanoid(),
        "user": "myusername",
        "event": "Global Hack-a-thon",
        "startTime": "2023-05-04T15:00:00Z",
        "endTime": "2023-05-07T00:00:00Z",
    },
    {
        "id": nanoid(),
        "user": "another",
        "event": "Global Hack-a-thon",
        "startTime": "2023-06-04T15:00:00Z",
        "endTime": "2023-06-07T00:00:00Z",
    }
];

app.get("/reservation", (req, res) => {
    res.send({ data: getUsersFutureReservations(reservations, req.body.user) })
})

app.post("/reservation", (req, res) => {
    const isPassed = checkPassed(req.body.start);
    const overlaps = getOverlaps(reservations, req.body.start, req.body.end, req.body.user);
    if (!isPassed && overlaps.length === 0) {
        reservations.push({
            "id": nanoid(),
            "user": req.body.user,
            "event": req.body.event,
            "startTime": req.body.start,
            "endTime": req.body.end
        });
        // console.log(reservations) // to help with quick testing
        return res.send({ message: 'Reservations added.' })
    } else if (isPassed) {
        return res.status(400).send({ message: 'Reservation was not made. Current time is beyond start time of the event.'})
    } else if (overlaps.length > 0) {
        return res.status(400).send({ message: 'Reservation was not made. There was an overlap with an existing reservation.'})
    } else {
        return res.status(400).send({ message: 'Error. Reservation was not made.' })
    }
})

function getUsersFutureReservations(reservationData, username) {
    return reservationData.filter(r => username === r.user && new Date(r.startTime) > new Date())
}

function checkPassed(start) {
    return new Date() > new Date(start)
}

function getOverlaps(reservationData, start, end, username) {
    start = new Date(start);
    end = new Date(end);
    return reservationData.filter(r => username === r.user).filter(r => {
        if (new Date(r.startTime) < start && start < new Date(r.endTime)) return true
        if (new Date(r.startTime) < end && end < new Date(r.endTime)) return true
        if (start < new Date(r.startTime) && new Date(r.startTime) < end) return true
        if (start < new Date(r.endTime) && new Date(r.endTime) < end) return true
    })
}

// console.log(getOverlaps(reservations, "2022-01-04T15:00:00Z", "2022-01-05T15:00:00Z", "myusername"))

app.listen(3000)