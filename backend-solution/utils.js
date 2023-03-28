function getFutureReservations(reservations) {
  const currentDateTime = new Date();
  return reservations.filter(
    (reservation) => new Date(reservation.startTime) > currentDateTime
  );
}

const isInFuture = (reservation) => {
  const now = new Date();
  const { startTime } = reservation;

  return new Date(startTime) > now;
};

const conflictsWithOtherReservations = (
  { startTime, endTime },
  reservations
) => {
  const start1 = new Date(startTime);
  const end1 = new Date(endTime);

  return reservations.some((reservation) => {
    const start2 = new Date(reservation.startTime);
    const end2 = new Date(reservation.endTime);

    return (
      (start1 >= start2 && start1 < end2) ||
      (end1 > start2 && end1 <= end2) ||
      (start1 <= start2 && end1 >= end2) ||
      (start1 >= start2 && end1 <= end2)
    );
  });
};

const hasRequiredKeys = (reservation) =>
  reservation.hasOwnProperty('name') &&
  reservation.hasOwnProperty('startTime') &&
  reservation.hasOwnProperty('endTime');

const haveValidDates = ({ startTime, endTime }) => {
  return !isNaN(Date.parse(startTime)) && !isNaN(Date.parse(endTime));
};

module.exports = {
  getFutureReservations,
  isInFuture,
  conflictsWithOtherReservations,
  hasRequiredKeys,
  haveValidDates,
};
