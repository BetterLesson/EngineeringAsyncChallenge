from flask import Flask, jsonify
from flask_restful import Api
from werkzeug.exceptions import HTTPException
from werkzeug.exceptions import default_exceptions
from endpoints.reservations.resource import ReservationResource

app = Flask(__name__)

# Handle default errors for http exceptions
@app.errorhandler(Exception)
def handle_error(e):
    code = 500
    if isinstance(e, HTTPException):
        code = e.code
    return jsonify(error=str(e)), code

for ex in default_exceptions:
    app.register_error_handler(ex, handle_error)


api = Api(app)
api.prefix = '/api'


api.add_resource(ReservationResource, '/reservation')

if __name__ == '__main__':
    app.run()