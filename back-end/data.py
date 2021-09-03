from datetime import datetime
from typing import Dict, List, Union

reservation_data_type = Dict[str, Union[str, datetime]]


class ConflictingReservationException(Exception):
    pass


class Data:
    """Data class to preserve reservation while server is alive"""

    def __init__(self):
        self.reservations = []

    def get_reservation(self, user: str) -> List[reservation_data_type]:
        reservations = []
        for reservation in self.reservations:
            if reservation["user"] == user:
                reservations.append(reservation)
        return reservations

    def add_reservation(self, req: reservation_data_type) -> None:
        if self._check_overlap(req["user"], req["start_time"], req["end_time"]):
            raise ConflictingReservationException()

        self.reservations.append(req)

    def _check_overlap(self, user: str, start: datetime, end: datetime) -> bool:
        for rv in self.reservations:
            if rv["user"] == user and (
                self._check_time_overlap(start, rv["start_time"], rv["end_time"])
                or self._check_time_overlap(end, rv["start_time"], rv["end_time"])
            ):
                return True
        return False

    @staticmethod
    def _check_time_overlap(time: datetime, start: datetime, end: datetime) -> bool:
        return start <= time < end


data = Data()
