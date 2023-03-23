import express from 'express';
import { validateReservation, addReservation, getReservations } from '../db/reservations.js'

const reservationRouter = express.Router();

reservationRouter.post("/", (req, res, _next) => {
  console.log(req.body)
  const { user, event, startTime, endTime } = req.body;

  if (validateReservation(user, startTime, endTime) === true) {
    const reservation = addReservation(user, event, startTime, endTime);
    res.status(201).send({
      message: 'Reservation created',
      reservation
    })
  } else {
    res.status(400).send({
      error: 'Unable to create reservation'
    })
  }
});

reservationRouter.get("/", (_req, res, _next) => {
  const reservations = getReservations();
  res.status(200).send(reservations);
})

export default reservationRouter;
