import express, { Express, Request, Response } from 'express';
import { routes } from './reservation'

const app: Express = express();
const port = 3000;

app.use(express.json())
app.use('/reservation', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
