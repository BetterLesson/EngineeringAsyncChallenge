# Starting the server
1. Ensure you have node installed
2. `cd back-end-challenge` and run `yarn dev`
3. Server will be running on `localhost:8000`

# Notes
1. I just used an object to hold the data since it's expected that it resets when the server starts/stops, otherwise I would have used something like Postgres
2. Didn't create a whole file structure for the server, but `index.ts` is just like a controller for reservations
