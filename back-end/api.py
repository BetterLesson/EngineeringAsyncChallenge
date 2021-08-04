from flask import Flask, request
from flask_restful import Resource, abort
from db import db
from serializer import ReservationSchema
from marshmallow import ValidationError

class Reservation(Resource):
    def get(self, reservation_id):
        if not db.reservation_exists(reservation_id):
            abort(404, message="Reservation {} doesn't exist".format(reservation_id))
        serializer = ReservationSchema()
        return serializer.dump(get_reservation(reservation_id))


class ReservationList(Resource):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def get(self):
        serializer = ReservationSchema()
        return serializer.dump(db.get_all_reservations(), many=True)

    def post(self):
        try:
            serializer = ReservationSchema()
            reservation = serializer.load(request.json)
        except ValidationError as e:
            abort(400, message="Validation error", errors=e.messages)
        new_id = reservation.save()
        return serializer.dump(reservation), 201

