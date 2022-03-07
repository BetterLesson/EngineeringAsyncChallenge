const isPassed = (date) => new Date(date).getTime() < new Date().getTime();

const isOverlapping = (start, end, allReservations) => {
  // loop through all the reservations making sure none overlap with the incoming `start` and `end` times.
  // return `false` if no overlapping has occured. return `true` if dates overlap.
};

module.exports = isPassed;
module.exports = isOverlapping;
