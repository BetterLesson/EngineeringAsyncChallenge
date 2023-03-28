from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

reservations = []

#Please use this endpoint to get reservations: http://localhost:5000/reservation?username=myusername
@app.route('/reservations', methods=['GET'])
def get_reservation():
  user = request.args.get('username')
  userReservations = []

  if user is None:
    return jsonify("Reservations not found"), 404

  for item in reservations:
    if (item["user"] == user):
      userReservations.append(item)

  return jsonify(userReservations), 201

@app.route("/reservations", methods=["POST"])
def create_reservation():
  reservation = request.get_json()
  user = reservation["user"]
  event = reservation["event"]
  startTime = datetime.strptime(reservation["startTime"], '%Y-%m-%dT%H:%M:%SZ')
  endTime = datetime.strptime(reservation["endTime"], '%Y-%m-%dT%H:%M:%SZ')

  if datetime.now() > startTime:
    return jsonify("Event expired"), 400

  for item in reservations:
    if item["user"] == user and item["event"] == event:
      return jsonify("User already has a reservation"), 400

  reservations.append(reservation)

  print(reservations)
  return jsonify("Your event has been successfully reserved"), 201

if __name__ == "__main__":
    app.run(debug=True)