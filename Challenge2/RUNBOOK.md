# Install the packages in the requirement  file


#challenge 2 _ to run, please follow the step below (Note error handling not added due to the time limit)

### 1. flask run (to start the api)
### 2. curl http://localhost:5000/reservation
### 3: TO add data to the end point
$ curl -X POST -H "Content-Type: application/json" -d '{
   "user": "Kay",
  "event": "Dancing",
  "startTime": "2022-12-02T00:00:00",
  "endTime": "2022-02-25T00:00:00"
}' http://localhost:5000/reservation


