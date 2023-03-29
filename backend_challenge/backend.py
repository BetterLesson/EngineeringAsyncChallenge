from flask import Flask, jsonify, request
from datetime import datetime
import json
from Reservation import Reservation

app = Flask(__name__)
reservations = []


@app.route('/reservation', methods=['POST'])
def add_reservation() -> json:
    """add an event to a user profile"""
    data = request.json
    user = data['user']
    event = data['event']
    start_time = datetime.fromisoformat(data['start_time'])
    end_time = datetime.fromisoformat(data['end_time'])
    possible_reservation = Reservation(user, event, start_time, end_time)
    if not possible_reservation.is_valid():
        return jsonify({'error': 'Event has passed'}), 400
    for reservation in reservations:
        if reservation.overlaps(possible_reservation):
            return jsonify({'error': 'Event overlaps with existing reservation'}), 400

    reservations.append(possible_reservation)
    return jsonify({'message': 'Reservation added successfully'}), 201


@app.route('/reservation/<string:user>', methods=['GET'])
def get_reservations(user: str) -> json:
    """get reservations for a user"""
    future_reservations = []
    for reservation in reservations:
        if reservation.user == user and reservation.is_valid():
            future_reservations.append(reservation)
    return jsonify(future_reservations), 200


if __name__ == '__main__':
    app.run(debug=True)
