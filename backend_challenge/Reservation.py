from datetime import datetime


class Reservation:
    def __init__(self, user, event, start_time: datetime, end_time: datetime):
        self.user = user
        self.event = event
        self.start_time = start_time
        self.end_time = end_time

    def is_valid(self):
        current_time = datetime.now()
        if current_time > self.start_time:
            return False
        return True

    def overlaps(self, other):
        if self.user != other.user:
            return False
        if self.start_time >= other.end_time or self.end_time <= other.start_time:
            return False
        return True
