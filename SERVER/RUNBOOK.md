## To Run

1. cd into the SERVER folder.
2. use `npm install` in your command line
3. to run the server, use the command `node app.js`
4. open up an application like Postman

### To GET all reservations:

1. paste the following into the URL section of your Postman-or-similar application:

   - `http://127.0.0.1:3000/reservations` as a GET request.

2. TO POST to the reservations "database" :

- `http://127.0.0.1:3000/reservations` as a POST request.

- pop the following into the body of your request if ya wanna move quick:

<!-- this one will throw an error wow (at same time as an existing)-->

{
"user": "bobRoss",
"event": "MakerSpace Meetup",
"startTime": "2022-01-04T15:00:00Z",
"endTime": "2022-01-07T00:00:00Z"
}

  <!-- this one will ALSO throw an error wow (overlap)-->

{
"user": "bobRoss",
"event": "MakerSpace Meetup",
"startTime": "2022-01-04T17:00:00Z",
"endTime": "2022-01-07T02:00:00Z"
}

<!-- this is a good one -->

{
"user": "bobRoss",
"event": "Bob Ross Just Bossin' People Around: A Novel",
"startTime": "2025-01-04T17:00:00Z",
"endTime": "2025-01-07T02:00:00Z"
}
