from flask import jsonify
from flask_restful import Resource, reqparse, request
from flask_restful import fields, marshal_with, marshal
from datetime import datetime

all_reservations = {}


class Event:
    def __init__(self, user, eventname, start, end):
        self.username=user
        self.eventname=eventname
        self.startTime=start
        self.endTime=end

    # Return note data in easily serializable format
    @property
    def serialize(self):
        return {'username':self.username, 
                'event':self.eventname, 
                'startTime':self.startTime, 
                'endTime': self.endTime}

    # Check if an event starts is in the past
    @property
    def has_not_passed(self):
        datetime_obj = datetime.strptime(self.startTime, "%Y-%m-%dT%H:%M:%SZ")
        now = datetime.now()
        return datetime_obj > now


    # Check if the event interferes with any other of the user's events
    @property
    def does_not_interfere(self):
        datetime_obj = datetime.strptime(self.startTime, "%Y-%m-%dT%H:%M:%SZ")
        if self.username in all_reservations:
            reservations_to_check = all_reservations[self.username]
            # For each of the user's reservations
            for reservation in reservations_to_check:
                reservation_start_time = datetime.strptime(reservation.startTime, "%Y-%m-%dT%H:%M:%SZ")
                reservation_end_time = datetime.strptime(reservation.endTime, "%Y-%m-%dT%H:%M:%SZ")
                # check if the new event's startime interferes with the reservation
                if reservation_start_time < datetime_obj < reservation_end_time:
                    return False
        return True





class ReservationResource(Resource):
    def get(self):
        json=request.json
        if 'user' not in json:
            return "Make sure to add the user parameter either as an argument or in the body"
        username = json['user']
        if username in all_reservations:
            return jsonify(event_list=[i.serialize for i in all_reservations[username]])
        else:
            return f"No reservations found for {username}"

    def post(self):
        json=request.json
        if 'user' in json and 'event' in json and 'startTime' in json and 'endTime' in json:
            username = json['user']
            new_event = Event(username, json['event'], json['startTime'], json['endTime'])
            if new_event.has_not_passed and new_event.does_not_interfere:
                if username in all_reservations:
                    all_reservations[username].append(new_event)
                else:
                    all_reservations[username] = [new_event]
                return "Success! Event added to calendar!"
            else:
                return "The event is in the past or coincides with another event!"
        else:
            return "Make sure to add of the following parameters either as an argument or in the body: user, event, startTime, endTime"