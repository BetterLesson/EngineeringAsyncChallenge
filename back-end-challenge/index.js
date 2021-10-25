import express from 'express';
import config from './serverConfig';
import reservationRoutes from './routes/reservation';
import db from './models';

const app = express();

const middleware = function (req, _, next) {
  req.db = db;
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware);
app.use('/reservation', reservationRoutes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});

export default app;