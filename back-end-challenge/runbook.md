# Starting the server
1. Ensure you have node installed
2. `cd back-end-challenge` and run `yarn dev`
3. Server will be running on `localhost:8000`
4. Send a valid `POST` request to `localhost:8000/reservation` with the JSON body:

```
{
  "user": "myusername",
  "event": "Global Hack-a-thon",
  "startTime": "2022-01-04T15:00:00Z",
  "endTime": "2022-01-07T00:00:00Z"
}
```

5. Get the reservations for a user in by sending a `GET` request to `localhost:8000/reservation` with the JSON body:
```
{
  "user": "myusername"
}
```

# Notes
1. I just used an object to hold the data since it's expected that it resets when the server starts/stops, otherwise I would have used something like Postgres
2. Didn't create a whole file structure for the server, but `index.ts` is just like a controller for reservations
