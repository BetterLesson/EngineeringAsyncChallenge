const { Router } = require('express');
const moment = require('moment');
const USERS = require('../models/Users');


const trackUsers = new Set();

module.exports = Router()
  .post('/', async(req, res, next) => {
    try {
      const { user, event, startTime, endTime } = req.body;

      if (!user ||  !event || !startTime || !endTime) {
        return res.status(400).json({ error: 'Required data is missing' });
      }
      const now = moment();
      trackUsers.add(user);

      // Check if event has already passed
      if (moment(startTime).isBefore(now)) {
        return res.status(422).json({ error: 'Event has already passed' });
      }

      // Check if reservation overlaps an existing reservation for this user
      const overlappingReservation = USERS.find((r) => {
        return (
          r.user === user &&
      moment(r.startTime).isBefore(moment(endTime)) &&
      moment(r.endTime).isAfter(moment(startTime))
        );
      });
      if (overlappingReservation) {
        return res
          .status(409)
          .json({ error: 'Reservation overlaps with existing reservation' });
      }

      // Add reservation to in-memory storage
      USERS.push({ user, event, startTime, endTime });

      // Return success response
      res.status(201).json({ message: 'Reservation created' });

      
    
    } catch (error) {
      //if unkown error
      next(error, res.status(500));
    
    }
  })
  .get('/', (req, res, next) => {
    try {
      const { user } = req.body;
      const now = moment();
      if(!user){
        return res.status(400).json({ error: 'Required data is missing' });
      } 
      if(!trackUsers.has(user)){
        return res.status(400).json({ error: 'User does not exist' });
      }

      // Filter USERS to only include future USERS for the user
      const futureRes = USERS.filter((r) => {
        return (
          r.user === user && moment(r.startTime).isAfter(now)
        );
      });
      let msg = '';
      futureRes.length < 1 ? msg = 'You have no reservations' : msg = 'Here are your reservations';

      res.status(200).json({ reservations: futureRes, message:msg });
        
    } catch (error) {
      next(error, res.status(500));
    }
  });
