# Instructions for Running the ReservationsService Application

Open the project in your preferred IDE (IntelliJ, Eclipse, etc.) and run the application. 

Once the application is running open an API Client such as Postman or Insomnia and create a new request. 

## GET api/v1/reservation/{userId}
This is the GET endpoint for the Reservation Service which returns the specified user's future reservations.

The url for the request should look like the example below. Note, your port may vary.  

Ex. http://localhost:8080/api/v1/reservation/user2

A successful request should return a list of reservations.

## POST api/v1/reservation 

This is the POST endpoint for the Reservation Service which can be used to add a reservation. 

The url for the request should look like the example below. Note, your port may vary. 

Ex. http://localhost:8080/api/v1/reservation

You must also include a Content-Type header and set it to application/json. 

Lastly, you must include a request body with your POST request. Below is an example of a successful request body. 
```json
{
  "username": "user1",
  "event": "Movie Night",
  "startTime": "2022-11-01T21:27:40.876+00:00",
  "endTime": "2022-11-02T21:27:40.876+00:00"
}
```


