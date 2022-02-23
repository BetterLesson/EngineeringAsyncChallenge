import * as express from 'express'

const app = express();
app.use(express.json());

type Reservation = {
  user: string;
  event: string;
  startTime: Date;
  endTime: Date;
}

global.database = {};

app.get('/reservation', (req: any, res: any) => {
  res.status(200).json(global.database);
});
app.post('/reservation', (req: any, res: any) => {
  const data: Reservation = req.body;
  if(data.user && data.event && data.startTime && data.endTime){
    if(isValid(data)){
      addReservation(data);
      res.status(201).json(`Reservation for ${data.event} has been saved`);
    } else {
      res.status(200).json(`Reservation for ${data.event} is not valid`);
    }
  } else {
    res.status(422).json('Malformed data');
  }
});

function isValid(data: Reservation){
  const start = new Date(data.startTime);
  const today = new Date()
  if(start < today){
    return false;
  }

  return true;
}
function addReservation(data: Reservation):void{
  if(global.database[data.user]){
    global.database[data.user].push(data);
  } else {
    global.database[data.user] = [data];
  }
}

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
