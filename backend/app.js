var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dataFile = require('./routes/datastore.json')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/reservations', indexRouter);
// app.use('/users', usersRouter);
app.post('/reservations', function(req, res, next) {
  //Event must be in future
  const submitEvent = req.body.data
  console.log(submitEvent.startTime)
  const submitStartTime = new Date(submitEvent.startTime).getTime()
  const submitEndTime = new Date(submitEvent.endTime).getTime()
  const todaysDate = new Date().getTime()
  console.log(submitStartTime, submitEndTime)
  if(todaysDate < submitStartTime ){
    //Event must not overlap previous events
    for(reservation of dataFile){
      const storedStartTime = new Date(reservation.startTime).getTime()
      const storedEndTime = new Date(reservation.endTime).getTime()
      console.log(storedStartTime, submitStartTime)
      if((storedStartTime >= submitStartTime && 
              storedStartTime <= submitEndTime) || 
          (storedEndTime >= submitStartTime && 
                storedEndTime <= submitEndTime)  ){
        res.status(406).json({error: 'reservation overlaps with existing reservation'})
      }
    }
    dataFile.push(req.body.data)
    console.log(dataFile)
    res.status(201).json(req.body)
  }else{
    res.status(406).json({error: 'reservation is in the past'})
  }
});

app.get('/reservations',function(req, res, next) {
    const data = dataFile.filter((reservation)=>{
        return new Date(reservation.startTime).getTime() > new Date().getTime()
    })
    res.status(200).json(data)
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
