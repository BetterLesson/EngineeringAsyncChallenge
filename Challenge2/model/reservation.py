from marshmallow import post_load
from Challenge2.model.event import EventActivities, EventSchema



class Reservation(EventActivities):
    def __init__(self, user, event,startTime,endTime):
        super(Reservation, self).__init__(user, event,startTime,endTime)

    def __repr__(self):
        return '<Reservation(name={self.user!r})>'.format(self=self)


class ReservationSchema(EventSchema):
    @post_load
    def make_reservation(self, data, **kwargs):
        return Reservation(**data)