import json
import arrow
from flask import Flask, request, jsonify, make_response

app = Flask(__name__)
reservations = []


@app.route('/reservation', methods=['POST'])
def add_reservation():
    reservation_request = json.loads(request.data)
    start_time = arrow.get(reservation_request["startTime"])

    if start_time >= arrow.utcnow():
        message = jsonify(message="Start time has already passed; request not added")
        return make_response(message, 400)

    user_reservations = [r for r in reservations if r["user"] == reservation_request["user"]]
    for r in user_reservations:
        if is_overlap(reservation_request, r):
            message = jsonify(message="You have an overlapping reservation; request not added")
            return make_response(message, 400)

    reservations.append(reservation_request)
    return jsonify(reservation_request)

@app.route('/reservation', methods=['GET'])
def get_reservations():
    get_request = json.loads(request.data)
    user_reservations = [r for r in reservations if r["user"] == get_request["user"]]
    return jsonify(user_reservations)

def is_overlap(req, confirmed_res):
    for f, s in ((req, confirmed_res), (confirmed_res, req)):
        for time in (f["startTime"], f["endTime"]):
            if s["startTime"] < time < s["endTime"]:
                return True
    else:
        return False

if __name__ == '__main__':
    app.run()