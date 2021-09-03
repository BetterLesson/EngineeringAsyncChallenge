from datetime import datetime
from typing import Dict, Iterator, Union

from data import Data, reservation_data_type

data = Data()


class Reservation:
    def __init__(self) -> None:
        pass

    def get(self, user: str) -> Iterator[reservation_data_type]:
        return data.get_reservation(user)

    def save(self, reservation_data: reservation_data_type) -> reservation_data_type:
        return data.add_reservation(reservation_data)
