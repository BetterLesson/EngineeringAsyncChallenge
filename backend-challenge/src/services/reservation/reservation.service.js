// Initializes the `reservation` service on path `/reservation`
const { Reservation } = require('./reservation.class');
const hooks = require('./reservation.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/reservation', new Reservation(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('reservation');

  service.hooks(hooks);
};
