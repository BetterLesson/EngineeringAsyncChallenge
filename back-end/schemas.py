from flask_marshmallow import Marshmallow
from marshmallow import ValidationError, fields, validate, validates_schema

from models import Reservation

ma = Marshmallow()


class ReservationSchema(ma.Schema):
    class Meta:
        model = Reservation

    user = fields.Str(required=True, error_messages={"required": "User is required!"})
    event = fields.Str(
        required=True, error_messages={"required": "Event name is required!"}
    )
    start_time = fields.DateTime(
        required=True, error_messages={"required": "Start time is required!"}
    )
    end_time = fields.DateTime(
        required=True, error_messages={"required": "End time is required"}
    )

    @validates_schema
    def validate_dates(self, data, **kwargs):
        if data["start_time"] >= data["end_time"]:
            raise ValidationError("Start time cannot be before the end time!")


reservation_schema = ReservationSchema()
