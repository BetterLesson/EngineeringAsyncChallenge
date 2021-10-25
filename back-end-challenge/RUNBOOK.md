# Back End Challenge

## Requirements

- Node 14.4.0
- Docker https://www.docker.com/products/docker-desktop

## Steps to run

1. Ensure Docker Daemon is running
2. Run `npm i`
3. Run `npm db:start`
4. Run `npm start`
5. Wait for the following messages in the terminal 
- Server is running on port 8080.
- Connected to database.
6. Use your favorite tool for API requests on http://localhost:8080/reservation
- The post requires a body where the keys are user, event, startTime, and endTime where the times are ISO 8601 format
- The get requires the user in the query parameter i.e. http://localhost:8080/reservation?user=some-user