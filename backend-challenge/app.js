import createError from 'http-errors';
import express from 'express';
import reservationRouter from './routes/reservation.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/reservation", reservationRouter);

app.use((_req, _res, next) => {
  next(createError(404));
});


app.listen(PORT, error => {
  if (error) {
    console.log("Error starting server on PORT", PORT);
  }
  console.log("Listening on PORT", PORT);
});
