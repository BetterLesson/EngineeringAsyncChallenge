from db import db

class Reservation():
    id = None
    user = None
    start_time = None
    end_time = None
    event = None

    def __init__(self, _id=None, user=None, start_time=None, end_time=None, event=None):
        # using _id since id is a reserved python word
        self.id = _id
        self.user = user
        self.start_time = start_time
        self.end_time = end_time
        self.event = event

    def save(self):
        db.insert_reservation(self)
        return self
