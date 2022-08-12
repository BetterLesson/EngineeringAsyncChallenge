from marshmallow import Schema, fields, validates_schema, ValidationError
import datetime
import pytz


class ReservationSchema(Schema):
    user = fields.String(required=True, allow_none=False)
    event = fields.String(requied=True, allow_none=False)
    startTime = fields.DateTime(required=True, allow_none=False)
    endTime = fields.DateTime(required=True, allow_none=False)

    @validates_schema
    def validate_dates(self, data, **kwargs):
        """Validates the following:
         start >= end
         start has not passed yet"""
        if data["startTime"] >= data["endTime"]:
            raise ValidationError("The startTime must be greater than the endTime.")

        if data["startTime"] <= datetime.datetime.now(pytz.timezone('UTC')):
            raise ValidationError("This event has already passed.")

