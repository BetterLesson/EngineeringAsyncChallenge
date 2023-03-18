import express, { Request, Response } from "express";
import { DateTime } from "luxon";

type Reservation = {
  event: string;
  startTime: string;
  endTime: string;
};

type DbType = {
  [key: string]: Reservation[] | [];
};

const app = express();
const port = 8000; // can change to whatever you want

app.use(express.json());

const MOCK_DB: DbType = {};

const isReservationPassed = (startTime: string) => {
  const startTimeDate = DateTime.fromISO(startTime).toUTC();
  const now = DateTime.now().toUTC();

  return startTimeDate < now;
};

const isReservationOverlapping = (
  startTime: string,
  endTime: string,
  reservations: Reservation[]
) => {
  if (reservations.length === 0) return false;

  const newReservationStart = DateTime.fromISO(startTime).toUTC();
  const newReservationEnd = DateTime.fromISO(endTime).toUTC();

  for (let reservation of reservations) {
    const reservationStart = DateTime.fromISO(reservation.startTime);
    const reservationEnd = DateTime.fromISO(reservation.endTime);

    if (
      (newReservationStart >= reservationStart &&
        newReservationStart <= reservationEnd) ||
      (newReservationEnd >= reservationStart &&
        newReservationEnd <= reservationEnd) ||
      (newReservationStart <= reservationStart &&
        newReservationEnd >= reservationEnd)
    ) {
      return true;
    }
  }

  return false;
};

app.post("/reservation", (req: Request, res: Response) => {
  const { user, event, startTime, endTime } = req.body;

  if (!user || !event || !startTime || !endTime) {
    res.send({ error: "Request body is invalid." });
    return;
  }

  if (isReservationPassed(startTime)) {
    res.send({ error: "Reservation cannot be in the past." });
    return;
  }

  if (user in MOCK_DB) {
    if (isReservationOverlapping(startTime, endTime, MOCK_DB[user])) {
      res.send({ error: "Reservation cannot overlap with other reservations" });
      return;
    }
  }

  if (MOCK_DB[user] && MOCK_DB[user].length > 0) {
    MOCK_DB[user] = [...MOCK_DB[user], { event, startTime, endTime }];
  } else {
    MOCK_DB[user] = [{ event, startTime, endTime }];
  }
  res.send({
    message: "Reservation successfully made.",
    reservations: MOCK_DB[user],
  });
  return;
});

app.get("/reservation", (req: Request, res: Response) => {
  const { user } = req.body;

  if (!user) {
    res.send({ error: "Request body is missing user." });
    return;
  }

  if (user in MOCK_DB) {
    res.send({ reservations: MOCK_DB[user] });
  } else {
    res.send({ message: "This user does not have any reservations." });
  }
  return;
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
