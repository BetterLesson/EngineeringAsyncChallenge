var moment = require("moment");

module.exports = function filterForFutureReservations(reservationList) {
  //An event is considered 'passed' if the current local time is beyond the start time of the event.
  // Likewise, events are defined as in the future if their start date is beyond the current local time.
  const filtered = reservationList.filter((reservation) => {
    return moment(reservation.startTime).isAfter(moment());
  });
  return filtered;
};
