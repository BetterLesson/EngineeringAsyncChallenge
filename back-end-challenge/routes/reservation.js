import { Router } from 'express';
import moment from 'moment-timezone';
import { checkSchema, matchedData, validationResult } from 'express-validator';
import { Op } from 'sequelize';

const router = Router();

router.post('/',
  checkSchema({
    user: {
      in: ['body'],
      isString: true,
      errorMessage: 'Invalid User',
    },
    event: {
      in: ['body'],
      isString: true,
      errorMessage: 'Invalid Event',
    },
    startTime: {
      in: ['body'],
      isISO8601: true,
      errorMessage: 'Invalid Start Time',
    },
    endTime: {
      in: ['body'],
      isISO8601: true,
      errorMessage: 'Invalid End Time',
    },
  }),
  async (req, res) => {
    const { db } = req;
    const { errors } = validationResult(req);

    if (errors.length) {
      res.statusMessage = errors.map(({ msg }) => msg).join(', ');
      res.sendStatus(400);
      return;
    }

    const body = matchedData(req, { locations: ['body'] });

    if (moment(body.endTime).isBefore(body.startTime)) {
      res.statusMessage = 'End time is before start time';
      res.sendStatus(400);
      return;
    }

    if (moment().isAfter(body.startTime)) {
      res.statusMessage = 'Event reservation has already passed';
      res.sendStatus(400);
      return;
    }

    const reservations = await db.reservation.findAll({
      where: {
        [Op.and]: [
          { endTime: { [Op.gte]: body.startTime } },
          { startTime: { [Op.lte]: body.endTime } },
        ]
      }
    });

    if (reservations.length) {
      res.statusMessage = 'Event overlaps an existing event';
      res.sendStatus(400);
      return;
    }

    await db.reservation.create(body);
    res.sendStatus(200);
  });

router.get('/',
  checkSchema({
    user: {
      in: ['query'],
      isString: true,
      errorMessage: 'Invalid User',
    },
  }),
  async (req, res) => {
    const { db, query } = req;
    const { errors } = validationResult(req);

    if (errors.length) {
      res.statusMessage = errors[0].msg;
      res.sendStatus(400);
      return;
    }

    const reservations = await db.reservation.findAll({
      where: {
        user: query.user,
      },
      attributes: ['user', 'event', 'startTime', 'endTime'],
      order: ['startTime'],
    });

    res.send(reservations);
  });

export default router;
