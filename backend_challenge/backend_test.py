import unittest
from datetime import datetime

import backend
from backend import app


class TestReservationAPI(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()
        self.reservations = []
        self.reservation_data = {
            'user': 'John Doe',
            'event': 'Business Meeting',
            'start_time': '2023-07-23 15:40:31.962549',
            'end_time': '2025-03-23 15:40:31.962549'
        }

    def test_add_reservation(self):
        response = self.app.post('/reservation', json=self.reservation_data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json, {'message': 'Reservation added successfully'})
        self.assertEqual(len(backend.reservations), 1)
        self.assertEqual(backend.reservations[0].user, self.reservation_data['user'])
        self.assertEqual(backend.reservations[0].event, self.reservation_data['event'])
        self.assertEqual(backend.reservations[0].start_time,
                         datetime.fromisoformat(self.reservation_data['start_time']))
        self.assertEqual(backend.reservations[0].end_time, datetime.fromisoformat(self.reservation_data['end_time']))

    def test_add_reservation_past_event(self):
        self.reservations = []
        self.reservation_data['start_time'] = '2022-03-23 15:40:31.962549'
        response = self.app.post('/reservation', json=self.reservation_data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'Event has passed'})

    def test_add_reservation_overlapping_event(self):
        self.app.post('/reservation', json=self.reservation_data)
        self.reservation_data['start_time'] = '2024-03-23 15:40:31.962549'
        response = self.app.post('/reservation', json=self.reservation_data)
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json, {'error': 'Event overlaps with existing reservation'})
