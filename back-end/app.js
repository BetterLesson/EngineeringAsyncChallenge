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
        if (isValid(data) && isAvailable(data)) {
            addReservation(data);
            res.status(201).json("Reservation for ".concat(data.event, " has been saved"));
        }
        else {
            res.status(200).json("Reservation for ".concat(data.event, " will not work out"));
        }
    }
    else {
        res.status(422).json('Malformed data');
    }
});
function isValid(data) {
    var start = new Date(data.startTime);
    var today = new Date();
    if (start < today) {
        return false;
    }
    return true;
}
function isAvailable(data) {
    var start = new Date(data.startTime);
    var end = new Date(data.endTime);
    if (!global.database[data.user]) {
        return true;
    }
    for (var _i = 0, _a = global.database[data.user]; _i < _a.length; _i++) {
        var reservation = _a[_i];
        if (!(start > reservation.endTime) && !(end < reservation.startTime)) {
            return false;
        }
    }
    return true;
}
function addReservation(data) {
    data.startTime = new Date(data.startTime);
    data.endTime = new Date(data.endTime);
    if (global.database[data.user]) {
        global.database[data.user].push(data);
    }
    else {
        global.database[data.user] = [data];
    }
}
app.listen(3010, function () {
    console.log('Listening on http://localhost:3010');
});
