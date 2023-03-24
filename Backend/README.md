Back End Challenge
----
This backend utilizes Python with Django/Rest framework.

API Endpoints:
- /reservation : [POST] Add JSON request to reservation object data
- /reservation/<str:username\> : [GET] See reservations by username
- / : [GET] To view test data

How To Run:
- Open project via command line or IDE
- Install requirements from requirements.txt
- - pip install -r requirements.txt
- run command 'python manage.py runserver'
- Hit endpoints listed from browser

Requirements Checklist:

- [x] A POST endpoint at /reservation where a user submits a JSON request to add an event reservation to their profile
- [x] An event reservation must have not already passed to be valid
- [x] An event reservation must not overlap an existing reservation for that user
- [x] A GET endpoint at /reservation where a user gets all future event reservations in their profile
- [x] All endpoints return standard HTTP response status codes
- [x] Error responses include supporting error message
