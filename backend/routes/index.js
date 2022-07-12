var express = require('express');
var router = express.Router();
const dataFile = require('./datastore.json')

/* GET home page. */
router.post('/', function(req, res, next) {
    dataFile.push(req.body)
    console.log(dataFile)
    res.status(201).json(req.body)
});


router.get('/',function(req, res, next) {
  const data = dataFile.filter((reservation)=>{
    return new Date(reservation.startTime) > new Date()
  })
  res.status(201).json(data)
});
