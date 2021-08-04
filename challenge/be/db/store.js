const reservations = [
  {
    user: "myusername",
    event: "Global Hack-a-thon",
    startTime: "2022-01-04T15:00:00Z",
    endTime: "2022-01-07T00:00:00Z",
  },
];

const validateReservation = require("./validateReservation");
const filterForFutureReservations = require("./futureReservation.js");

const store = {
  getReservations() {
    return new Promise(function (resolve, reject) {
      // iterate through reservations and return only future ones that exist in reservations array
      resolve(filterForFutureReservations(reservations));
    });
  },

  addReservation(reservation) {
    let valid = validateReservation(
      reservation.startTime,
      reservation.endTime,
      reservations
    );
    console.log("VALID", valid);
    return new Promise(function (resolve, reject) {
      if (valid) {
        // add to our reservations array
        let newReservation = {
          user: reservation.user,
          event: reservation.event,
          startTime: reservation.startTime,
          endTime: reservation.endTime,
        };
        reservations.push(newReservation);
        resolve(reservations);
      } else {
        // do not add and reject with an error
        const error = {
          type: 400,
          errorText:
            "The requested reservation is not allowed - either its before now, or it overlaps with another reservation",
        };
        reject(error);
      }
    });
  },

  removeReservation(id) {
    // TODO FUTURE STATE
    // add unique IDs (either UUID or just ints)
    // delete from reservations array based on id - do not mutate the original!
    return new Promise(function (resolve, reject) {
      // Make an asynchronous call and either resolve or reject
      resolve(reservations);
    });
  },
};

module.exports = store;
