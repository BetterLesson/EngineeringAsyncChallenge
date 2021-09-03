import sys

from flask import Flask, jsonify, request
from marshmallow import ValidationError

from data import ConflictingReservationException, data
from models import Reservation
from schemas import ma, reservation_schema

app = Flask(__name__)
app.url_map.strict_slashes = False
app.config["DEBUG"] = True
ma.init_app(app)


@app.route("/reservation/<user>")
def get_reservation(user):
    """Shows all reservations for the user.
    This has the potential to view anyone's reservations but since there is no auth in place, for now this will do.
    URL: /reservation/:user
    Method: GET
    URL Params: user=[str]
    Success Response:
        Code: 200
    Error Response:
        Code: 400
    """
    if reservations := Reservation().get(user):
        return {"reservations": reservations}, 200
    return {"message": "Reservation not found"}, 400


@app.route("/reservation/", methods=["POST"])
def create_reservation():
    """Adds a new reservation.
    Will check start and end date for correctness as well as overlap for user's prior reservations.
    URL: /reservation/
    Method: POST
    Data Params:
        {
            user: [string],
            event: [string],
            start_time: [datetime],
            end_time: [datetime]
        }
    Success Response:
        Code: 201
    Error Response:
        Code: 422 or 409
    """
    try:
        reservation_data = reservation_schema.load(request.form)
        Reservation().save(reservation_data)
    except ValidationError as err:
        return {"message": "Unable to complete", "errors": err.messages}, 422
    except ConflictingReservationException:
        return {"message": "Conflicting event exists for this user"}, 409

    return reservation_data, 201


if __name__ == "__main__":
    app.run()
