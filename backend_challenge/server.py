from flask import Flask, request, jsonify
from marshmallow import ValidationError
from validation.reservation import ReservationSchema
from validation.user import UserSchema
import json

app = Flask(__name__)

users = {}


class User:
    def __init__(self, name: str):
        self.name = name
        self.reservations = []

    def add_reservation(self, data: dict):
        # check that this does not overlap with an existing reservation
        new_reservation = Reservation(data)

        for reservation in self.reservations:
            if new_reservation.within_timeframe(reservation):
                raise ValidationError(f"This event occurs within the {reservation.event} event.")

        # Simply append to the list.  This is not very efficient.  Could sort by the time of the event.
        self.reservations.append(new_reservation)

    def get_reservations(self):
        res = []
        for r in self.reservations:
            res.append(r.get_dict())

        return res


class Reservation:
    def __init__(self, data: dict):
        self.startTime = data.get("startTime")
        self.endTime = data.get("endTime")
        self.event = data.get("event")

    def within_timeframe(self, reservation):
        return ((self.startTime <= reservation.startTime <= self.endTime) or
                (self.startTime <= reservation.endTime <= self.endTime))

    def get_dict(self):
        # TODO: there is probably a dunder method for this __dict__?
        return {'startTime': f"{self.startTime:%Y-%m-%d %H:%M}",
                'endTime': f"{self.endTime:%Y-%m-%d %H:%M}",
                'event': self.event
                }


@app.route("/healthcheck")
def health_check():
    return json.dumps({'success': "success"}), 200, {'ContentType': 'application/json'}


@app.route("/reservation", methods=['GET'])
def reservation_get():
    request_data = request.json

    schema = UserSchema()
    try:
        # Validate request body against schema data types
        result = schema.load(request_data)
        user = get_user(result.get("user"))

        return jsonify(user.get_reservations()), 200

    except ValidationError as err:
        return jsonify(err.messages), 400


@app.route("/reservation", methods=['POST'])
def reservation_post():
    request_data = request.json

    schema = ReservationSchema()
    try:
        # Validate request body against schema data types
        result = schema.load(request_data)
        save_reservation(result)

    except ValidationError as err:
        return jsonify(err.messages), 400

    return jsonify({"status": "success"}), 200


def save_reservation(data: dict):
    user = get_user(data.get("user"))
    user.add_reservation(data)


def get_user(username: str):
    if username in users:
        user = users[username]
    else:
        user = User(username)
        users[username] = user

    return user
