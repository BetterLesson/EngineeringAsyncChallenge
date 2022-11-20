#!/usr/bin/env python

from flask import Flask
from flask_restful import Resource, Api
from datetime import datetime

import os
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import jsonify, request

app = Flask(__name__)
api = Api(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///" + os.path.join(basedir, 'bl_db.sqlite3')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class ReservationModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100))
    event = db.Column(db.String(255))
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)

    def __init__(self, user, event, start_time, end_time):
        self.user = user
        self.event = event
        self.start_time = start_time
        self.end_time = end_time

class ReservationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = ReservationModel

reservation_schema = ReservationSchema()
reservations_schema = ReservationSchema(many=True)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

# For debugging, clear tables in between sessions while testing
@app.before_first_request
def create_tables():
    db.drop_all()
    db.create_all()

@app.route('/reservation/')
def list_all_reservations():
    all_reservations = ReservationModel.query.all()
    return jsonify(reservations_schema.dump(all_reservations))

def convert_iso_to_datetime(timestamp):
    return datetime.fromisoformat(timestamp)

def convert_str_to_datetime(timestamp):
    return datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%SZ')

def has_already_elapsed(start_time):
    return start_time < datetime.utcnow()

@app.route('/reservation/<user>/', methods=["GET"])
def user_detail(user):
    reservations = ReservationModel.query.filter_by(user=user)
    return reservations_schema.jsonify(reservations)

@app.route('/reservation/', methods=['POST'])
def create_reservation():
    user = request.json.get('user', '')
    event = request.json.get('event', '')
    start_time = request.json.get('startTime', '')
    end_time = request.json.get('endTime', '')

    start_time = convert_str_to_datetime(start_time)
    end_time = convert_str_to_datetime(end_time)

    if has_already_elapsed(start_time):
        return 'Invalid reservation, time already has elapsed', 400

    has_existing_reservation = ReservationModel.query.filter_by(user=user, event=event).first()

    if has_existing_reservation:
        return 'Invalid reservation, reservation with event name already exists', 400

    # For readability, later on optimize the query with the two filtering date range
    # lookups
    existing_reservations = ReservationModel.query.filter(ReservationModel.user==user)

    has_start_time_overlap = existing_reservations \
        .filter((ReservationModel.start_time >= start_time) | (ReservationModel.end_time <= start_time)) \
        .first()

    has_end_time_overlap =  existing_reservations \
        .filter((ReservationModel.end_time <= end_time) | (ReservationModel.start_time <= end_time)) \
        .first()

    if has_start_time_overlap or has_end_time_overlap:
        return 'Invalid reservation, event overlaps with existing reservation', 400

    reservation = ReservationModel(user=user, event=event, start_time=start_time, end_time=end_time)

    db.session.add(reservation)
    db.session.commit()

    return reservation_schema.jsonify(reservation)

if __name__ == '__main__':
    app.run(debug=True)