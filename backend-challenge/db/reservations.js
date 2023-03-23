const reservations = {};

const addReservation = (user, event, startTime, endTime) => {
  const reservation = { user, event, startTime, endTime };
  if (!(user in reservations)) {
    reservations[user] = [];
  }
  reservations[user].push({ event, startTime, endTime });
  return reservation;
}

const getReservations = () => {
  return reservations;
};

const validateReservation = (user, startTime, endTime) => {
  if (isStartTimePassed(startTime)) {
    return false;
  }

  // if there are no user reservations, then we can add them
  const userReservations = reservations[user];
  if (!userReservations) return true;

  for (const reservation of userReservations) {
    if (checkOverlap(reservation.startTime, reservation.endTime, startTime, endTime)) return false;
  }

  return true;
}

const isStartTimePassed = (startTime) => {
  const currentTime = new Date();
  const parsedStartTime = new Date(startTime);

  return parsedStartTime < currentTime;
}

const checkOverlap = (start1, end1, start2, end2) => {
  const startDate1 = new Date(start1);
  const endDate1 = new Date(end1);
  const startDate2 = new Date(start2);
  const endDate2 = new Date(end2);

  return (startDate1 <= endDate2 && startDate2 <= endDate1);
}

export {
  validateReservation,
  addReservation,
  getReservations
}
