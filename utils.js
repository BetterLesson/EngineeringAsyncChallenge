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

const doesNotConflictWithExistingReservations = (
  { startTime, endTime },
  reservations
) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return !reservations.some((existingReservation) => {
    const existingStart = new Date(existingReservation.startTime);
    const existingEnd = new Date(existingReservation.endTime);

    return start < existingEnd && end > existingStart;
  });
};

module.exports = {
  getFutureReservations,
  isInFuture,
  doesNotConflictWithExistingReservations,
};
