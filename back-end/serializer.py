from models import Reservation
from datetime import datetime
from db import db
from marshmallow import Schema, fields, post_load, ValidationError, validates_schema

class ReservationSchema(Schema):
    id = fields.Integer(required=False)
    user = fields.Str(required=True)
    start_time = fields.DateTime(data_key="startTime", required=True)
    end_time = fields.DateTime(data_key="endTime", required=True)
    event = fields.Str(required=True)

    @validates_schema
    def schema_validation(self, data, **kwargs):
        start_time = data['start_time']
        end_time = data['end_time']
        if start_time.replace(tzinfo=None) <= datetime.now():
            raise ValidationError(
                'Cannot create reservations in the past'
            )
        if start_time > end_time:
            raise ValidationError(
                'End time must not be before start time'
            )
        if start_time == end_time:
            raise ValidationError(
                'Start and end time cannot be the same'
            )

        for reservation in db.get_user_reservations(data['user']):
            # there's two valid cases here
            # either both times come before the reservation's start time
            # or they both come after
            if not (
                (start_time < reservation.start_time and end_time < reservation.start_time)
                or (start_time > reservation.end_time and end_time > reservation.end_time)
            ):
                raise ValidationError(
                    'New reservation conflicts with already scheduled event: {}'
                        .format(reservation.event)
                )

    @post_load
    def make_reservation(self, data, **kwargs):
        return Reservation(**data)
