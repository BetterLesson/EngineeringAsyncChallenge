"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.json());
global.database = {};
app.get('/reservation', function (req, res) {
    res.status(200).json(global.database);
});
app.post('/reservation', function (req, res) {
    var data = req.body;
    if (data.user && data.event && data.startTime && data.endTime) {
        if (isValid(data)) {
            addReservation(data);
        }
        else {
            res.status(200).json('Reservation for ' + data.event + ' is not valid');
        }
        res.status(201).json('Reservation for ' + data.event);
    }
    else {
        res.status(422).json('Malformed data');
    }
});
function isValid(data) {
    var currentReservations = global.database[data.user];
    var start = new Date(data.startTime);
    var today = new Date();
    if (start < today) {
        return false;
    }
    return true;
}
function addReservation(data) {
    if (global.database[data.user]) {
        global.database[data.user].push(data);
    }
    else {
        global.database[data.user] = [data];
    }
}
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});
