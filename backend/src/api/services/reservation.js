const moment = require('moment/moment');
const _ = require('lodash');
const ServerError = require('../../lib/error');

//Keeping track of registered users, mostly to permit returning 404 errors.
//Not going to provide a means of actually adding users for this exercise.
const registeredUsers = ['testUser', 'myusername'];

//Going to make this a map to user ID, as that is the dominant lookup pattern.
//But, obviously, this would be a SQL table in reality, certainly indexed to
//user ID (and probably also by start date to facilitate time-based searches, and likely also by event id)
const registrations = new Map();

const outputTimeFormat = 'YYYY-MM-DD[T]HH:mm:ss[Z]'

//Stubbing out some event registrations for testing purposes.

registrations.set('testUser', [
  //One in the future
  {
    "user": "testUser",
    "event": "Global Hack-a-thon",
    //Going to store in string format, as that is likely closer to what we would
    //have when stored in a db.
    "startTime": moment().add(1, 'days').format(),
    "endTime": moment().add(2, 'days').format(),
  },
  //One in the past
  {
    "user": "testUser",
    "event": "Past Event",
    "startTime": moment().subtract(2, 'days').format(),
    "endTime": moment().subtract(1, 'days').format(),
  },
  //And one that has started but not ended
  {
    "user": "testUser",
    "event": "Current Event",
    "startTime": moment().subtract(1, 'days').format(),
    "endTime": moment().add(1, 'days').format(),
  },
]);

registrations.set('myusername', [
  //One in the future
  {
    "user": "testUser",
    "event": "Global Hack-a-thon",
    "startTime": moment().add(1, 'days').format(),
    "endTime": moment().add(2, 'days').format(),
  },
  //One in the past
  {
    "user": "testUser",
    "event": "Past Event 2",
    "startTime": moment().subtract(2, 'days').format(),
    "endTime": moment().subtract(1, 'days').format(),
  },
  //And one that has started but not ended
  {
    "user": "testUser",
    "event": "Current Event 2",
    "startTime": moment().subtract(1, 'days').format(),
    "endTime": moment().add(1, 'days').format(),
  },
]);

/**
 * @param {Object} options
 * @param {String} options.userId User id being requested
 * @throws {Error}
 * @return {Promise}
 */
module.exports.findReservations = async (options) => {
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  const { userId } = options;

  if(_.isNil(userId)) {
    return {status: 400, data: 'No userId provided'};
  }

  if(!registeredUsers.includes(userId)) {
    return {status: 404, data: 'User id not found'};
  }

  //Going to go ahead and say that a request for a valid user that happens to
  //not have any registrations is still a 200/success.

  const reservations = registrations.get(userId) || [];

  //Registrations that have not started.
  //Going to assume time parsing works, as validation is being done on ingest.
  const relevantRegistrations = reservations
  .filter(({ startTime }) => moment(startTime).isSameOrAfter(moment()))
  .map( ( { startTime, endTime, ...props}) => {
    //Get the dates into requested format.
    return {
      startTime: moment(startTime).format(outputTimeFormat),
      endTime: moment(endTime).format(outputTimeFormat),
      ...props
    }
  });

  return {
    status: 200,
    data: relevantRegistrations
  };
};

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.addReservation = async (options) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  const { body: reservation } = options;

  if(_.isNil(reservation)) {
    return {status: 400, data: 'No reservation provided'};
  }

  const { startTime, endTime, event, user} = reservation;

  if(_.isEmpty(user) || !registeredUsers.includes(user)) {
    return {status: 404, data: 'Provided userId not found'};
  }

  if(_.isEmpty(user) || !registeredUsers.includes(user)) {
    return {status: 404, data: 'Provided userId not found'};
  }

  if(_.isEmpty(event)) {
    return {status: 404, data: 'An event id must be provided'};
  }

  if(_.isNil(startTime) || !moment(startTime).isValid() || _.isNil(endTime) || !moment(endTime).isValid()) {
    return {status: 400, data: 'Provided times are invalid'};
  }

  //Going to go ahead and just silently correct reversed start and end times.
  let newStartTimeMoment = moment(startTime);
  let newEndTimeMoment = moment(endTime);
  if(newStartTimeMoment.isAfter(newEndTimeMoment)) {
    let temp = newEndTimeMoment;
    newEndTimeMoment = newStartTimeMoment;
    newStartTimeMoment = temp;
  }

  //In reality, I'd probably make an exception based on auth to allow authorized staff to do just this (assuming we don't have a separate admin API)
  if(newStartTimeMoment.isBefore(moment())) {
    return {status: 400, data: 'Cannot book reservations for events that have already started'};
  }

  const curUserReservations = registrations.get(user) || [];

  if(curUserReservations.find( ({startTime, endTime, event}) => {
    if(reservation.event === event) {
      //Going to reject same-event registration rather than treating it as an upsert.
      return true;
    }
    if(moment(startTime).isSame(newStartTimeMoment)) {
      return true;
    }
    const newEventStartsAfter = moment(startTime).isBefore(newStartTimeMoment);
    const earlierSegmentEnd = newEventStartsAfter ? moment(endTime) : newEndTimeMoment;
    const laterSegmentStart = newEventStartsAfter ? newStartTimeMoment : moment(startTime);
    //An overlap exists if the earlier segment's end is after the latter segment's start
    return earlierSegmentEnd.isAfter(laterSegmentStart);
  } )) {
    //Not going to take the time to disentangle these cases but I would in a real job.
    return {status: 400, data: `Booking overlaps with existing event or already registered for this event`};
  }

  curUserReservations.push(reservation);

  return {
    status: 200,
    data: reservation
  };
};

