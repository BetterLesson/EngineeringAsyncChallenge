from datetime import date
from marshmallow import Schema, fields


class EventActivities(object):
    def __init__(self, user, event,startTime,endTime):
        self.user = user
        self.event = event
        self.startTime = startTime
        self.endTime = endTime

    def __repr__(self):
        return '<Event(name={self.event!r})>'.format(self=self)


class EventSchema(Schema):
    user = fields.Str()
    event = fields.Str()
    startTime = fields.Str()
    endTime = fields.Str()
