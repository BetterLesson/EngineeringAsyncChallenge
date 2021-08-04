from collections import defaultdict

''' This file functions as an in-memory db
    and mocks interactions with a real dbms
'''

def create_reservation_id_generator(start_index=0):
    next_id = start_index
    while True:
        yield next_id
        next_id += 1

class Database:
    def __init__(self):
        self.reservations = {}
        self.reservations_user_index = defaultdict(list)
        self.reservation_id = create_reservation_id_generator()

    def insert_reservation(self, reservation):
        next_id = next(self.reservation_id)
        reservation.id = next_id
        self.reservations[next_id] = reservation
        self.reservations_user_index[reservation.user].append(next_id)
        return next_id

    def reservation_exists(self, reservation_id):
        return reservation_id in self.reservations

    def get_reservation(self, reservation_id):
        return self.reservations.get(reservation_id)

    def get_user_reservations(self, username):
        if username not in self.reservations_user_index:
            return []
        return list(map(
            lambda reservation_id: self.reservations[reservation_id],
            self.reservations_user_index[username]
        ))

    def get_all_reservations(self):
        return list(self.reservations.values())

db = Database()
