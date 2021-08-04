var moment = require("moment");

module.exports = function validateSingleReservation(
  startTime,
  endTime,
  reservationList
) {
  // RESERVATION VALIDITY RULE
  // An event reservation must have not already passed to be valid
  if (moment().isAfter(moment(startTime))) {
    return false;
  }

  // RESERVATION VALIDITY RULE
  // An event reservation must not overlap an existing reservation for that user
  // iterate through reservationList, pick out start & end times
  // if start time provided is after end time of given reservation, AND
  // if end time provided is before start time of given reservation
  reservationList.forEach((reservation) => {
    if (
      !(
        moment(startTime).isAfter(moment(reservation.endTime)) &&
        moment(endTime).isBefore(reservation.startTime)
      )
    ) {
      return false;
    }
  });

  return true;
};
