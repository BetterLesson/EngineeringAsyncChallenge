from flask import Flask
from flask_restful import Api
from api import ReservationList, Reservation

app = Flask(__name__)

api = Api(app)

api.add_resource(ReservationList, '/reservation')
api.add_resource(Reservation, '/reservation/<reservation_id>')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
