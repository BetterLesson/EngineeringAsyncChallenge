const { Service } = require("feathers-memory");
const { BadRequest, GeneralError } = require("@feathersjs/errors");
const dayjs = require("dayjs");
const localizedFormat = require("dayjs/plugin/localizedFormat");

dayjs.extend(localizedFormat);

exports.Reservation = class Reservation extends Service {
  async setup(app) {
    this.app = app;
  }

  async find(params) {
    try {
      params.query.startTime = {
        $gte: dayjs().toISOString(),
      };
      return super.find(params);
    } catch (error) {
      throw new GeneralError(error);
    }
  }
  async create(data, params) {
    try {
      // Check for missing body data
      if (!data.user) throw new BadRequest("Missing user.");
      if (!data.event) throw new BadRequest("Missing event.");
      if (!data.startTime) throw new BadRequest("Missing start time.");
      if (!data.endTime) throw new BadRequest("Missing end time.");

      const startTime = dayjs(data.startTime);
      const endTime = dayjs(data.endTime);

      if (!startTime.isValid()) throw new BadRequest("Invalid start time.");
      if (!endTime.isValid()) throw new BadRequest("Invalid end time.");
      // Check the validity of the dates passed in
      if (dayjs().isAfter(startTime))
        throw new BadRequest(
          "Reservation can not start in the past. Please select a time in the future."
        );
      if (dayjs().isAfter(endTime))
        throw new BadRequest(
          "Reservation can not end in the past. Please select a time in the future."
        );

      if (dayjs(startTime).isAfter(endTime))
        throw new BadRequest(
          "Reservation start time can not be ahead of the end time."
        );

      if (dayjs(endTime).isBefore(startTime))
        throw new BadRequest(
          "Reservation end time can not be behind start time."
        );

      //Check for overlapping reservations for the current user
      const reservationConflicts = await this.app.service("reservation").find({
        query: {
          user: data.user,
          $or: [
            {
              startTime: {
                $gte: startTime.toISOString(),
                $lte: endTime.toISOString(),
              },
            },
          ],
        },
      });

      if (reservationConflicts.total > 0)
        throw new BadRequest({
          message:
            "Your reservation is in conflict with other reservations. Please select a different time.",
          errors: reservationConflicts.data,
        });
      return super.create(data, params);
    } catch (error) {
      throw new GeneralError(error);
    }
  }
};
