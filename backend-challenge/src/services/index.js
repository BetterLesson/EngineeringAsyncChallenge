const reservation = require('./reservation/reservation.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(reservation);
};
