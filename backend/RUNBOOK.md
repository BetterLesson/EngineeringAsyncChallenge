# Backend Example

This project uses Java Spring Boot to quickly get a simple backend server up and running. The service provides endpoints to create and retrieve reservations.

### Prerequisites

To run this project, you will need to have installed:
* Java 17 (Open JDK 17 set as `JAVA_HOME`)
* Maven

### Using the Application

From the main backend directory, run the command: `mvn spring-boot:run`

By default, the app will be available on http://localhost:8080

To test out the reservation functionality, first `POST` one or more reservation events to the `/reservation` endpoint:
```
curl --location --request POST 'localhost:8080/reservation' \
--header 'Content-Type: application/json' \
--data-raw '{
  "user": "myusername",
  "event": "Global Hack-a-thon",
  "startTime": "2023-05-04T15:00:00Z",
  "endTime": "2023-05-07T00:00:00Z"
}'
```

Note that events cannot end before they start, an event's start time must be in the future, and that the same user cannot attend more than one event at once.

A successful request will return a `201 Created` status along with the reservation object. Unsuccessful requests return a `400 Bad Request` status and may return a more detailed error response.

To retrieve events, simply `GET` on the same endpoint:
```
curl --location --request GET 'localhost:8080/reservation'
```

This will retrieve all reservations. To retrieve reservations for a specific user, add a `user` query parameter to the request:
```
curl --location --request GET 'localhost:8080/reservation?user=myusername'
```

Either variation of the request will return a list of relevant reservation objects along with a `200 Ok` status.

### Future work

This project would obviously change if connected to a database rather than storing test data in memory. It is somewhat clunky to retrieve reservations by routing through a user list first, and would likely make more sense to retrieve reservations from a reservation table, filtering by a user ID field when for a specific user.

Adding unit tests would also be preferable.
