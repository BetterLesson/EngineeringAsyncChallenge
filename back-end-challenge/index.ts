import express, { Request, Response } from "express";

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
  // TODO: handle time offsets (local time)
  const startTimeDate = new Date(startTime);
  const now = new Date();

  return startTimeDate < now;
};

const isReservationOverlapping = (
  startTime: string,
  endTime: string,
  reservations: Reservation[]
) => {
  if (reservations.length === 0) return false;

  const newReservationStart = new Date(startTime);
  const newReservationEnd = new Date(endTime);

  for (let reservation of reservations) {
    const reservationStart = new Date(reservation.startTime);
    const reservationEnd = new Date(reservation.endTime);

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

  if (user in MOCK_DB) {
    res.send({ reservations: MOCK_DB[user] });
  } else {
    res.send({ message: "You do not have any reservations." });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
