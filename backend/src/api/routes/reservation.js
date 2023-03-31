const express = require('express');
const reservation = require('../services/reservation');

const router = new express.Router();


/**
 * Finds reservations for user
 */
router.get('/', async (req, res, next) => {
  const options = {
    userId: req.query['userId']
  };

  try {
    const result = await reservation.findReservations(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Adds a new reservation for an event for a specific user
 */
router.post('/', async (req, res, next) => {
  const options = {
    body: req.body
  };
  try {
    const result = await reservation.addReservation(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
