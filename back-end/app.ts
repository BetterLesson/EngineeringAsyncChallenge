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
    if(isValid(data) && isAvailable(data)){
      addReservation(data);
      res.status(201).json(`Reservation for ${data.event} has been saved`);
    } else {
      res.status(200).json(`Reservation for ${data.event} will not work out`);
    }
  } else {
    res.status(422).json('Malformed data');
  }
});

function isValid(data: Reservation): boolean {
  const start = new Date(data.startTime);
  const today = new Date()
  if(start < today){
    return false;
  }

  return true;
}

function isAvailable(data: Reservation): boolean {
  const start = new Date(data.startTime);
  const end = new Date(data.endTime);
  if(!global.database[data.user]){
    return true;
  }

  for(const reservation of global.database[data.user]) {
    if(!(start > reservation.endTime) && !(end < reservation.startTime)){
      return false;
    }
  }

  return true;
}
function addReservation(data: Reservation):void {
  data.startTime = new Date(data.startTime);
  data.endTime = new Date(data.endTime);
  if(global.database[data.user]){
    global.database[data.user].push(data);
  } else {
    global.database[data.user] = [data];
  }
}

app.listen(3010, () => {
  console.log('Listening on http://localhost:3010');
});
