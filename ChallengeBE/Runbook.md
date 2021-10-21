# Running locally

Run the command `docker-compose up`
- API will be hosted at [http://localhost:8081/swagger/index.html](http://localhost:8081/swagger/index.html)
   - Structured logging logging via SEQ avialable at [http://localhost/#/events](http://localhost/#/events)
      - Resposne header `x-correlation-id` included in structured logs
      - Sample search term `@Properties['x-correlation-id'] = 'a5134e0e-4ad2-4753-99ae-5e31a313e4e0'` 
   - 1 Sample Test Reservation is included for user: TestUser1


# Assumptions/Callouts
- User will already be authenticated and the FE will NOT be calling this service direclty
   - If this is not the case, we probably want to have the request contain an access token (or something similar) rather than the username directly
   - This approach will allow us to ensure that a user can only sign themselves up for an event (and they cant sign up others for an event)
   - If we need some power user functionality (i.e. have an admin/support person register a specific user for an event) we should be able to achieve that functionality with tokens as well
   - For the sake of time, all of this has been omitted
- From the original prompt ` An event is considered 'passed' if the current local time is beyond the start time of the event`
   - My implementation treats all times as UTC
   - This assumes that all local conversions can be done on the client that is calling this api
- Things I would have liked to add
   - DB implementation for data layer
   - Unit/integration tests