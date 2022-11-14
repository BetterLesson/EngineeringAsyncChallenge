from datetime import datetime

from flask import Flask, jsonify, request
from .model.reservation import Reservation, ReservationSchema


app = Flask(__name__)

reservations = [
Reservation("paul", "Global Hack-a-thon","2022-02-25","2022-02-25")

]

@app.route('/reservation')
def get_reservation():
    schema = ReservationSchema(many=True)
    all_reservations = schema.dump(reservations)
    print(all_reservations)


    return jsonify(all_reservations)

def check_value(data, val):
    return any(player['event']==val for player in data)


@app.route('/reservation', methods=['POST'])
def add_reservation():
    reservation = ReservationSchema().load(request.get_json())

    #check if this event exist
    schema = ReservationSchema(many=True)
    all_reservations = schema.dump(reservations)

    if (check_value(all_reservations, reservation.event)):
        return "This event already exist"
    else:
        start = datetime.fromisoformat(reservation.startTime)

        if start > datetime.now():
            reservations.append(reservation)
            return "successful"
        else:
            return "This event is considered passed, hence it will not be add "

if __name__ == "__main__":
    app.run()
