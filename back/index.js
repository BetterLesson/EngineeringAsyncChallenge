const express = require("express");
const Reservation = require("./models/reservation");

const app = express();
const port = 4000;

app.use(express.json());

const reservationsDB = {};

app.get("/", (req, res) => {
  res.send("OK");
});

app.post("/reservation", (req, res) => {
  const { reservation } = req.body;

  const newReservation = new Reservation(
    reservation.user,
    reservation.event,
    reservation.startTime,
    reservation.endTime
  );

  if (!reservationsDB[reservation.user]) {
    reservationsDB[reservation.user] = [newReservation];
  } else {
    for (let reserv of reservationsDB[reservation.user]) {
      if (newReservation.colidesWith(reserv))
        return res
          .status(409)
          .send("Reservation colides with other in this user.");
    }
    reservationsDB[reservation.user].push(newReservation);
  }
  res.status(201).send(newReservation);
});

app.get("/reservation", (req, res) => {
  const { user } = req.query;
  try {
    const reservations = reservationsDB[user] ?? [];
    let pendingReservations = [];

    for (let reserv of reservations) {
      if (!reserv.passed()) {
        pendingReservations.push(reserv);
      }
    }
    return res.status(200).send(pendingReservations);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`API listening on port: ${port}`);
});
