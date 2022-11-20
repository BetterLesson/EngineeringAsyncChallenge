To run the backend API run the following commands in your environment, preferably in a virtualenv

```
pip install -r requirements.txt
python app.py
```

Example curl request to test:

```
curl -d '{"user": "myusername2", "event": "Another Global Hack-a-thon", "startTime": "2023-01-04T15:00:00Z", "endTime": "2023-01-07T00:00:00Z"} ' -H "Content-Type: application/json" -X POST http://localhost:5000/reservation/
```